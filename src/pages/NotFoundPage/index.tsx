import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["not-found"]}>
      <span className={styles["not-found__code"]}>404</span>

      <div className={styles["not-found__divider"]} />

      <div className={styles["not-found__content"]}>
        <h1 className={styles["not-found__title"]}>Страница не найдена</h1>
        <p className={styles["not-found__description"]}>
          Похоже, эта страница потерялась в сети.
          <br />
          Возможно, ссылка устарела или адрес введён с ошибкой.
        </p>
      </div>

      <div className={styles["not-found__actions"]}>
        <button
          className={styles["not-found__btn not-found__btn--primary"]}
          onClick={() => navigate("/")}
        >
          На главную
        </button>
        <button
          className={styles["not-found__btn not-found__btn--ghost"]}
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
      </div>
    </div>
  );
};
