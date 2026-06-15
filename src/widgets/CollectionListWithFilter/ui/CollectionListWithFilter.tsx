import { useState } from "react";
import clsx from "clsx";

import { collectionApi, CollectionList } from "@entities/collection";
import { Pagination } from "@shared/ui/pagination/Pagination";
import { CollectionFilter, useCollectionFilter } from "@widgets/CollectionFilter";
import { useFetch } from "@shared/hooks/useFetch";

import { CollectionListWithFilterHeader } from "./CollectionListWithFilterHeader/CollectionListWithFilterHeader";
import styles from "./CollectionListWithFilter.module.css";

export const CollectionListWithFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter((prev) => !prev);

  const { getCollectionFiltersQuery, setCollectionFiltersQuery } =
    useCollectionFilter();

  const filters = getCollectionFiltersQuery()

  const onPageChange = (page: number) => {
    setCollectionFiltersQuery({ page });
  };

  const { getAllCollections } = collectionApi;
  const { data, error, isLoading } = useFetch(
    () => getAllCollections(filters),
    [
      filters.isFree,
      filters.limit,
      filters.page,
      filters.specializations.join(','),
      filters.titleOrDescriptionSearch,
    ],
  );

  if (isLoading) {
    return <>loading...</>;
  }

  if (error) {
    return (
      <>
        <p>Что-то пошло не так :(</p>
        <p>Ошибка: {error}</p>
      </>
    );
  }
  if (!data) {
    return <p>Не найдено коллекций</p>;
  }

  const { data: collections, total } = data;

  return (
    <div className={styles.CollectionListWithFilter}>
      <div className={styles.collectionWrapper}>
        <CollectionListWithFilterHeader toggleFilter={toggleFilter} />
        <CollectionList collections={collections} />
        <Pagination
          currentPage={filters.page}
          limit={filters.limit}
          onPageChange={onPageChange}
          total={total}
          className={styles.pagination}
        />
      </div>
      <CollectionFilter
        onClose={() => setShowFilter(false)}
        className={clsx(
          styles.CollectionFilter,
          showFilter ? styles.show : styles.hide,
        )}
      />
    </div>
  );
};
