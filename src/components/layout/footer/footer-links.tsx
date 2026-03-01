import { Group } from "@mantine/core";
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
      icon: GhIcon,
      link: GH_URL,
    },
    {
      name: "LinkedIn",
      icon: LinkIcon,
      link: LI_URL,
    },
    {
      name: "Email",
      icon: EmailIcon,
      link: `mailto:${MAIL}`,
    },
    {
      name: "Instagram",
      icon: IgIcon,
      link: IG_URL,
    },
    {
      name: "Facebook",
      icon: FbIcon,
      link: FB_URL,
    },
    {
      name: "Resume",
      icon: DownloadIcon,
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
        <IconButton
          label={link.name}
          icon={link.icon}
          key={index}
          href={link.link}
        />
      ))}
    </Group>
  );
};

export default FooterLinks;
