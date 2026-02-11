import styles from "./about.module.css";
import AboutHeader from "./components/about-header";
import AboutContent from "./components/about-content";
import { Box } from "@mantine/core";
const AboutSection = () => {
  return (
    <Box style={{ position: "relative" }}>
      <AboutHeader />
      <AboutContent />
      <Box className={styles.float} />
    </Box>
  );
};

export default AboutSection;
