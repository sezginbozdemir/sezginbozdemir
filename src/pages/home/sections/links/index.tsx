import { Group, Title } from "@mantine/core";
import styles from "./links.module.css";
import IconButton from "@/components/ui/icon-button";
import { FB_URL, GH_URL, IG_URL, LI_URL, MAIL } from "@/lib/constants";
import { icons, socialIcons } from "@/components/icons";
const GhIcon = icons["github"];
const EmailIcon = socialIcons["email"];
const LinkedinIcon = socialIcons["linkedin"];
const FbIcon = socialIcons["facebook"];
const IgIcon = socialIcons["instagram"];

const links = {
  x: [
    { href: GH_URL, Icon: GhIcon },
    { href: LI_URL, Icon: LinkedinIcon },
  ],
  y: { href: MAIL, Icon: EmailIcon },
  z: [
    { href: IG_URL, Icon: IgIcon },
    { href: FB_URL, Icon: FbIcon },
  ],
};

const LinksSection = () => {
  return (
    <Group className={styles.mainGroup} justify="space-around" mb={100} mt={50}>
      <Group>
        {links.x.map(({ href, Icon }) => (
          <IconButton href={href}>
            <Title order={5} className={styles.Text}>
              <Icon size={18} color="var(--white)" />
              Github
            </Title>
          </IconButton>
        ))}
      </Group>
      <IconButton href={links.y.href}>
        <Title order={5} className={styles.Text}>
          <links.y.Icon size={18} color="var(--white)" />
          Github
        </Title>
      </IconButton>

      <Group>
        {links.z.map(({ href, Icon }) => (
          <IconButton href={href}>
            <Title order={5} className={styles.Text}>
              <Icon size={18} color="var(--white)" />
              Github
            </Title>
          </IconButton>
        ))}
      </Group>
    </Group>
  );
};

export default LinksSection;
