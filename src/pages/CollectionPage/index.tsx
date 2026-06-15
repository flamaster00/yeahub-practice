import styles from "./index.module.css";
import { useParams } from "react-router-dom";
import { collectionApi, CollectionCard } from "@entities/collection";
import { useFetch } from "@shared/hooks/useFetch";

export const CollectionPage = () => {
  const { id } = useParams<{ id: string }>();
  const collectionId = isNaN(Number(id)) ? NaN : Number(id);

  if (isNaN(collectionId))
    return "Ошибка в номере коллекции. Проверьте, что номер коллекции числовой";

  const {getCollectionById} = collectionApi
  const {data: collection, error,isLoading} = useFetch(() => getCollectionById(collectionId), [collectionId])

  if (isLoading) return 'Загрузка...'

  if (error) return `Ошибка загрузки: ${error}`

  if (!collection) return 'Нет такой коллекции'

  return (
    <div className={styles.CollectionPage}>
      <CollectionCard collection={collection} />
    </div>
  );
};
