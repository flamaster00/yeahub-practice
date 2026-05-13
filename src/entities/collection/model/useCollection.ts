import { useFetch } from "@shared/hooks/useFetch";
import { useState } from "react";
import { collectionApi } from "../api/collectionApi";
import type {
  GetAllCollectionsParams,
  getAllCollectionsResponse,
  GetCollectionParams,
} from "./model";

interface UseCollection {
  filters?: GetAllCollectionsParams;
  id?: NonNullable<GetCollectionParams>;
}

export const useCollection = ({ filters, id }: UseCollection) => {
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
