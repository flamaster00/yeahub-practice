import { useState } from "react";

import { FilterGroup } from "@features/filter";
import { specializationApi } from "@entities/specialization";
import { useFetch } from "@shared/hooks/useFetch";
import { SkillBtn } from "@shared/ui/button/SkillBtn/SkillBtn";

import styles from "./SpecializationGroup.module.css";

interface SpecializationGroupProps {
  selectedItems: number[];
  handleSelect: (spec: number) => void;
}

export const SpecializationGroup = ({
  selectedItems,
  handleSelect,
}: SpecializationGroupProps) => {
  const { getAllSpecializations } = specializationApi;
  const { data, error, isLoading } = useFetch(() => getAllSpecializations());

  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll((prev) => !prev);

  if (isLoading) return "Загрузка...";

  if (error) return `Ошибка: ${error}`;

  if (!data) return "нет данных";

  const specializations = data.data;

  const specializationList = specializations.map((spec) => (
    <li key={spec.id}>
      <SkillBtn
        onClick={() => handleSelect(spec.id)}
        selected={selectedItems.includes(spec.id)}
      >
        {spec.title}
      </SkillBtn>
    </li>
  ));

  return (
    <FilterGroup
      title="Специализация"
      showAllOption
      showAll={showAll}
      toggleShowAll={toggleShowAll}
    >
      <ul className={styles.list}>
        {showAll ? specializationList : specializationList.slice(0, 3)}
      </ul>
    </FilterGroup>
  );
};
