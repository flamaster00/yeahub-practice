import clsx from "clsx";
import styles from "./CollectionList.module.css";
import { CollectionCard } from "../CollectionCard/CollectionCard";
import { collectionApi } from "../../api/collectionApi";
import { useFetch } from "@shared/hooks/useFetch";
import type { getAllCollectionsResponse } from "../../model/model";
import { useState } from "react";
import { Pagination } from "@shared/ui/pagination/Pagination";

interface CollectionList {
  className?: string;
}

export const CollectionList: React.FC<CollectionList> = ({ className }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { getAllCollections } = collectionApi;
  const { data, error, isLoading } = useFetch<getAllCollectionsResponse>(
    () => getAllCollections(currentPage),
    [currentPage],
  );
  const collections = data?.data;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

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

  return (
    <div className={styles.CollectionList}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Коллекции</h3>
      </div>
      <ul className={clsx(styles.list, className)}>
        {collections &&
          collections.map((collection) => (
            <li key={collection.id}>
              <CollectionCard collection={collection} />
            </li>
          ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        limit={data.limit}
        onPageChange={onPageChange}
        total={data.total}
        className={styles.pagination}
      />
    </div>
  );
};
