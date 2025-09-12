export interface SidebarPackage {
  name: string;
  path: string;
  stats: {
    functions: number;
    types: number;
    values: number;
    submodules: number;
  };
}

export interface SelectedItem {
  type: "function" | "type" | "value" | null;
  name: string;
}
