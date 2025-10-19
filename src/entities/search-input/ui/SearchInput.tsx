import type { SearchProps } from "../model/types";

import styles from "./SearchInput.module.css";

export const SearchInput = ({ value, onChange }: SearchProps) => {
  return (
    <input
      id="searchProductInput"
      type="text"
      placeholder="Почніть пошук..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.searchInput}
    />
  );
};
