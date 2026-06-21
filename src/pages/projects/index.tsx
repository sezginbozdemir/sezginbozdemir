import { Box, Group, Stack, Text } from "@mantine/core";
import styles from "./projects.module.css";
import Details from "./components/details";
import ImageGallery from "./components/image-gallery";
import { useScrollToTop } from "@/lib/hooks/useScrollToTop";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import IconButton from "@/components/ui/icon-button";
import { FaAngleDown } from "react-icons/fa6";
import ProjectFilters from "./components/filters";

type Tile = { id: string; name: string };

export interface Project {
  name: string;
  tiles: Tile[];
  descriptions: string[];
  url: string;
  images: string[];
  link?: string;
  desktopImage: string;
  mobileImage: string;
  type: string;
}

const Projects = () => {
  useScrollToTop();

  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [selectedType, setSelectedType] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const loadWorkData = async () => {
      const lang = i18n.language;

      if (lang === "ro") {
        const projectsDataRo = await import("@/lib/data/projects-ro.json");
        setProjects(projectsDataRo.default.projects);
      } else {
        const projectsDataEn = await import("@/lib/data/projects-en.json");
        setProjects(projectsDataEn.default.projects);
      }
    };

    loadWorkData();
  }, [i18n.language]);

  if (!projects) return null;

  let filteredProjects: Project[];

  selectedType
    ? selectedType === "All"
      ? (filteredProjects = projects)
      : (filteredProjects = projects.filter((p) => p.type === selectedType))
    : (filteredProjects = projects);

  function handleType(type: string) {
    setSelectedType(type);
    setVisibleCount(4);
  }

  const projectTypes = new Set(projects.map((p: Project) => p.type));

  return (
    <>
      <Group mt={50}>
        <Box className={styles.first}></Box>
        <Text style={{ zIndex: 1000 }} className={styles.second}>
          <span>{t("projects.breadcrumb")}</span>
        </Text>
      </Group>

      <ProjectFilters
        projectTypes={projectTypes}
        selectedType={selectedType}
        handleType={handleType}
      />
      <Stack className={styles.projectStack} gap={150}>
        {filteredProjects
          .slice(0, visibleCount)
          .map((project: Project, index: number) => (
            <Stack>
              <Group className={styles.projectGroup} key={index} mt={50}>
                <Details project={project} index={index} />
                <ImageGallery index={index} project={project} />
              </Group>
            </Stack>
          ))}
      </Stack>
      {visibleCount < filteredProjects.length && (
        <Group justify="center" mt={50}>
          <IconButton
            label="See More"
            icon={FaAngleDown}
            onClick={() => setVisibleCount((prev) => prev + 4)}
          />
        </Group>
      )}
    </>
  );
};
export default Projects;
