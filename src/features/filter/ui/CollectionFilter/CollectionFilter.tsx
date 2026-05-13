import clsx from "clsx";
import styles from "./CollectionFilter.module.css";
import { Button } from "@shared/ui/button/Button";
import SearchIcon from "@shared/assets/icons/search.svg?react";
import StarIcon from "@shared/assets/icons/star.svg?react";
import { useState, type ChangeEvent } from "react";
import { specializationApi } from "@entities/specialization";
import { useFetch } from "@shared/hooks/useFetch";

interface CollectionFilterProps {
  className?: string;
  isOpen: boolean;
  close: () => void;
  filterInputValue: string;
  handleFilterInputChange: (value: string) => void;
  selectedSpecializations: number[];
  handleSelectedSpecializations: (specialization: number) => void;
  isFreeSelected: boolean;
  setIsFreeSelected: (v: boolean) => void
}

export const CollectionFilter = (props: CollectionFilterProps) => {
  const {
    className,
    isOpen,
    close,
    filterInputValue,
    handleFilterInputChange,
    handleSelectedSpecializations,
    selectedSpecializations,
    isFreeSelected,
    setIsFreeSelected,
  } = props;

  const { getAllSpecializations } = specializationApi;
  const { data: specsData } = useFetch(() => getAllSpecializations());

  const [showAllSpecs, setShowAllSpecs] = useState(false);
  const toggleShowAllSpecs = () => setShowAllSpecs((prev) => !prev);

  const specsList = specsData?.data.map((spec) => (
    <li key={spec.id}>
      <Button
        className={clsx(
          styles.skillListBtn,
          selectedSpecializations.find((v) => v === spec.id)
            ? styles.selected
            : "",
        )}
        variant="outline"
        size="S"
        onClick={() => handleSelectedSpecializations(spec.id)}
      >
        {spec.title}
      </Button>
    </li>
  ));

  return (
    <div
      className={clsx(
        styles.CollectionFilter,
        !isOpen ? styles.hiddenForMobile : "",
        className,
      )}
    >
      <button className={styles.closeFilterButton} onClick={close}>
        x
      </button>
      <div className={styles.wrapper}>
        <div className={styles.searchWrapper}>
          <SearchIcon className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Введите запрос..."
            value={filterInputValue}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleFilterInputChange(event.target.value)
            }
          />
        </div>
        <div className={styles.specializationWrapper}>
          <p className={styles.specializationTitle}>Специализация</p>
          <ul className={styles.skillGroupButton}>
            {specsList && showAllSpecs ? specsList : specsList?.slice(0, 3)}
          </ul>
          <Button variant="link" onClick={toggleShowAllSpecs}>
            {showAllSpecs ? "Скрыть" : "Показать все"}
          </Button>
        </div>
        <div className={styles.access}>
          <p className={styles.accessTitle}>Доступ</p>
          <ul className={styles.accessGroupButton}>
            <li>
              <Button
                IconLeft={StarIcon}
                iconSize="30"
                variant="outline"
                size="S"
                className={clsx(
                  styles.skillListBtn,
                  !isFreeSelected && styles.selected,
                )}
                onClick={() => setIsFreeSelected(false)}
              >
                Для участников
              </Button>
            </li>
            <li>
              <Button
                variant="outline"
                size="S"
                className={clsx(
                  styles.skillListBtn,
                  isFreeSelected && styles.selected
                )}
                onClick={() => setIsFreeSelected(true)}
              >
                Для всех
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
