export type Skill = { name: string; icon: string };
export type Tab = { title: string; skills: Skill[] };
export type TabVariant = "white" | "small" | "default";
export type TabLayout = { type: string; side: string; id: string };

export type Section = {
  title: string;
  variant: TabVariant;
  skills: Skill[];

  layout?: TabLayout;
};
export type AboutData = {
  githubUrl: string;
  linkedInUrl: string;
  sections: Section[];
};
