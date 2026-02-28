import { Box, Group } from "@mantine/core";
import styles from "./styles.module.css";
import { BsArrowUpRight } from "react-icons/bs";
import { Anchor } from "@mantine/core";

interface Props {
  url: string;
  icon: React.ElementType;
}

const LinkButton: React.FC<Props> = ({ url, icon: Icon }) => {
  return (
    <Group className={styles.gitLink}>
      <Box className={styles.gitBox}>
        <Icon color="var(--white)" size={28} />
      </Box>
      <Anchor target="_blank" href={url} className={styles.linkBox}>
        <BsArrowUpRight color="var(--black)" size={25} />
      </Anchor>
    </Group>
  );
};

export default LinkButton;
