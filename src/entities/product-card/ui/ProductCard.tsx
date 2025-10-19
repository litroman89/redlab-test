import { Link } from "react-router-dom";
import type { ProductCardProps } from "../model/types";

import styles from "./ProductCard.module.css";

export const ProductCard = ({ product, children }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>${product.price}</p>
      {children}
    </Link>
  );
};
