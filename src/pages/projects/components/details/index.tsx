import { Box, Button, Group, Stack, Text, Title, Modal } from "@mantine/core";
import styles from "./details.module.css";
import { TbBrandGithubFilled } from "react-icons/tb";
import { icons } from "@/components/icons";
import LinkButton from "@/components/ui/link-button";
import { IoImages } from "react-icons/io5";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { FiLink } from "react-icons/fi";
import { Project } from "../..";
import ImageSlider from "@/components/ui/image-slider";

interface DetailsProps {
  index: number;
  project: Project;
}
const Details: React.FC<DetailsProps> = ({ project, index }) => {
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      <Stack
        style={{ zIndex: 1000, order: isMobile ? 2 : index % 2 === 0 ? 1 : 2 }}
        className={styles.detailStack}
      >
        <Stack gap={30}>
          <Title order={3} className={styles.name}>
            {project.name}
          </Title>
          <Group>
            {project.tiles.map((tile, index) => {
              const Icon = icons[tile.id];
              return (
                <Text key={index} className={styles.tile}>
                  {Icon && <Icon />} {tile.name}
                </Text>
              );
            })}
          </Group>
          {project.link && (
            <Box className={styles.mobileLink}>
              <LinkButton url={project.link} icon={FiLink} />
              <Title className={styles.buttonTitle} order={4}>
                Visit site
              </Title>
            </Box>
          )}
        </Stack>
        <Stack gap={30}>
          {project.descriptions.map((description, index) => (
            <Title key={index} order={5} className={styles.description}>
              {description}
            </Title>
          ))}
        </Stack>
        <Group w="100%">
          <Box className={styles.box}>
            <LinkButton url={project.url} icon={TbBrandGithubFilled} />
          </Box>
          <Button
            className={styles.imagesButton}
            onClick={() => setOpened(true)}
          >
            <Title className={styles.buttonTitle} order={4}>
              +{project.images.length}
            </Title>

            <IoImages size={25} />
            <Title className={styles.buttonTitle} order={5}>
              More visuals
            </Title>
          </Button>
        </Group>
      </Stack>
      <Modal
        transitionProps={{ duration: TRANSITION_DURATION }}
        withCloseButton={true}
        opened={opened}
        onClose={() => setOpened(false)}
        size="2xl"
        padding={0}
        classNames={{
          body: styles.modalBody,
          inner: styles.modalInner,
          content: styles.modalContent,
          header: styles.modalHeader,
          close: styles.modalClose,
        }}
        centered
      >
        <ImageSlider images={project.images} />
      </Modal>
    </>
  );
};
export default Details;
