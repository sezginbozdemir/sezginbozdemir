import { Group, Title } from "@mantine/core";
import styles from "./footer.module.css";
import { icons, socialIcons } from "@/components/icons";
import IconButton from "@/components/ui/icon-button";
import { FB_URL, GH_URL, IG_URL, LI_URL, MAIL } from "@/lib/constants";

const GhIcon = icons["github"];
const LinkIcon = socialIcons["linkedin"];
const EmailIcon = socialIcons["email"];
const IgIcon = socialIcons["instagram"];
const FbIcon = socialIcons["facebook"];
const DownloadIcon = socialIcons["download"];

const FooterLinks = () => {
  const linkData = [
    {
      name: "Github",
      icon: <GhIcon size={18} color="var(--white)" />,
      link: GH_URL,
    },
    {
      name: "LinkedIn",
      icon: <LinkIcon size={18} color="var(--white)" />,
      link: LI_URL,
    },
    {
      name: "Email",
      icon: <EmailIcon size={18} color="var(--white)" />,
      link: `mailto:${MAIL}`,
    },
    {
      name: "Instagram",
      icon: <IgIcon size={18} color="var(--white)" />,
      link: IG_URL,
    },
    {
      name: "Facebook",
      icon: <FbIcon size={18} color="var(--white)" />,
      link: FB_URL,
    },
    {
      name: "Resume",
      icon: <DownloadIcon size={18} color="var(--white)" />,
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
        <IconButton key={index} href={link.link}>
          <Title order={5} className={styles.LinkText}>
            {link.icon}
            {link.name}
          </Title>
        </IconButton>
      ))}
    </Group>
  );
};

export default FooterLinks;
