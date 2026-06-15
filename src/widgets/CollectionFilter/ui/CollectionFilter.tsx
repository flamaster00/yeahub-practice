import styles from "./CollectionFilter.module.css";
import { SearchInput } from "@shared/ui/search-input/SearchInput";
import { useEffect, useState } from "react";
import { FilterWrapper } from "@features/filter";
import { AccessGroup } from "./AccessGroup/AccessGroup";
import { SpecializationGroup } from "./SpecializationGroup/SpecializationGroup";
import { useCollectionFilter } from "../hooks/useCollectionFilter";
import clsx from "clsx";
import { useDebounce } from "@shared/hooks/useDebounce";

interface CollectionFilterProps {
  className?: string;
  onClose?: () => void
}

export const CollectionFilter = ({ className, onClose }: CollectionFilterProps) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchValueChange = (v: string) => {
    setSearchValue(v);
  };

  const debouncedSearchValue = useDebounce(searchValue, 500)

  const [selectedSpecs, setSelectedSpecs] = useState<number[]>(() => []);
  const handleSelect = (id: number) => {
    selectedSpecs.includes(id)
      ? setSelectedSpecs(selectedSpecs.filter((el) => el !== id))
      : setSelectedSpecs([id, ...selectedSpecs]);
  };

  const [isFree, setIsFree] = useState(true);
  const setIsFreeAccess = (value: boolean) => setIsFree(value);

  const { setCollectionFiltersQuery } = useCollectionFilter();

  useEffect(() => {
    setCollectionFiltersQuery({
      isFree: isFree,
      specializations: selectedSpecs,
      titleOrDescriptionSearch: debouncedSearchValue,
      page: 1
    });
  }, [debouncedSearchValue,selectedSpecs,isFree])

  return (
    <FilterWrapper onClose={onClose} className={clsx(styles.CollectionFilter, className)}>
      <SearchInput
        filterInputValue={searchValue}
        handleFilterInputChange={handleSearchValueChange}
      />
      <SpecializationGroup
        selectedItems={selectedSpecs}
        handleSelect={handleSelect}
      />
      <AccessGroup setIsFreeAccess={setIsFreeAccess} isFreeAccess={isFree} />
    </FilterWrapper>
  );
};
