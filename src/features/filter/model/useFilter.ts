import { specializationApi } from "@entities/specialization";
import { useFetch } from "@shared/hooks/useFetch";
import { useState } from "react";

export const useFilter = () => {
  const { getAllSpecializations } = specializationApi;
  const { data, error, isLoading } = useFetch(() => getAllSpecializations());

  const [showAllSpecs, setShowAllSpecs] = useState(false);
  const toggleShowAllSpecs = () => setShowAllSpecs((prev) => !prev);
  return {
    specializations: data?.data,
    error,
    isLoading,
    showAllSpecs,
    toggleShowAllSpecs,
  };
};
