import { Group, Stack, Text } from "@mantine/core";
import styles from "./intro.module.css";
import IntroText from "./components/intro-text";
import ButtonGroup from "./components/button-group";

const IntroSection = () => {
  return (
    <Stack gap={30} mt={80}>
      <Group align="end">
        <Text ta="start" className={`${styles.slideLeft} ${styles.Title}`}>
          Full-stack
        </Text>
        <ButtonGroup hidden />
      </Group>
      <Group className={styles.devGroup} align="end" justify="space-between">
        <IntroText hidden />
        <Text ta="start" className={`${styles.slideRight} ${styles.Title}`}>
          Developer
        </Text>
      </Group>
      <Group className={styles.infoGroup}>
        <IntroText />
        <ButtonGroup />
      </Group>
    </Stack>
  );
};

export default IntroSection;
