export function useBaseUrl() {
  const getAssetPath = (relativePath: string) => {
    return `${import.meta.env.BASE_URL}${relativePath}`;
  };

  return {
    getAssetPath,
  };
}
