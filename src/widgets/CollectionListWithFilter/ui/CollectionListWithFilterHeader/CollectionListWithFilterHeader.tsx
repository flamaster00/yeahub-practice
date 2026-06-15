import clsx from "clsx";
import styles from "./CollectionListWithFilterHeader.module.css";
import FilterIcon from "@shared/assets/icons/filter.svg?react";

interface CollectionListWithFilterHeaderProps {
  toggleFilter: () => void;
}

export const CollectionListWithFilterHeader = ({
  toggleFilter,
}: CollectionListWithFilterHeaderProps) => {
  return (
    <div className={styles.CollectionListWithFilterHeader}>
      <h1 className={styles.title}>Коллекции</h1>
      <FilterIcon className={clsx(styles.filterIcon)} onClick={toggleFilter} />
    </div>
  );
};
