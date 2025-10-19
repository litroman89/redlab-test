import { motion } from "framer-motion";
import { FavoriteButton } from "@/shared/toggle-favorite/ui/FavoriteButton";
import { useFavoritesStore } from "@/entities/favorites";
import type { ProductDetailsProps } from "../model/types";
import { containerVariants, itemVariants } from "@/shared/animations/variants";

import styles from "./ProductDetails.module.css";

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { favorites, toggleFavorite } = useFavoritesStore();
  const isFavorite = favorites.includes(product.id);

  return (
    <motion.div
      className={styles.details}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.img
        src={product.image}
        alt={product.name}
        className={styles.image}
        variants={itemVariants}
      />
      <motion.div className={styles.info} variants={containerVariants}>
        <motion.h1 className={styles.name} variants={itemVariants}>
          {product.name}
        </motion.h1>
        <motion.p className={styles.description} variants={itemVariants}>
          {product.description}
        </motion.p>
        <motion.div className={styles.actions} variants={itemVariants}>
          <span className={styles.price}>${product.price}</span>
          <FavoriteButton
            product={product}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
