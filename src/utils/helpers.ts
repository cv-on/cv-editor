/**
 * Debounce
 */

import { CompanyType } from "@/types";
import dayjs, { Dayjs } from "dayjs";

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

/**
 * Sort company timeline
 */

export const sortCompaniesTimeline = (
  companies: CompanyType[]
): CompanyType[] => {
  const cloneCompanies = [...companies];
  cloneCompanies.sort((a, b) => {
    return b.toDate === "present"
      ? 1
      : new Date(b.toDate).getTime() - new Date(a.toDate).getTime();
  });

  return cloneCompanies;
};

/**
 * Get Time Duration
 */

export const getTimeDuration = (startDate: Dayjs, endDate: Dayjs): string => {
  const years = endDate.diff(startDate, "year");
  const months = endDate.diff(startDate.add(years, "year"), "month");

  const result = [] as string[];
  if (years > 0) result.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months > 0) result.push(`${months} mo${months > 1 ? "s" : ""}`);

  return result.length > 0 ? result.join(" ") : "0 months";
};
