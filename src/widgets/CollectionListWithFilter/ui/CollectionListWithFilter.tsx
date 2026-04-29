import clsx from "clsx";
import styles from "./CollectionListWithFilter.module.css";
import { CollectionList } from "@entities/collection";
import { CollectionFilter } from "@features/filter";
import FilterIcon from "@shared/assets/icons/filter.svg?react";
import { useState } from "react";
import { useDebounce } from "@shared/hooks/useDebounce";

interface CollectionListWithFilterProps {
  className?: string;
}

export const CollectionListWithFilter = ({
  className,
}: CollectionListWithFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const [filterInputValue, setFilterInputValue] = useState("");
  const handleFilterInputChange = (value: string) => {
    setFilterInputValue(value);
  };
  const debouncedInputValue = useDebounce(filterInputValue, 500);

  const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>([])
  const handleSelectedSpecializations = (specialization: string) => {
    if (selectedSpecializations.includes(specialization)) {
      setSelectedSpecializations(specs => specs.filter(spec => spec !== specialization))
    } else {
      setSelectedSpecializations(specs => [specialization, ...specs])
    }
  }

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
        <CollectionList />
      </div>
      <CollectionFilter
        className={styles.CollectionFilter}
        isOpen={isFilterOpen}
        close={toggleFilter}
        filterInputValue={filterInputValue}
        handleFilterInputChange={handleFilterInputChange}
        selectedSpecializations={selectedSpecializations}
        handleSelectedSpecializations={handleSelectedSpecializations}
      />
    </div>
  );
};
