import clsx from "clsx";
import styles from "./Pagination.module.css";
import { ArrowBtn } from "../button/ArrowBtn/ArrowBtn";

interface PaginationProps {
  className?: string;
  currentPage: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { limit, currentPage, total, className, onPageChange } = props;
  const totalPages = Math.ceil(total / limit);

  const totalPagesArray: number[] = [];
  for (let page = 1; page <= totalPages; page++) {
    totalPagesArray.push(page);
  }

  return (
    <ul className={clsx(styles.Pagination, className)}>
      <ArrowBtn direction="left" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}/>
      {totalPagesArray.map((page) => (
        <li
          key={page}
          className={clsx(
            page === currentPage ? styles.currentPage : styles.page,
          )}
          onClick={() => onPageChange(page)}
        >
          {page}
        </li>
      ))}
      <ArrowBtn direction="right" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}/>
    </ul>
  );
};
