import { Box, Group, Image } from "@mantine/core";
import styles from "./image-gallery.module.css";
import { FiLink } from "react-icons/fi";
import LinkButton from "@/shared/components/link-button";
import { useMediaQuery } from "@mantine/hooks";
import { Project } from "../..";

interface ImageGalleryProps {
  index: number;
  project: Project;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ index, project }) => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <Group
      className={styles.imgGroup}
      style={{
        order: isMobile ? 1 : index % 2 === 0 ? 2 : 1,
      }}
    >
      <Box className={styles.float} />
      {index % 2 === 0 && (
        <Box className={styles.mobileImgBox}>
          <Image
            src={project.mobileImage}
            alt="Fullstack dev"
            className={styles.mobileImg}
          />
        </Box>
      )}
      <Box className={styles.desktopImgBox}>
        <Image
          src={project.desktopImage}
          alt="Fullstack dev"
          className={styles.desktopImg}
        />
        {project.link && (
          <Box className={styles.floatBox}>
            <LinkButton url={project.link} icon={FiLink} />
          </Box>
        )}
        <Box className={styles.border} />
      </Box>
      {index % 2 !== 0 && (
        <Box className={styles.mobileImgBox}>
          <Image
            src={project.mobileImage}
            alt="Fullstack dev"
            className={styles.mobileImg}
          />
        </Box>
      )}
    </Group>
  );
};
export default ImageGallery;
