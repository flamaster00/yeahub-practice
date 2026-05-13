import clsx from "clsx";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";
import { CollectionItem } from "@entities/collection";

interface CollectionPageProps {
  className?: string;
}

export const CollectionPage = ({ className }: CollectionPageProps) => {
  const { id } = useParams<{ id: string }>();
  const collectionId = isNaN(Number(id)) ? NaN : Number(id);

  if (isNaN(collectionId))
    return "Ошибка в номере коллекции. Проверьте, что номер коллекции числовой";
  
  return (
    <div className={clsx(styles.CollectionPage, className)}>
      <CollectionItem id={collectionId} />
    </div>
  );
};
