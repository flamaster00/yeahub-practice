import clsx from "clsx";
import styles from "./BurgerMenu.module.css";
interface BurgerMenu {
  className?: string;
}
export const BurgerMenu: React.FC<BurgerMenu> = ({ className }) => {
  return (
    <div className={clsx(styles.BurgerMenu, className)}>
BurgerMenu
    </div>
  );
};