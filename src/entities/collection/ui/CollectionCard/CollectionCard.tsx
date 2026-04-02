import clsx from "clsx";
import styles from "./CollectionCard.module.css";
import StarIcon from "@shared/assets/icons/star.svg?react";
import QuestionIcon from "@shared/assets/icons/question_square.svg?react";
import { Button } from "@shared/ui/button/Button";
import type { Collection } from "@entities/collection/model/model";
import ErrorImg from '@shared/assets/images/error.png'

interface CollectionCard {
  className?: string;
  collection: Collection;
}

export const CollectionCard = ({ className, collection }: CollectionCard) => {
  const { imageSrc, title, keywords, questionsCount, specializations, isFree } =
    collection;
  return (
    <div className={clsx(styles.CollectionCard, className)}>
      <div className={styles["img-wrapper"]}>
        <img 
        src={imageSrc ? imageSrc : ErrorImg} 
        alt={title} 
        onError={(e) => e.currentTarget.src = ErrorImg}
        />
      </div>
      <ul className={styles.tags}>
        {keywords.map((keyword, index) => (
          <li className={styles.tag} key={index}>{keyword}</li>
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
          {isFree ? 'Для всех' : 'Для участников'}
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
          <li className={styles.role} key={specialization.id}>{specialization.title}</li>
        ))}
      </ul>
    </div>
  );
};
