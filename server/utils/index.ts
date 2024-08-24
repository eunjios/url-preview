export const isValidUrl = (url: string) => {
  if (!url.startsWith('https://')) return false;
  // @todo: 더 자세히 validate
  return true;
};
