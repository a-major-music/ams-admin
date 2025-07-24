import React from "react";

export const currencyFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
});

export const shortDateFormatter = (d: string) => new Date(d).toDateString();

// Custom React hook to use localStorage to store state rather than the page context
export const useStickyState = <T>(defaultValue: T, key: string):any[] => {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue === null || stickyValue === undefined) return defaultValue;

    try {
      return JSON.parse(stickyValue);
    }
    catch (e) {
      // Not an object - must be a raw value
      return stickyValue;
    }
  });
  React.useEffect(() => {
    if (value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
    else {
      window.localStorage.removeItem(key);
    }
  }, [key, value]);
  return [value, setValue];
};

