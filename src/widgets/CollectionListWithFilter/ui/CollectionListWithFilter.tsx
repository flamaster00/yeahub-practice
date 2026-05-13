import clsx from "clsx";
import styles from "./CollectionListWithFilter.module.css";
import { CollectionList } from "@entities/collection";
import { CollectionFilter } from "@features/filter";
import FilterIcon from "@shared/assets/icons/filter.svg?react";
import { useMemo, useState } from "react";
import { useDebounce } from "@shared/hooks/useDebounce";

interface CollectionListWithFilterProps {
  className?: string;
}

interface Filters {
  page?: number;
  limit?: number;
  titleOrDescriptionSearch?: string;
  specializations?: number[];
  isFree?: boolean;
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

  const [selectedSpecializations, setSelectedSpecializations] = useState<
    number[]
  >([]);
  const handleSelectedSpecializations = (specializationId: number) => {
    if (selectedSpecializations.includes(specializationId)) {
      setSelectedSpecializations((specs) =>
        specs.filter((spec) => spec !== specializationId),
      );
    } else {
      setSelectedSpecializations((specs) => [specializationId, ...specs]);
    }
  };

  const [isFree, setIsFree] = useState(true);
  const filters: Filters = useMemo(
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
        filterInputValue={filterInputValue}
        handleFilterInputChange={handleFilterInputChange}
        selectedSpecializations={selectedSpecializations}
        handleSelectedSpecializations={handleSelectedSpecializations}
        isFreeSelected={isFree}
        setIsFreeSelected={setIsFree}
      />
    </div>
  );
};
