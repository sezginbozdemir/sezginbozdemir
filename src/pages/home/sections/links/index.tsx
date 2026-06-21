import { Group } from "@mantine/core";
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
    { href: GH_URL, Icon: GhIcon, name: "Github" },
    { href: LI_URL, Icon: LinkedinIcon, name: "Linkedin" },
  ],
  y: { href: `mailto:${MAIL}`, Icon: EmailIcon, name: "Email" },
  z: [
    { href: IG_URL, Icon: IgIcon, name: "Instagram" },
    { href: FB_URL, Icon: FbIcon, name: "Facebook" },
  ],
};

const LinksSection = () => {
  return (
    <Group className={styles.mainGroup} justify="space-around" mb={100} mt={50}>
      <Group>
        {links.x.map(({ href, Icon, name }) => (
          <IconButton label={name} icon={Icon} href={href} />
        ))}
      </Group>
      <IconButton
        label={links.y.name}
        icon={links.y.Icon}
        href={links.y.href}
      />

      <Group>
        {links.z.map(({ href, Icon, name }) => (
          <IconButton label={name} icon={Icon} href={href} />
        ))}
      </Group>
    </Group>
  );
};

export default LinksSection;
