export interface SidebarPackage {
  name: string;
  path: string;
  stats: {
    functions: number;
    types: number;
    constants: number;
    submodules: number;
  };
}

export interface SelectedItem {
  type: 'function' | 'type' | 'constant' | null;
  name: string;
}