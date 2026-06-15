import styles from "./Header.module.css";

import { AuthActions } from "@features/auth/ui/AuthActions/AuthActions";
import { Navigation } from "./Nav/Navigation";
import { Logo } from "@shared/ui/logo/Logo";

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
