import { Button, Group, Title } from "@mantine/core";
import styles from "./footer.module.css";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FiDownload } from "react-icons/fi";

const FooterLinks = () => {
  const linkData = [
    {
      name: "Github",
      icon: <TbBrandGithubFilled size={18} color="var(--white)" />,
      link: "https://github.com/sezginbozdemir",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={18} color="var(--white)" />,
      link: "https://linkedin.com/in/sezginbozdemir",
    },
    {
      name: "Email",
      icon: <MdAlternateEmail size={18} color="var(--white)" />,
      link: "mailto:bozdemirsezgin@proton.me",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={18} color="var(--white)" />,
      link: "https://www.instagram.com/sezginbozdemir/",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={18} color="var(--white)" />,
      link: "https://www.facebook.com/SezginBozdemir/",
    },
    {
      name: "Resume",
      icon: <FiDownload size={18} color="var(--white)" />,
      link: "/cv.pdf",
    },
  ];

  return (
    <Group
      style={{ zIndex: 1000 }}
      className={styles.linkGroup}
      justify="center"
      mb={100}
      mt={50}
    >
      {linkData.map((link, index) => (
        <Button
          key={index}
          component="a"
          href={link.link}
          className={styles.Button}
          variant="outline"
          radius="xl"
        >
          <Title order={5} className={styles.LinkText}>
            {link.icon}
            {link.name}
          </Title>
        </Button>
      ))}
    </Group>
  );
};

export default FooterLinks;
