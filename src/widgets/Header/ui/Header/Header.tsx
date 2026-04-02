import clsx from "clsx";
import styles from "./Header.module.css";

import { AuthActions } from "@features/auth/ui/AuthActions/AuthActions";
import { Navigation } from "./Nav/Navigation";
import { Logo } from "@shared/ui/logo/Logo";

interface Header {
  className?: string;
}

export const Header: React.FC<Header> = ({ className }) => {
  return (
    <header>
      <div className={clsx(styles.Header, className)}>
        <div className={styles["logo-and-nav"]}>
          <Logo />
          <Navigation />
        </div>
        <AuthActions className={styles["header-auth"]} />
      </div>
    </header>
  );
};
