import { ProductCard } from "@/entities/product-card";
import { FavoriteButton } from "@/shared/toggle-favorite/ui/FavoriteButton";
import { useFavoritesStore } from "@/entities/favorites";
import type { ProductListProps } from "../model/types";

import styles from "./ProductList.module.css";

export const ProductList = ({ products, isLoading }: ProductListProps) => {
  const { favorites, toggleFavorite } = useFavoritesStore();

  if (isLoading) {
    return <div>Завантаження...</div>;
  }

  return (
    <div className={styles.productList}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product}>
            <FavoriteButton
              product={product}
              isFavorite={favorites.includes(product.id)}
              toggleFavorite={toggleFavorite}
            />
          </ProductCard>
        ))
      ) : (
        <div>Продуктів не знайдено.</div>
      )}
    </div>
  );
};
