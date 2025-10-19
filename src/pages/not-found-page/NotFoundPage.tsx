import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Сторінку не знайдено</h1>
      <p className={styles.text}>
        Сторінку, яку ви шукаєте, не знайдено. Перевірте URL та спробуєте ще
        раз.
      </p>
      <Link to="/" className={styles.link}>
        На головну
      </Link>
    </div>
  );
};
