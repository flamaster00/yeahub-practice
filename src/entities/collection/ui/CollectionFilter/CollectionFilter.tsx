import clsx from "clsx";
import styles from "./CollectionFilter.module.css";
import { Button } from "@shared/ui/button/Button";
import { collectionApi } from "@entities/collection/api/collectionApi";

interface CollectionFilter {
  className?: string;
  onClose: () => void;
}

const options = ['Fullstack', 'Software Tester']

export const CollectionFilter: React.FC<CollectionFilter> = ({ className, onClose }) => {

  const selectedOptions: string[] = []
  const selectOption = (value: string) => {
    if (selectedOptions.includes(value)) {
      selectedOptions.filter(item => item !== value)
    } else {
      selectedOptions.push(value)
    }
  }

  return (
    <div className={clsx(styles.CollectionFilter, className)}>
        <Button variant="link" onClick={onClose} className={styles.closeBtn}>x</Button>
        <input type="text" placeholder="Введите запрос..." className={styles.input}/>
        <div className={styles.categories}>
            <div className={styles.category}>
                <span className={styles.categoryTitle}>Специализация</span>
                
            </div>
        </div>
    </div>
  );
};