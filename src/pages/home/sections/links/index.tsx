import { Button, Group, Title } from "@mantine/core";
import styles from "./links.module.css";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const LinksSection = () => {
  return (
    <Group className={styles.mainGroup} justify="space-around" mb={100} mt={50}>
      <Group>
        <Button
          component="a"
          href="https://github.com/sezginbozdemir"
          className={styles.Button}
          variant="outline"
          radius="xl"
        >
          <Title order={5} className={styles.Text}>
            <TbBrandGithubFilled size={18} color="var(--white)" />
            Github
          </Title>
        </Button>
        <Button
          component="a"
          href="https://linkedin.com/in/sezginbozdemir"
          className={styles.Button}
          variant="outline"
          radius="xl"
        >
          <Title order={5} className={styles.Text}>
            <FaLinkedinIn size={18} color="var(--white)" />
            LinkedIn
          </Title>
        </Button>
      </Group>
      <Button
        component="a"
        href="mailto:bozdemirsezgin@proton.me"
        className={styles.Button}
        variant="outline"
        radius="xl"
      >
        <Title order={5} className={styles.Text}>
          <MdAlternateEmail size={18} color="var(--white)" />
          Email
        </Title>
      </Button>
      <Group>
        <Button
          component="a"
          href="https://www.instagram.com/sezginbozdemir/"
          className={styles.Button}
          variant="outline"
          radius="xl"
        >
          <Title order={5} className={styles.Text}>
            <FaInstagram size={18} color="var(--white)" />
            Instagram
          </Title>
        </Button>
        <Button
          component="a"
          href="https://www.facebook.com/SezginBozdemir/"
          className={styles.Button}
          variant="outline"
          radius="xl"
        >
          <Title order={5} className={styles.Text}>
            <FaFacebookF size={18} color="var(--white)" />
            Facebook
          </Title>
        </Button>
      </Group>
    </Group>
  );
};

export default LinksSection;
