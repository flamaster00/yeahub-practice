import clsx from "clsx";
import styles from "./CollectionList.module.css";
import { CollectionCard } from "../CollectionCard/CollectionCard";
import { Pagination } from "@shared/ui/pagination/Pagination";
import { useCollection } from "@entities/collection/model/useCollection";
import type { GetAllCollectionsParams } from "@entities/collection/model/model";

interface CollectionList {
  className?: string;
  filters: GetAllCollectionsParams;
}

export const CollectionList = ({ className, filters }: CollectionList) => {
  const { data, currentPage, error, isLoading, onPageChange } = useCollection({
    filters,
  });

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

  const { data: collections, limit, total } = data;

  return (
    <div className={clsx(styles.CollectionList, className)}>
      <ul className={clsx(styles.list)}>
        {data &&
          collections.map((collection) => (
            <li key={collection.id}>
              <CollectionCard collection={collection} />
            </li>
          ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        limit={limit}
        onPageChange={onPageChange}
        total={total}
        className={styles.pagination}
      />
    </div>
  );
};
