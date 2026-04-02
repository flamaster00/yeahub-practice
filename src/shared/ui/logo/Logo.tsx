import clsx from "clsx";
import styles from "./Logo.module.css";
import LogoIcon from "@shared/assets/icons/Logo.svg?react";
import YeahubIcon from "@shared/assets/icons/Yeahub.svg?react";

interface Logo {
  className?: string;
}

export const Logo: React.FC<Logo> = ({ className }) => {
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
