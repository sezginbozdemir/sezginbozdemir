import { Group } from "@mantine/core";
import { SkillsTab } from "./skills-box";
import { Tab, TabLayout, TabVariant } from "../types";

interface Params {
  tab: Tab;
  variant: TabVariant;
  layout?: TabLayout;
  node: React.ReactNode;
}
export const SkillsSection = ({ tab, variant, layout, node }: Params) => {
  const tabNode = <SkillsTab tab={tab} variant={variant} />;

  if (!layout || layout.type !== "group") return tabNode;

  return (
    <Group justify="space-between">
      {layout.side === "left" && node}
      {tabNode}
      {layout.side === "right" && node}
    </Group>
  );
};
