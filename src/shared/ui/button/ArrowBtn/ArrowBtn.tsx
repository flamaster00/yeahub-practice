import clsx from "clsx";
import styles from "./ArrowBtn.module.css";
import ArrowIcon from '@shared/assets/icons/arrow.svg?react'
import type { ButtonHTMLAttributes } from "react";

interface ArrowBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  direction: 'left' | 'right'
}

export const ArrowBtn = ({ className, direction, ...rest }: ArrowBtn) => {
  return (
    <button className={clsx(styles.ArrowBtn, className)} {...rest}>
        <ArrowIcon className={styles[`${direction}`]}/>
    </button>
  );
};