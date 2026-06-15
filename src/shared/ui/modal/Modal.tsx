import clsx from "clsx";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

interface Modal {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export const Modal = (props: Modal) => {
  const { className, children, isOpen, onClose } = props;
  const contentRef = useRef<HTMLDivElement>(null);

  // Блокируем скролл страницы когда модалка открыта
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup — разблокируем скролл когда компонент размонтируется
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
    className={clsx(styles.Modal, className)}
      onClick={handleOverlayClick}
    >
      <div
        ref={contentRef}
        className={styles.content}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
};
