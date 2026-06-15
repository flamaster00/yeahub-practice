import clsx from "clsx";
import type { ButtonHTMLAttributes, FC, ReactNode, SVGProps } from "react";

import styles from "./Button.module.css";

type ButtonVariant = "primary" | "outline" | "link";
type ButtonSize = "M" | "L" | "S";
type SvgIcon = FC<SVGProps<SVGSVGElement>>;
type IconSize = "16" | "18" | "20" | '30';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  IconLeft?: SvgIcon;
  IconRight?: SvgIcon;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  iconSize?: IconSize;
}

export const Button= (props: Button) => {
  const {
    className,
    children,
    variant = "primary",
    size = "M",
    IconLeft,
    IconRight,
    iconSize = "16",
    ...rest
  } = props;

  return (
    <button
      className={clsx(
        styles.Button,
        styles[`variant--${variant}`],
        styles[`size--${size}`],
        className,
      )}
      {...rest}
    >
      {IconLeft && <IconLeft className={clsx(styles[`icon--${iconSize}`])} />}
      {children}
      {IconRight && <IconRight className={clsx(styles[`icon--${iconSize}`])}/>}
    </button>
  );
};
