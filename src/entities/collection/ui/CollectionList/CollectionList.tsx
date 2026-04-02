import clsx from "clsx";
import styles from "./CollectionList.module.css";
import { CollectionCard } from "../CollectionCard/CollectionCard";
import { collectionApi } from "../../api/collectionApi";
import { useFetch } from "@shared/hooks/useFetch";
import type { Collection, getAllCollectionsResponse } from "../../model/model";

interface CollectionList {
  className?: string;
}

export const CollectionList: React.FC<CollectionList> = ({ className }) => {
  const { getAllCollections } = collectionApi;
  const { data, error, isLoading } = useFetch<getAllCollectionsResponse>(getAllCollections);
  const collections = data?.data

  if (isLoading) {
    return (
      <>
      loading...
      </>
    )
  }
  
  if (error) {
    return (
      <>
        <p>Что-то пошло не так :(</p>
        <p>Ошибка: {error}</p>
      </>
    )
  }

  return (
    <ul className={styles.CollectionList}>
    {collections && collections.map(collection => (
      <li key={collection.id}>
        <CollectionCard collection={collection}/>
      </li>
    ))}
    </ul>
  );
};
