import clsx from "clsx";
import type { ReactNode } from "react";

import CloseButtonIcon from "@shared/assets/icons/close_button.svg?react";

import styles from "./FilterWrapper.module.css";

interface FilterWrapperProps {
  className?: string;
  children: ReactNode;
  onClose?: () => void;
}

export const FilterWrapper = ({
  className,
  children,
  onClose,
}: FilterWrapperProps) => {
  return (
    <div className={clsx(styles.FilterWrapper, className)}>
      <button onClick={onClose}>
        <CloseButtonIcon className={styles.icon} />
      </button>
      {children}
    </div>
  );
};
