import type { ProductId } from "@/entities/product-card/model/types";

export type FavoritesState = {
  favorites: ProductId[];
  toggleFavorite: (id: ProductId) => void;
};
