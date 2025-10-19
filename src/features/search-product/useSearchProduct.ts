import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { UseSearchProps } from "./model/types";

export const useSearchProducts = ({ products }: UseSearchProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleSearch = useCallback((term: string) => {
    setInputValue(term);
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (inputValue) {
        setSearchParams({ q: inputValue });
      } else {
        setSearchParams({});
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue, setSearchParams]);

  const filteredProducts = useMemo(
    () =>
      products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [products, searchTerm]
  );

  return { filteredProducts, handleSearch, inputValue };
};
