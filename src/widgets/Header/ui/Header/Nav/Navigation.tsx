import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles["nav-list"]}>
        <li className={styles["nav-list-item"]}>
          <a href="/">База вопросов</a>
        </li>
        <li className={styles["nav-list-item"]}>
          <a href="/">Тренажер</a>
        </li>
        <li className={styles["nav-list-item"]}>
          <a href="/">Материалы</a>
        </li>
        <li className={styles["nav-list-item"]}>
          <a href="/">Навыки (hh)</a>
        </li>
      </ul>
      <select
        name="nav-select"
        id="nav-select"
        className={styles["nav-select"]}
      >
        <option value="Подготовка" className={styles["nav-select-item"]}>
          Подготовка
        </option>
        <option value="Тренажер" className={styles["nav-select-item"]}>
          Тренажер
        </option>
      </select>
    </nav>
  );
};
