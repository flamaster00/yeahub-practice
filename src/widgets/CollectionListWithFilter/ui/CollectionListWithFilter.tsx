import clsx from "clsx";
import styles from "./CollectionListWithFilter.module.css";
import {
  CollectionList,
  type GetAllCollectionsParams,
} from "@entities/collection";
import { CollectionFilter } from "@features/filter";
import FilterIcon from "@shared/assets/icons/filter.svg?react";
import { useMemo } from "react";
import { useCollectionListWithFilter } from "../model/useCollectionListWithFilter";

interface CollectionListWithFilterProps {
  className?: string;
}

export const CollectionListWithFilter = ({
  className,
}: CollectionListWithFilterProps) => {
  const {
    debouncedInputValue,
    handleFilterInputChange,
    handleSelectedSpecializations,
    isFilterOpen,
    isFree,
    setIsFree,
    titleOrDescriptionSearch,
    toggleFilter,
    selectedSpecializations,
  } = useCollectionListWithFilter();

  const filters: GetAllCollectionsParams = useMemo(
    () => ({
      isFree,
      specializations: selectedSpecializations,
      titleOrDescriptionSearch: debouncedInputValue,
    }),
    [isFree, selectedSpecializations, debouncedInputValue],
  );

  return (
    <div className={clsx(styles.CollectionListWithFilter, className)}>
      <div className={styles.collectionWrapper}>
        <div className={styles.collectionHeader}>
          <h1 className={styles.title}>Коллекции</h1>
          <div className={styles.filter}>
            <FilterIcon
              className={clsx(styles.filterIcon)}
              onClick={toggleFilter}
            />
          </div>
        </div>
        <CollectionList filters={filters} />
      </div>
      <CollectionFilter
        className={styles.CollectionFilter}
        isOpen={isFilterOpen}
        close={toggleFilter}
        filterInputValue={titleOrDescriptionSearch}
        handleFilterInputChange={handleFilterInputChange}
        selectedSpecializations={selectedSpecializations}
        handleSelectedSpecializations={handleSelectedSpecializations}
        isFreeSelected={isFree}
        setIsFreeSelected={setIsFree}
      />
    </div>
  );
};
