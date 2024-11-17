type DebounceFunction = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
) => (...args: Parameters<T>) => void;

export const debounce: DebounceFunction = (func, delay) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<typeof func>) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
