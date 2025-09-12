export interface SubModule {
  name: string;
  fullName: string;
  description: string;
  functions: number;
  types: number;
  values: number;
  submodules?: number;
}

export interface PackageData {
  name: string;
  fullName: string;
  description: string;
  isRootModule: boolean;
  totalFunctions?: number;
  totalTypes?: number;
  totalValues?: number;
  subModules?: SubModule[];
  functions?: number;
  types?: number;
  values?: number;
  functionList?: any[];
  typeList?: any[];
  valueList?: any[];
}
