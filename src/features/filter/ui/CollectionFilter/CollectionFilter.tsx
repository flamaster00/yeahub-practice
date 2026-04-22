import clsx from "clsx";
import styles from "./CollectionFilter.module.css";
import { Button } from "@shared/ui/button/Button";
import SearchIcon from "@shared/assets/icons/search.svg?react";
import StarIcon from '@shared/assets/icons/star.svg?react';

interface CollectionFilterProps {
  className?: string;
}

export const CollectionFilter = ({ className }: CollectionFilterProps) => {
  return (
    <div className={clsx(styles.CollectionFilter, className)}>
      <div className={styles.wrapper}>
        <div className={styles.searchWrapper}>
          <SearchIcon className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Введите запрос..."
          />
        </div>
        <div className={styles.specializationWrapper}>
          <p className={styles.specializationTitle}>Специализация</p>
          <div className={styles.specializationGroupButton}>
            <Button variant="outline" size="S">
              Fullstack
            </Button>
            <Button variant="outline" size="S">
              Software tester
            </Button>
            <Button variant="outline" size="S">
              React Frontend Developer
            </Button>
          </div>
          <Button variant="link">Посмотреть все</Button>
        </div>
        <div className={styles.access}>
          <p className={styles.accessTitle}>Доступ</p>
          <div className={styles.accessGroupButton}>
          <Button IconLeft={StarIcon} iconSize="30" variant="outline" size="S">Для участников</Button>
          <Button variant="outline" size="S">Для всех</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
