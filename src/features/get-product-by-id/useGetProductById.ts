import { useEffect, useState } from "react";
import type { Product } from "@/entities/product-card/model/types";

export const useGetProductById = (id?: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/src/shared/api/products.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await response.json();
        const foundProduct = data.find((p) => p.id === id);

        setTimeout(() => {
          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            setError(`Product with id ${id} not found`);
          }
          setLoading(false);
        }, 300);
      } catch (err) {
        console.error("Помилка при завантаженні продукту:", err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};
