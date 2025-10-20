import type { Product } from "@/entities/product-card/model/types";
import { useEffect, useState } from "react";

export const useGetAllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      try {
        const response = await fetch("/src/shared/api/products.json");
        const data = await response.json();
        setTimeout(() => {
          setProducts(data);
          setLoadingProducts(false);
        }, 300);
      } catch (error) {
        console.error("Помилка при завантаженні продуктів:", error);
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoadingProducts };
};
