export interface ApiItem {
  name?: { name?: string };
  module?: string;
  description?: string;
  signature?: any;
  definition?: any;
  value?: any;
}

export interface SearchableItem {
  type: "module" | "function" | "type" | "value";
  name: string;
  path?: string[];
  module?: string;
  description: string;
  signature?: any;
  definition?: any;
  value?: any;
}

export interface ApiResponse {
  submodules?: string[][];
  fns?: ApiItem[];
  types?: ApiItem[];
  values?: ApiItem[];
}
