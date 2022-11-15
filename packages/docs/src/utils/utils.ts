export const createHeadingIds = <T extends string, R>(
  branches: R,
  endBranches?: T[],
): R & { main: string } & Record<T, string> => {
  const result: any = {};

  endBranches?.forEach(key => {
    result[key] = key;
  });

  const updateObject = (obj: any, prefix: string) => {
    Object.keys(obj).forEach(key1 => {
      if (obj[key1]?.constructor === ({}).constructor) {
        updateObject(obj[key1], prefix);
      } else {
        obj[key1] = `${prefix}.${obj[key1]}`;
      }
    });
  };

  branches && Object.entries(branches).forEach(([key, value]) => {
    if (typeof value === 'string') {
      result[key] = `${key}.${value}`;
    } else {
      updateObject(value, key);
      result[key] = value;
      result[key].main = key;
    }
  });

  return result;
};
