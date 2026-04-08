import { CollectionList } from "@entities/collection";
import styles from "./index.module.css";
import { CollectionListWithFilter } from "@widgets/CollectionListWithFilter";

export const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <CollectionListWithFilter />
    </div>
  );
};
