import clsx from "clsx";
import styles from "./SearchInput.module.css";
import SearchIcon from "@shared/assets/icons/search.svg?react";
import type { InputHTMLAttributes } from "react";

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
