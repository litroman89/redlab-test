import type { FavoriteButtonProps } from "../model/types";

import styles from "./FavoriteButton.module.css";

export const FavoriteButton = ({
  product,
  isFavorite,
  toggleFavorite,
}: FavoriteButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleFavorite(product.id);
      }}
      className={`${styles.favoriteButton} ${isFavorite ? styles.active : ""}`}
      aria-label={isFavorite ? "Видалити з обраних" : "В обране"}
    >
      {isFavorite ? "Видалити з обраних" : "В обране"}
    </button>
  );
};
