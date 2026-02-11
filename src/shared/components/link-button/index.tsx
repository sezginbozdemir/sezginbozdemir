import { Box, Group } from "@mantine/core";
import styles from "./link-button.module.css";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

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
      <Link to={url} className={styles.linkBox}>
        <BsArrowUpRight color="var(--black)" size={25} />
      </Link>
    </Group>
  );
};

export default LinkButton;
