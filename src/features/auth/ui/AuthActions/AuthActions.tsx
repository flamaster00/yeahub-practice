import { Button } from "@shared/ui/button/Button";
import styles from "./AuthActions.module.css";
import clsx from "clsx";

interface AuthActions {
  className?: string;
}

export const AuthActions = ({ className }: AuthActions) => {
  return (
    <div className={clsx(styles.AuthActions, className)}>
      <Button variant="link">Вход</Button>
      <Button variant="primary">Регистрация</Button>
    </div>
  );
};
