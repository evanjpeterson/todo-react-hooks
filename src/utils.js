import { useCallback, useEffect } from "react";

// credit to: https://stackoverflow.com/a/56767883/14489279
// eslint-disable-next-line
export const useMountEffect = (fn) => useEffect(fn, []);

// credit to: https://stackoverflow.com/a/61127960/14489279
export const useDebouncedEffect = (effect, delay, deps) => {
  const callback = useCallback(effect, [...(deps || []), effect]);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};
