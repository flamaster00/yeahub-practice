import YeahubIcon from "@shared/assets/icons/Yeahub.svg?react";

import styles from "./Footer.module.css";
import { SocialLinks } from "./SocialLinks/SocialLinks";

export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.container}>
        <YeahubIcon className={styles.logo} />
        <p className={styles.phrase}>
          Выбери, каким будет IT завтра, вместе с нами
        </p>
        <p className={styles["text-about"]}>
          YeaHub — это полностью открытый проект, призванный объединить
          и улучшить IT-сферу. Наш исходный код доступен для просмотра
          на GitHub. Дизайн проекта также открыт для ознакомления в Figma.
        </p>
        <hr className={styles.hr} />
        <div className={styles.contacts}>
          <p>© 2024 YeaHub</p>
          <a href="/">Документы</a>
          <p className={styles["search-us"]}>
            Ищите нас и в других соцсетях @yeahub_it
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
