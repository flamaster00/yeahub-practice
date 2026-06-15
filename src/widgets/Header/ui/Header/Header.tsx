import { Logo } from "@shared/ui/logo/Logo";
import { AuthActions } from "@features/auth";

import styles from "./Header.module.css";
import { Navigation } from "./Nav/Navigation";

export const Header = () => {
  return (
    <header>
      <div className={styles.Header}>
        <div className={styles["logo-and-nav"]}>
          <Logo />
          <Navigation />
        </div>
        <AuthActions className={styles["header-auth"]} />
      </div>
    </header>
  );
};
