import { FilterGroup } from "@features/filter";
import { SkillBtn } from "@shared/ui/button/SkillBtn/SkillBtn";

import styles from "./AccessGroup.module.css";

interface AccessGroupProps {
  isFreeAccess: boolean;
  setIsFreeAccess: (v: boolean) => void;
}

export const AccessGroup = ({
  isFreeAccess,
  setIsFreeAccess,
}: AccessGroupProps) => {
  return (
    <FilterGroup title="Доступ">
      <ul className={styles.list}>
        <li>
          <SkillBtn onClick={() => setIsFreeAccess(false)} selected={!isFreeAccess}>
            Для участников
          </SkillBtn>
        </li>
        <li>
          <SkillBtn onClick={() => setIsFreeAccess(true)} selected={isFreeAccess}>Для всех</SkillBtn>
        </li>
      </ul>
    </FilterGroup>
  );
};
