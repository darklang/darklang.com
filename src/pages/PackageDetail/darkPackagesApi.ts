import { SubModule, PackageData } from "./types";

// API Response Types
export interface ApiFunction {
  name?: { name: string };
  parameters?: Array<{ name: string; typ: any }>;
  returnType?: any;
  description?: string;
}

export interface ApiType {
  name?: { name: string };
  description?: string;
}

export interface ApiConstant {
  name?: { name: string };
  description?: string;
}

export interface ApiResponse {
  fns?: ApiFunction[];
  types?: ApiType[];
  constants?: ApiConstant[];
  submodules?: string[][];
}

// Processed Data Types
export interface ProcessedSubmodule {
  name: string;
  fullName: string;
}

export interface ProcessedFunction {
  name: string;
  signature: string;
  description: string;
}

export interface ProcessedType {
  name: string;
  description: string;
}

export interface ProcessedConstant {
  name: string;
  description: string;
}

export interface ProcessedItemData {
  functions: string[];
  types: string[];
  constants: string[];
  submodules: ProcessedSubmodule[];
  fullFunctionData?: ProcessedFunction[];
  fullTypeData?: ProcessedType[];
  fullConstantData?: ProcessedConstant[];
}

export interface TypeDefinition {
  declaration: any;
  deprecated: any;
  description: string;
  id: string;
  name: {
    modules: string[];
    name: string;
    owner: string;
  };
}

export interface ModuleCounts {
  functions: number;
  types: number;
  constants: number;
}

const PRIMITIVE_TYPE_MAP = {
  TBool: "Bool",
  TString: "String",
  TChar: "Char",
  TInt64: "Int64",
  TUInt64: "UInt64",
  TInt8: "Int8",
  TUInt8: "UInt8",
  TInt16: "Int16",
  TUInt16: "UInt16",
  TInt32: "Int32",
  TUInt32: "UInt32",
  TFloat: "Float",
  TUnit: "Unit",
  TDateTime: "DateTime",
  TUuid: "Uuid",
  TBytes: "Bytes",
} as const;

const UNIT_TYPES = new Set(["Unit", "unit", "undefined"]);
const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

class DarkPackagesApi {
  private readonly baseUrl = "http://dark-packages.dlio.localhost:11001/search";
  private readonly typeUrl =
    "http://dark-packages.dlio.localhost:11001/type/get";
  private readonly typeCache = new Map<string, string>();

  private async fetchData(url: string): Promise<ApiResponse> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status} - ${errorText}`,
        );
      }
      return await response.json();
    } catch (error) {
      console.error("API Fetch Error:", error);
      throw error;
    }
  }

  private buildSearchUrl(
    moduleName: string,
    entityTypes: string,
    searchDepth = "direct",
  ): string {
    return `${this.baseUrl}?modules=${moduleName}&searchDepth=${searchDepth}&entityTypes=${entityTypes}`;
  }

  private isTypeId(value: string): boolean {
    return UUID_REGEX.test(value);
  }

  private async fetchTypeDefinition(
    typeId: string,
  ): Promise<TypeDefinition | null> {
    try {
      const response = await fetch(`${this.typeUrl}/${typeId}`);
      return response.ok ? await response.json() : null;
    } catch (error) {
      console.error(`Error fetching type definition for ${typeId}:`, error);
      return null;
    }
  }

  private getTypeNameFromDefinition(typeDef: TypeDefinition): string {
    return typeDef.name.name;
  }

  private async resolveCachedOrFetchType(typeId: string): Promise<string> {
    if (this.typeCache.has(typeId)) {
      return this.typeCache.get(typeId)!;
    }

    const typeDef = await this.fetchTypeDefinition(typeId);
    if (typeDef) {
      const typeName = this.getTypeNameFromDefinition(typeDef);
      this.typeCache.set(typeId, typeName);
      return typeName;
    }

    return typeId;
  }

  private async processPrimitiveType(typeObj: any): Promise<string | null> {
    for (const [key, value] of Object.entries(PRIMITIVE_TYPE_MAP)) {
      if (typeObj[key]) return value;
    }
    return null;
  }

  private async processCollectionType(typeObj: any): Promise<string | null> {
    if (typeObj.TList) {
      const innerType = await this.getTypeString(typeObj.TList[0]);
      return `List<${innerType}>`;
    }
    if (typeObj.TDict) {
      const innerType = await this.getTypeString(typeObj.TDict[0]);
      return `Dict<${innerType}>`;
    }
    return null;
  }

  private async processCustomType(typeObj: any): Promise<string | null> {
    if (!typeObj.TCustomType) return null;

    const packageInfo = typeObj.TCustomType[0]?.Ok?.[0]?.Package;
    if (packageInfo && Array.isArray(packageInfo) && packageInfo.length > 0) {
      const typeId = packageInfo[0];

      if (typeof typeId === "string" && this.isTypeId(typeId)) {
        const baseTypeName = await this.resolveCachedOrFetchType(typeId);
        const typeArgs = typeObj.TCustomType[1] || [];

        if (typeArgs.length > 0) {
          const argStrings = await Promise.all(
            typeArgs.map((arg: any) => this.getTypeString(arg)),
          );
          return `${baseTypeName}<${argStrings.join(", ")}>`;
        }
        return baseTypeName;
      }
    }

    // Fallback - handle non-UUID custom types
    const typeName = typeObj.TCustomType[0]?.Ok?.[0]?.Package || "CustomType";
    const typeArgs = typeObj.TCustomType[1] || [];
    if (typeArgs.length > 0) {
      const argStrings = await Promise.all(
        typeArgs.map((arg: any) => this.getTypeString(arg)),
      );
      return `${typeName}<${argStrings.join(", ")}>`;
    }
    return typeName;
  }

  private async getTypeString(typeObj: any): Promise<string> {
    if (!typeObj) return "Unknown";

    // Handle primitive types
    const primitiveType = await this.processPrimitiveType(typeObj);
    if (primitiveType) return primitiveType;

    // Handle collection types
    const collectionType = await this.processCollectionType(typeObj);
    if (collectionType) return collectionType;

    // Handle type variables
    if (typeObj.TVariable) {
      const varName = typeObj.TVariable[0] || typeObj.TVariable;
      return `'${varName}`;
    }

    // Handle function types
    if (typeObj.TFn) {
      const params = typeObj.TFn[0] || [];
      const returnType = typeObj.TFn[1];

      if (params.length === 0) {
        const retType = await this.getTypeString(returnType);
        return `() -> ${retType}`;
      }

      const paramTypes = await Promise.all(
        params.map((param: any) => this.getTypeString(param)),
      );
      const retType = await this.getTypeString(returnType);

      return `${paramTypes.join(" -> ")} -> ${retType}`;
    }

    // Handle custom types
    const customType = await this.processCustomType(typeObj);
    if (customType) return customType;

    // Handle string type IDs
    if (typeof typeObj === "string") {
      return this.isTypeId(typeObj)
        ? await this.resolveCachedOrFetchType(typeObj)
        : typeObj;
    }

    // Handle arrays and objects with type IDs
    if (Array.isArray(typeObj)) {
      if (
        typeObj.length === 2 &&
        typeof typeObj[0] === "string" &&
        this.isTypeId(typeObj[0])
      ) {
        const baseTypeName = await this.resolveCachedOrFetchType(typeObj[0]);
        const typeArgs = typeObj[1];

        if (typeArgs && Array.isArray(typeArgs) && typeArgs.length > 0) {
          const argStrings = await Promise.all(
            typeArgs.map((arg: any) => this.getTypeString(arg)),
          );
          return `${baseTypeName}<${argStrings.join(", ")}>`;
        }
        return baseTypeName;
      }
      return typeObj.length > 0
        ? await this.getTypeString(typeObj[0])
        : "Unknown";
    }

    // Handle objects with type ID keys
    if (typeof typeObj === "object" && typeObj !== null) {
      const keys = Object.keys(typeObj);

      for (const key of keys) {
        if (this.isTypeId(key)) {
          const baseTypeName = await this.resolveCachedOrFetchType(key);
          const value = typeObj[key];

          if (value && Array.isArray(value) && value.length > 0) {
            const argStrings = await Promise.all(
              value.map((arg: any) => this.getTypeString(arg)),
            );
            return `${baseTypeName}<${argStrings.join(", ")}>`;
          }
          return baseTypeName;
        }
      }

      // Handle single-key objects
      if (keys.length === 1) {
        const key = keys[0];
        const value = typeObj[key];

        if (typeof value === "string" && this.isTypeId(value)) {
          return await this.resolveCachedOrFetchType(value);
        }

        if (typeof value === "object") {
          return await this.getTypeString(value);
        }

        return key;
      }

      return keys[0] || "Unknown";
    }

    return "Unknown";
  }

  // Parameter Processing
  private async processParameters(
    parameters: any[] = [],
  ): Promise<{ name: string; type: string }[]> {
    const params = await Promise.all(
      parameters.map(async (p: any) => {
        const typeName = await this.getTypeString(p.typ);
        return {
          name: p.name,
          type: typeName,
        };
      }),
    );

    return params;
  }

  private async createFunctionSignature(fn: ApiFunction): Promise<string> {
    const name = fn.name?.name || "Unknown";
    const params = await this.processParameters(fn.parameters);

    // Filter out unit parameters for display, but keep all function types
    const displayParams = params.filter(p => !UNIT_TYPES.has(p.type));

    const paramStr = displayParams.map(p => `${p.name}: ${p.type}`).join(", ");
    const returnType = await this.getTypeString(fn.returnType);

    return `${name}(${paramStr}) : ${returnType}`;
  }

  async searchModuleData(moduleName: string): Promise<ApiResponse> {
    if (!moduleName?.trim()) {
      throw new Error("Module name is required");
    }

    const url = this.buildSearchUrl(
      moduleName,
      "module,function,type,constant",
    );
    return this.fetchData(url);
  }

  async getModuleCounts(moduleName: string): Promise<ModuleCounts> {
    const url = this.buildSearchUrl(moduleName, "function,type,constant");

    try {
      const data = await this.fetchData(url);
      return {
        functions: data.fns?.length || 0,
        types: data.types?.length || 0,
        constants: data.constants?.length || 0,
      };
    } catch (error) {
      console.error("getModuleCounts failed:", error);
      throw error;
    }
  }

  async getSubmodules(moduleName: string): Promise<string[][]> {
    const url = this.buildSearchUrl(moduleName, "module");

    try {
      const data = await this.fetchData(url);
      return data.submodules || [];
    } catch (error) {
      console.error("getSubmodules failed:", error);
      throw error;
    }
  }

  async getSubmodulesCount(moduleName: string): Promise<number> {
    try {
      const submodules = await this.getSubmodules(moduleName);
      const parts = moduleName.split(".");
      return submodules.filter(
        subPath =>
          Array.isArray(subPath) && subPath.length === parts.length + 1,
      ).length;
    } catch (error) {
      console.error(
        `Error fetching submodules count for ${moduleName}:`,
        error,
      );
      return 0;
    }
  }

  async processApiResponseToPackageData(
    moduleName: string,
    apiData: ApiResponse,
  ): Promise<PackageData> {
    const parts = moduleName.split(".");
    const isRootModule = parts.length <= 2;
    const displayName = parts[parts.length - 1] || moduleName;

    if (isRootModule) {
      const submodules = (apiData.submodules || []).filter(
        (subPath: string[]) =>
          Array.isArray(subPath) && subPath.length === parts.length + 1,
      );

      const processedSubModules = await Promise.all(
        submodules.map(async (subPath: string[]) => {
          const subModuleName = subPath[subPath.length - 1];
          const fullName = subPath.join(".");
          const counts = await this.getModuleCounts(fullName);

          let submodulesCount = 0;
          try {
            submodulesCount = await this.getSubmodulesCount(fullName);
          } catch (err) {
            console.error(
              `Error fetching submodules count for module card ${fullName}:`,
              err,
            );
          }

          return {
            name: subModuleName,
            fullName,
            description: `${subModuleName} utilities and operations`,
            functions: counts.functions,
            types: counts.types,
            constants: counts.constants,
            submodules: submodulesCount,
          };
        }),
      );

      return {
        name: displayName,
        fullName: moduleName,
        description: `${moduleName} provides core functionality and utilities.`,
        isRootModule: true,
        totalFunctions: apiData.fns?.length || 0,
        totalTypes: apiData.types?.length || 0,
        totalConstants: apiData.constants?.length || 0,
        subModules: processedSubModules,
      };
    }

    const functionList = await Promise.all(
      (apiData.fns || []).map(async (fn: ApiFunction) => ({
        name: fn.name?.name || "Unknown",
        signature: await this.createFunctionSignature(fn),
        description: fn.description || "No description available",
      })),
    );

    const typeList = (apiData.types || []).map((type: ApiType) => ({
      name: type.name?.name || "Unknown",
      description:
        type.description ||
        `Type definition for ${type.name?.name || "Unknown"}`,
    }));

    const constantList = (apiData.constants || []).map(
      (constant: ApiConstant) => ({
        name: constant.name?.name || "Unknown",
        description:
          constant.description ||
          `Constant definition for ${constant.name?.name || "Unknown"}`,
      }),
    );

    return {
      name: displayName,
      fullName: moduleName,
      description: `${displayName} utilities and operations`,
      isRootModule: false,
      functions: apiData.fns?.length || 0,
      types: apiData.types?.length || 0,
      constants: apiData.constants?.length || 0,
      functionList,
      typeList,
      constantList,
    };
  }

  async processModuleData(
    moduleName: string,
    apiData: ApiResponse,
  ): Promise<ProcessedItemData> {
    const parts = moduleName.split(".");

    // Filter submodules to only include direct children
    const submodules = (apiData.submodules || []).filter(
      (subPath: string[]) =>
        Array.isArray(subPath) && subPath.length === parts.length + 1,
    );

    const processedSubmodules = submodules.map((subPath: string[]) => ({
      name: subPath[subPath.length - 1],
      fullName: subPath.join("."),
    }));

    const fullFunctionData = await Promise.all(
      (apiData.fns || []).map(async (fn: ApiFunction) => ({
        name: fn.name?.name || "Unknown",
        signature: await this.createFunctionSignature(fn),
        description: fn.description || "No description available",
      })),
    );

    const fullTypeData = (apiData.types || []).map((type: ApiType) => ({
      name: type.name?.name || "Unknown",
      description: type.description || "No description available",
    }));

    const fullConstantData = (apiData.constants || []).map(
      (constant: ApiConstant) => ({
        name: constant.name?.name || "Unknown",
        description: constant.description || "No description available",
      }),
    );

    return {
      functions: (apiData.fns || []).map(
        (fn: ApiFunction) => fn.name?.name || "Unknown",
      ),
      types: (apiData.types || []).map(
        (type: ApiType) => type.name?.name || "Unknown",
      ),
      constants: (apiData.constants || []).map(
        (constant: ApiConstant) => constant.name?.name || "Unknown",
      ),
      submodules: processedSubmodules,
      fullFunctionData,
      fullTypeData,
      fullConstantData,
    };
  }

  async fetchPackageDetails(moduleName: string): Promise<PackageData> {
    const apiData = await this.searchModuleData(moduleName);
    return this.processApiResponseToPackageData(moduleName, apiData);
  }

  async getProcessedModuleData(moduleName: string): Promise<ProcessedItemData> {
    const apiData = await this.searchModuleData(moduleName);
    return this.processModuleData(moduleName, apiData);
  }

  async fetchSiblingModules(parentModule: string): Promise<
    Array<{
      name: string;
      path: string;
      stats: ModuleCounts & { submodules: number };
    }>
  > {
    const processedData = await this.getProcessedModuleData(parentModule);

    return Promise.all(
      processedData.submodules.map(async submodule => {
        const counts = await this.getModuleCounts(submodule.fullName);

        let submodulesCount = 0;
        try {
          submodulesCount = await this.getSubmodulesCount(submodule.fullName);
        } catch (err) {
          console.error(
            `Error fetching submodules count for ${submodule.fullName}:`,
            err,
          );
        }

        return {
          name: submodule.name,
          path: submodule.fullName,
          stats: { ...counts, submodules: submodulesCount },
        };
      }),
    );
  }

  async processInitialSidebarPackages(subModules: SubModule[]): Promise<
    Array<{
      name: string;
      path: string;
      stats: ModuleCounts & { submodules: number };
    }>
  > {
    return Promise.all(
      subModules.map(async (sub: SubModule) => {
        let submodulesCount = 0;
        try {
          submodulesCount = await this.getSubmodulesCount(sub.fullName);
        } catch (err) {
          console.error(
            `Error fetching initial submodules count for ${sub.fullName}:`,
            err,
          );
        }

        return {
          name: `${sub.name}.dark`,
          path: sub.fullName,
          stats: {
            functions: sub.functions,
            types: sub.types,
            constants: sub.constants,
            submodules: submodulesCount,
          },
        };
      }),
    );
  }

  async searchInModules(
    moduleNames: string[],
    searchTerm?: string,
  ): Promise<Map<string, ProcessedItemData>> {
    const results = new Map<string, ProcessedItemData>();

    const searchPromises = moduleNames.map(async moduleName => {
      try {
        const data = await this.getProcessedModuleData(moduleName);

        if (searchTerm) {
          const query = searchTerm.toLowerCase();
          const filteredData: ProcessedItemData = {
            ...data,
            functions: data.functions.filter(fn =>
              fn.toLowerCase().includes(query),
            ),
            types: data.types.filter(type =>
              type.toLowerCase().includes(query),
            ),
            constants: data.constants.filter(constant =>
              constant.toLowerCase().includes(query),
            ),
            submodules: data.submodules.filter(submod =>
              submod.name.toLowerCase().includes(query),
            ),
          };
          results.set(moduleName, filteredData);
        } else {
          results.set(moduleName, data);
        }
      } catch (error) {
        console.error(`Error searching in module ${moduleName}:`, error);
        results.set(moduleName, {
          functions: [],
          types: [],
          constants: [],
          submodules: [],
        });
      }
    });

    await Promise.all(searchPromises);
    return results;
  }

  async getBatchModuleCounts(
    moduleNames: string[],
  ): Promise<Map<string, ModuleCounts>> {
    const results = new Map<string, ModuleCounts>();

    const countPromises = moduleNames.map(async moduleName => {
      try {
        const counts = await this.getModuleCounts(moduleName);
        results.set(moduleName, counts);
      } catch (error) {
        console.error(`Error fetching counts for ${moduleName}:`, error);
        results.set(moduleName, { functions: 0, types: 0, constants: 0 });
      }
    });

    await Promise.all(countPromises);
    return results;
  }
}

export const darkPackagesApi = new DarkPackagesApi();
export const useDarkPackagesApi = () => darkPackagesApi;
