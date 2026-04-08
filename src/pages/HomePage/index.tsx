import { CollectionList } from "@entities/collection";
import styles from "./index.module.css";

export const HomePage = () => {
  return (
    <div className={styles.HomePage}>
        <CollectionList className={styles.CollectionList}/>
    </div>
  );
};
