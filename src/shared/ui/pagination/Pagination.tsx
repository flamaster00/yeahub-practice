import clsx from "clsx";

import { ArrowBtn } from "../button/ArrowBtn/ArrowBtn";

import styles from "./Pagination.module.css";

interface PaginationProps {
  className?: string;
  currentPage: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
}

type TotalPagesArray = Array<number | "-">;

export const Pagination = (props: PaginationProps) => {
  const { limit, currentPage, total, className, onPageChange } = props;
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null

  // Создаем кнопки в пагинации
  const totalPagesArray: TotalPagesArray = [];
  // Если страниц меньше 8, то показываем все
  if (totalPages < 8) {
    for (let page = 1; page <= totalPages; page++) {
      totalPagesArray.push(page);
    }
    // Если страниц больше 8, то отображаем первую, последнюю, текущую +-2
    // Если текущая меньше 4, то отображаем 1-6 страницы и последнюю
    // Если текущая больше totalPages-3, то отображаем 1 и последние 6 страниц
  } else {
    // отображаем первую всегда
    totalPagesArray.push(1);
    // Если текущая меньше 4, то отображаем первые 6
    if (currentPage <= 4) {
      totalPagesArray.push(2, 3, 4, 5, 6);
      totalPagesArray.push("-");
      // Если текущая больше totalPages-3, то отображаем 1 и последние 6 страниц
    } else if (currentPage >= totalPages - 3) {
      totalPagesArray.push("-");
      totalPagesArray.push(
        totalPages - 5,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
      );
      // Иначе отображаем -2 и +2 страницы от текущей
    } else {
      totalPagesArray.push("-");
      totalPagesArray.push(
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      );
      totalPagesArray.push("-");
    }

    // отображаем последнюю страницу всегда
    totalPagesArray.push(totalPages);
  }

  return (
    <ul className={clsx(styles.Pagination, className)}>
      <ArrowBtn
        direction="left"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {totalPagesArray.map((page, index) => (
        <li
          key={index}
          className={clsx(
            page === currentPage ? styles.currentPage : styles.page,
          )}
          onClick={typeof page === "number" ? () => onPageChange(page) : undefined}
        >
          {page}
        </li>
      ))}
      <ArrowBtn
        direction="right"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </ul>
  );
};
