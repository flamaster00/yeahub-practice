import clsx from "clsx";
import styles from "./CollectionFilter.module.css";
import { Button } from "@shared/ui/button/Button";

interface CollectionFilterProps {
  className?: string;
}

export const CollectionFilter = ({ className }: CollectionFilterProps) => {
  return (
    <div className={clsx(styles.CollectionFilter, className)}>
      <div className={styles.wrapper}>
        <input type="text" />
        <div>
          <Button>test</Button>
          <Button>test1</Button>
        </div>
        <div>
          <Button>tag</Button>
        </div>
      </div>
    </div>
  );
};
