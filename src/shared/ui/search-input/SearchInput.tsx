import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

import SearchIcon from "@shared/assets/icons/search.svg?react";

import styles from "./SearchInput.module.css";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  filterInputValue: string;
  handleFilterInputChange: (v: string) => void;
}

export const SearchInput = ({
  className,
  filterInputValue,
  handleFilterInputChange,
}: SearchInputProps) => {
  return (
    <div className={clsx(styles.SearchInput, className)}>
      <SearchIcon className={styles.icon} />
      <input
        className={styles.input}
        value={filterInputValue}
        onChange={(event) => handleFilterInputChange(event.target.value)}
      />
    </div>
  );
};
