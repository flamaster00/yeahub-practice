import { CollectionFilter, CollectionList } from "@entities/collection";
import styles from "./index.module.css";
import FilterIcon from "@shared/assets/icons/filter.svg?react";
import { useState } from "react";
import { Modal } from "@shared/ui/modal/modal";
export const HomePage = () => {
  const [IsOpenModal, setIsOpenModal] = useState(false);
  const openFilter = () => setIsOpenModal(true);
  const onModalClose = () => setIsOpenModal((prev) => !prev);
  return (
    <div className={styles.HomePage}>
      <div className={styles.container}>
        <div className={styles["collections-header"]}>
          <h1 className={styles.title}>Коллекции</h1>
          <div className={styles.filter}>
            <FilterIcon
              className={styles["filter-icon"]}
              onClick={openFilter}
            />
              {/* <CollectionFilter onClose={onModalClose}/> */}
          </div>
        </div>
        <CollectionList />
      </div>
    </div>
  );
};
