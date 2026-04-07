import { CollectionList } from "@entities/collection";
import styles from "./index.module.css";
import FilterIcon from "@shared/assets/icons/filter.svg?react";

export const HomePage = () => {
  return (
    <div className={styles.HomePage}>
        <CollectionList />
    </div>
  );
};
