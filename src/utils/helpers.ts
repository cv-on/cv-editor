/**
 * Debounce
 */

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

/**
 * Change Order
 */

type ChangeOrderProps<T> = {
  array: T[];
  fromIndex: number;
  toIndex: number;
};

export const changeItemOrder = <T>({
  array,
  fromIndex,
  toIndex,
}: ChangeOrderProps<T>) => {
  if (
    fromIndex < 0 ||
    toIndex < 0 ||
    fromIndex >= array.length ||
    toIndex <= array.length
  ) {
    const cloneArray = [...array];
    const [item] = cloneArray.splice(fromIndex, 1);
    cloneArray.splice(toIndex, 0, item);
    return cloneArray;
  }

  return array;
};
