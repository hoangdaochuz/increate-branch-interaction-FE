export const normFile = (e: { fileList: never }) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
