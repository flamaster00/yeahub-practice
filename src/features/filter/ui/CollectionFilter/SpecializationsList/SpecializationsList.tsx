import clsx from "clsx";
import styles from "./SpecializationsList.module.css";
import { Button } from "@shared/ui/button/Button";
import { useFilter } from "@features/filter/model/useFilter";

interface SpecializationsListProps {
  className?: string;
  selectedSpecializations: number[];
  handleSelectedSpecializations: (v: number) => void;
  showAllSpecs: boolean;
}

export const SpecializationsList = ({
  className,
  selectedSpecializations,
  handleSelectedSpecializations,
  showAllSpecs,
}: SpecializationsListProps) => {
  const { error, isLoading, specializations } = useFilter();

  if (isLoading) return "Loading...";

  if (error) return `Ошибка загрузки :(`;

  if (!specializations) return "Специализаций нет";

  const specsList =
    specializations && showAllSpecs
      ? specializations
      : specializations?.slice(0, 3);

  return (
    <ul className={clsx(styles.SpecializationsList, className)}>
      {specsList.map((spec) => (
        <li key={spec.id}>
          <Button
            className={clsx(
              styles.skillListBtn,
              selectedSpecializations.find((v) => v === spec.id)
                ? styles.selected
                : "",
            )}
            variant="outline"
            size="S"
            onClick={() => handleSelectedSpecializations(spec.id)}
          >
            {spec.title}
          </Button>
        </li>
      ))}
    </ul>
  );
};
