import clsx from "clsx";
import { Link } from "react-router-dom";


import type { Collection } from "@entities/collection";

import { CollectionCard } from "../CollectionCard/CollectionCard";

import styles from "./CollectionList.module.css";


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
