import clsx from "clsx";
import styles from "./CollectionList.module.css";
import { CollectionCard } from "../CollectionCard/CollectionCard";
import type { Collection } from "@entities/collection/model/model";
import { Link } from "react-router-dom";

interface CollectionList {
  collections: Collection[];
}

export const CollectionList = ({ collections }: CollectionList) => {
  return (
    <ul className={clsx(styles.CollectionList)}>
      {collections &&
        collections.map((collection) => (
          <Link key={collection.id} to={`collections/${collection.id}/public`}>
            <CollectionCard collection={collection} />
          </Link>
        ))}
    </ul>
  );
};
