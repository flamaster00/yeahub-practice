import clsx from "clsx";

import FilterIcon from "@shared/assets/icons/filter.svg?react";

import styles from "./CollectionListWithFilterHeader.module.css";

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
