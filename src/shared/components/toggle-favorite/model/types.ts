import type { Product } from "@/entities/product-card/model/types";

export type FavoriteButtonProps = {
  product: Product;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
};
