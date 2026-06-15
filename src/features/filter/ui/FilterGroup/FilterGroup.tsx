import { Button } from "@shared/ui/button/Button";
import styles from "./FilterGroup.module.css";
import { type ReactNode } from "react";
import clsx from "clsx";

interface FilterGroupProps {
  className?: string;
  title: string;
  children: ReactNode;
  showAllOption?: boolean;
  showAll?: boolean;
  toggleShowAll?: () => void;
}

export const FilterGroup = ({
  className,
  title,
  children,
  showAllOption = false,
  showAll,
  toggleShowAll,
}: FilterGroupProps) => {
  return (
    <div className={clsx(styles.FilterGroup, className)}>
      <label className={styles.title}>{title}</label>
      {children}
      {showAllOption && (
        <Button variant="link" onClick={toggleShowAll}>
          {showAll ? "Скрыть" : "Показать все"}
        </Button>
      )}
    </div>
  );
};
