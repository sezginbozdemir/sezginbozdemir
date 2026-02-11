import styles from "../intro.module.css";
import { Group, Button, Title } from "@mantine/core";
import { FiDownload } from "react-icons/fi";
interface Props {
  hidden?: boolean;
}

const ButtonGroup: React.FC<Props> = ({ hidden }) => {
  return (
    <Group
      className={`${styles.InnerGroup} ${hidden ? styles.hidden : ""}`}
      justify="center"
    >
      <Button
        component="a"
        href="/cv.pdf"
        download="Sezgin_CV.pdf"
        className={styles.Button}
        w={250}
        h={50}
        variant="filled"
        radius="xl"
      >
        <Title className={styles.Link} order={4}>
          Resume
        </Title>
      </Button>
      <Button
        component="a"
        href="/cv.pdf"
        download="Sezgin_CV.pdf"
        className={styles.Button}
        h={55}
        variant="filled"
        radius="xl"
      >
        <FiDownload color="var(--black)" size={20} />
      </Button>
    </Group>
  );
};
export default ButtonGroup;
