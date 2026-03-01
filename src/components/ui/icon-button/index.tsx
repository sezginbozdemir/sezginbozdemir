import {
  Button,
  ButtonProps,
  PolymorphicComponentProps,
  Title,
} from "@mantine/core";
import styles from "./styles.module.css";
import { ElementType } from "react";

type IconButtonProps = PolymorphicComponentProps<"a", ButtonProps> & {
  label: string;
  icon?: ElementType;
};

export default function IconButton({
  label,
  icon: Icon,
  ...props
}: IconButtonProps) {
  return (
    <Button
      component="a"
      target="_blank"
      variant="outline"
      radius="xl"
      className={styles.iconButton}
      {...props}
    >
      <Title order={5} className={styles.Text}>
        {Icon && <Icon size={18} color="var(--white)" />}
        {label}
      </Title>
    </Button>
  );
}
