import { ApiItem, SearchableItem, ApiResponse } from '../types';

const processApiItems = (
  items: ApiItem[] | undefined,
  type: 'function' | 'type' | 'constant',
  modulePathStr?: string
): SearchableItem[] => {
  if (!items) return [];

  return items
    .filter((item: ApiItem) => item.name?.name && item.name.name !== 'Unknown')
    .map((item: ApiItem) => ({
      type,
      name: item.name!.name!,
      module: item.module || modulePathStr || '',
      description: item.description || `${type.charAt(0).toUpperCase() + type.slice(1)} ${item.name!.name}`,
      ...(type === 'function' && { signature: item.signature }),
      ...(type === 'type' && { definition: item.definition }),
      ...(type === 'constant' && { value: item.value })
    }));
};

export const processApiResponse = (data: ApiResponse, modulePathStr?: string): SearchableItem[] => {
  const allData: SearchableItem[] = [];

  // Process modules
  if (data.submodules) {
    allData.push(...data.submodules.map((modulePath: string[]) => ({
      type: 'module' as const,
      name: Array.isArray(modulePath) ? modulePath.join('.') : modulePath,
      path: modulePath,
      description: `Module containing functionality for ${modulePath[modulePath.length - 1]}`
    })));
  }

  // Process functions, types, and constants
  allData.push(...processApiItems(data.fns, 'function', modulePathStr));
  allData.push(...processApiItems(data.types, 'type', modulePathStr));
  allData.push(...processApiItems(data.constants, 'constant', modulePathStr));

  return allData;
};