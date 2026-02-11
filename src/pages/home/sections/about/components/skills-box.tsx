import { Group, Stack, Title } from "@mantine/core";
import styles from "../about.module.css";
import { icons } from "@/shared/icons";
import { Tab, TabVariant } from "../types";

interface Params {
  tab: Tab;
  variant: TabVariant;
}

export const SkillsTab = ({ tab, variant }: Params) => {
  const tabClass =
    variant === "white"
      ? styles.whiteTab
      : variant === "small"
        ? styles.smallTab
        : styles.tab;
  const titleClass = variant === "white" ? styles.firstTitle : styles.title;
  const textClass = variant === "white" ? styles.firstText : styles.text;

  return (
    <Stack className={tabClass}>
      <Title order={3} className={titleClass}>
        {tab.title}
      </Title>
      <Group gap={10} className={textClass}>
        {tab.skills.map((skill, index) => {
          const Icon = icons[skill.icon];

          return (
            <span key={index} className={styles.skillItem}>
              <Icon /> {skill.name}
            </span>
          );
        })}
      </Group>
    </Stack>
  );
};
