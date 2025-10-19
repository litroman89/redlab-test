import type { Product } from "@/entities/product-card/model/types";

export type ProductListProps = {
  products: Product[];
  isLoading: boolean;
};
