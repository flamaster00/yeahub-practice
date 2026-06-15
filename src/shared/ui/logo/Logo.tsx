import clsx from "clsx";

import LogoIcon from "@shared/assets/icons/Logo.svg?react";
import YeahubIcon from "@shared/assets/icons/Yeahub.svg?react";

import styles from "./Logo.module.css";

interface Logo {
  className?: string;
}

export const Logo = ({ className }: Logo) => {
  return (
    <div className={clsx(styles.Logo, className)}>
      <div className={clsx(styles["icon-container"], styles["icon-logo"])}>
        <LogoIcon />
      </div>
      <div className={clsx(styles["icon-container"], styles["text-logo"])}>
        <YeahubIcon />
      </div>
    </div>
  );
};
