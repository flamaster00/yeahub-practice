import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

import ArrowIcon from '@shared/assets/icons/arrow.svg?react'

import styles from "./ArrowBtn.module.css";

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