import clsx from "clsx";
import styles from "./CollectionListWithFilter.module.css";
import { CollectionList } from "@entities/collection";
import { CollectionFilter } from "@features/filter";
import FilterIcon from "@shared/assets/icons/filter.svg?react";


interface CollectionListWithFilterProps {
  className?: string;
}

export const CollectionListWithFilter = ({ className }: CollectionListWithFilterProps) => {
  return (
    <div className={clsx(styles.CollectionListWithFilter, className)}>
        <div className={styles.container}>
        <div className={styles["collections-header"]}>
          <h1 className={styles.title}>Коллекции</h1>
          <div className={styles.filter}>
            <FilterIcon
              className={clsx(styles["filter-icon"])}
            />
          </div>
        </div>
        <CollectionList />
      </div>
    </div>
  );
};