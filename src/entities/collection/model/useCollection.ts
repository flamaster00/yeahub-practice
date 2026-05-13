import { useFetch } from "@shared/hooks/useFetch";
import { useState } from "react";
import { collectionApi } from "../api/collectionApi";
import type {
  GetAllCollectionsParams,
  getAllCollectionsResponse,
} from "./model";

interface UseCollection {
  filters: GetAllCollectionsParams;
}

export const useCollection = ({ filters }: UseCollection) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { getAllCollections } = collectionApi;
  const { data, error, isLoading } = useFetch<getAllCollectionsResponse>(
    () => getAllCollections({ page: currentPage, limit: 10, ...filters }),
    [currentPage, filters],
  );

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    setCurrentPage,
    data,
    error,
    isLoading,
    onPageChange,
  };
};
