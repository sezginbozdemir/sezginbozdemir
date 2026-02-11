import { Box, Group, Image, Stack, Title } from "@mantine/core";
import styles from "../about.module.css";
import { TbBrandGithubFilled } from "react-icons/tb";
import raw from "../about.json";
import LinkButton from "@/shared/components/link-button";
import sez from "@/assets/images/sez.png";
import { useTranslation } from "react-i18next";
import { SkillsSection } from "./skills-section";
import { AboutData, Section } from "../types";

const AboutContent = () => {
  const { t } = useTranslation();
  const data: AboutData = raw as AboutData;

  const makeNode = (id: string) => {
    switch (id) {
      case "git":
        return <LinkButton url={data.githubUrl} icon={TbBrandGithubFilled} />;
      case "text":
        return (
          <Box className={styles.gitLink}>
            <Title order={5} className={styles.detailText}>
              {t("about.line3_start")}
              <span className={styles.italic}>
                {""} {t("about.line3_italic")}
              </span>{" "}
              {t("about.line3_end")}
            </Title>
          </Box>
        );
    }
  };

  return (
    <Group className={styles.mainGroup} align="start">
      <Stack style={{ zIndex: "1000" }} className={styles.tabStack}>
        {data.sections.map((s: Section) => (
          <SkillsSection
            key={s.title}
            tab={{ title: s.title, skills: s.skills }}
            variant={s.variant}
            layout={s.layout}
            node={
              s.layout?.type === "group" ? makeNode(s.layout.id) : undefined
            }
          />
        ))}
      </Stack>
      <Box style={{ zIndex: "1000" }} className={styles.imgBox}>
        <Box className={styles.imgOuter}>
          <Image src={sez} alt="fullstack dev" className={styles.img} />
        </Box>
      </Box>
    </Group>
  );
};
export default AboutContent;
