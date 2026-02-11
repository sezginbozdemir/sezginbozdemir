import { Box, Container, Group, Stack, Text } from "@mantine/core";
import styles from "./projects.module.css";
import Details from "./components/details";
import ImageGallery from "./components/image-gallery";
import { ScrollTop } from "@/shared/hooks/scroll-to-top";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import ProjectCarousel from "./components/project-carousel";

type Tile = { id: string; name: string };

export interface Project {
  name: string;
  tiles: Tile[];
  descriptions: string[];
  url: string;
  images: string[];
  link: string;
  desktopImage: string;
  mobileImage: string;
}

export interface ProjectData {
  projects: Project[];
}

const Projects = () => {
  ScrollTop();

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [projectsData, setProjectsData] = useState<ProjectData | null>(null);

  useEffect(() => {
    const loadWorkData = async () => {
      const lang = i18n.language;

      if (lang === "ro") {
        const projectsDataRo = await import("./projects-ro.json");
        setProjectsData(projectsDataRo.default);
      } else {
        const projectsDataEn = await import("./projects-en.json");
        setProjectsData(projectsDataEn.default);
      }
    };

    loadWorkData();
  }, [i18n.language]);

  if (!projectsData) return null;
  return (
    <Container size="xl" h="100%" w="100%">
      <Group mt={50}>
        <Box className={styles.first}></Box>
        <Text style={{ zIndex: 1000 }} className={styles.second}>
          <span>{t("projects.breadcrumb")}</span>
        </Text>
      </Group>
      <Stack mt={100} className={styles.projectStack} gap={150}>
        {projectsData.projects.map((project: Project, index: number) => (
          <Stack>
            <Group className={styles.projectGroup} key={index} mt={50}>
              <Details project={project} index={index} />
              <ImageGallery index={index} project={project} />
            </Group>
            <Group align="center" justify="center">
              <ProjectCarousel images={project.images} />
            </Group>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};
export default Projects;
