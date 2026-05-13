import type { GetAllCollectionsParams } from "@entities/collection";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useState } from "react";

export const useCollectionListWithFilter = () => {
  type FilterSpec = NonNullable<GetAllCollectionsParams["specializations"]>;
  type FilterSpecId = NonNullable<FilterSpec>[number];

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const [titleOrDescriptionSearch, setTitleOrDescriptionSearch] = useState("");
  const handleFilterInputChange = (value: string) => {
    setTitleOrDescriptionSearch(value);
  };
  const debouncedInputValue = useDebounce(titleOrDescriptionSearch, 500);

  const [selectedSpecializations, setSelectedSpecializations] =
    useState<FilterSpec>(() => []);
  const handleSelectedSpecializations = (specializationId: FilterSpecId) => {
    if (
      selectedSpecializations &&
      selectedSpecializations.includes(specializationId)
    ) {
      setSelectedSpecializations((specs) =>
        specs?.filter((spec) => spec !== specializationId),
      );
    } else {
      setSelectedSpecializations((specs) => [
        specializationId,
        ...(specs ?? []),
      ]);
    }
  };

  const [isFree, setIsFree] = useState(true);

  return {
    isFilterOpen,
    toggleFilter,
    titleOrDescriptionSearch,
    setTitleOrDescriptionSearch,
    handleFilterInputChange,
    debouncedInputValue,
    handleSelectedSpecializations,
    isFree,
    setIsFree,
    selectedSpecializations,
    setSelectedSpecializations,
  };
};
