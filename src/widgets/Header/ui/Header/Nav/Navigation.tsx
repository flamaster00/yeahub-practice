import clsx from "clsx";
import styles from "./Navigation.module.css";
interface Navigation {
  className?: string;
}
export const Navigation: React.FC<Navigation> = ({ className }) => {
  return (
    <nav className={clsx(styles.Navigation, className)}>
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
