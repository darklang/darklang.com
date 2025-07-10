export interface SubModule {
  name: string;
  fullName: string;
  description: string;
  functions: number;
  types: number;
  constants: number;
  submodules?: number;
}

export interface PackageData {
  name: string;
  fullName: string;
  description: string;
  isRootModule: boolean;
  totalFunctions?: number;
  totalTypes?: number;
  totalConstants?: number;
  subModules?: SubModule[];
  functions?: number;
  types?: number;
  constants?: number;
  functionList?: any[];
  typeList?: any[];
  constantList?: any[];
}
