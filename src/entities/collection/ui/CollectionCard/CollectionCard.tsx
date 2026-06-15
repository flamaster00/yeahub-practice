import styles from "./CollectionCard.module.css";
import StarIcon from "@shared/assets/icons/star.svg?react";
import QuestionIcon from "@shared/assets/icons/question_square.svg?react";
import { Button } from "@shared/ui/button/Button";
import ErrorImg from "@shared/assets/images/error.png";
import SberImg from "@shared/assets/images/sber.jpg";
import type { Collection } from "@entities/collection/model/model";

interface CollectionCard {
  collection: Collection
}

export const CollectionCard = ({ collection }: CollectionCard) => {
  
  const { imageSrc, title, keywords, questionsCount, specializations, isFree } =
    collection;

  return (
    <div className={styles.CollectionCard}>
      <div className={styles["img-wrapper"]}>
        <img
          src={imageSrc ? imageSrc : SberImg}
          alt={title}
          onError={(e) => (e.currentTarget.src = ErrorImg)}
        />
      </div>
      <div className={styles.description}>
        <ul className={styles.tags}>
          {keywords.map((keyword, index) => (
            <li className={styles.tag} key={index}>
              {keyword}
            </li>
          ))}
        </ul>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.links}>
          <Button
            variant="link"
            IconLeft={isFree ? undefined : StarIcon}
            iconSize="20"
            className={styles.link}
          >
            {isFree ? "Для всех" : "Для участников"}
          </Button>
          <Button
            variant="link"
            IconLeft={QuestionIcon}
            iconSize="20"
            className={styles.link}
          >
            {questionsCount} вопросов
          </Button>
        </div>
        <ul className={styles.roles}>
          {specializations.map((specialization) => (
            <li className={styles.role} key={specialization.id}>
              {specialization.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
