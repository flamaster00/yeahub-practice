import clsx from "clsx";
import styles from "./CollectionItem.module.css";
import { collectionApi } from "@entities/collection/api/collectionApi";
import { useFetch } from "@shared/hooks/useFetch";
import { CollectionCard } from "../CollectionCard/CollectionCard";

interface CollectionItemProps {
  className?: string;
  id: number;
}

export const CollectionItem = ({ className, id }: CollectionItemProps) => {
  const { getCollectionById } = collectionApi;
  const { data: collection, error, isLoading } = useFetch(
    () => getCollectionById(id),
    [id]
  );

  if (isLoading) return "Загрузка коллекции";

  if (error) return `Ошибка загрузки коллекции: ${error}`;

  if (!collection) return "Нет такой коллекции";

  return (
    <div className={clsx(styles.CollectionItem, className)}>
        <CollectionCard collection={collection}/>
    </div>
  );
};
