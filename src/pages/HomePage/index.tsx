import { CollectionList } from "@entities/collection";
import styles from "./index.module.css";
import FilterIcon from "@shared/assets/icons/filter.svg?react";

export const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.container}>
        <div className={styles["collections-header"]}>
          <h1 className={styles.title}>Коллекции</h1>
          <div className={styles.filter}>
            <FilterIcon
              className={styles["filter-icon"]}
            />
          </div>
        </div>
        <CollectionList />
      </div>
    </div>
  );
};
