const cache = () => new Map();
export const group = (fn, groups = cache()) => {
  return (...args) => {
    const key = JSON.stringify(args);
    const existing = groups.get(key);
    if (existing) {
      return existing;
    }
    const result = fn(...args);
    groups.set(key, result);
    return result.finally(() => groups.delete(key));
  };
};
export const createGroupedThunkAction = (
  thunkAction,
  groups = cache(),
) => {
  const groupFn = group(
    (args, dispatch, getState) =>
      thunkAction.apply(null, args)(dispatch, getState),
    groups,
  );

  return (...args) => (dispatch, getState) => {
    return groupFn(args, dispatch, getState);
  };
};
