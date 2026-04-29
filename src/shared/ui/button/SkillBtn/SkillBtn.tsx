import clsx from "clsx";
import styles from "./SkillBtn.module.css";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface SkillBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  selected?: boolean;
}

export const SkillBtn = ({
  className,
  children,
  selected = false,
  ...rest
}: SkillBtnProps) => {
  return (
    <button
      className={clsx(
        styles.SkillBtn,
        className,
        selected ? styles.selected : "",
        rest.disabled ? styles.disabled : "",
      )}
      aria-pressed={selected}
      {...rest}
    >
      {children}
    </button>
  );
};
