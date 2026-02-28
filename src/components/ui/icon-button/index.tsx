import { Button, ButtonProps, PolymorphicComponentProps } from "@mantine/core";
import styles from "./styles.module.css";

type IconButtonProps = PolymorphicComponentProps<"a", ButtonProps>;

export default function IconButton(props: IconButtonProps) {
  return (
    <Button
      component="a"
      target="_blank"
      variant="outline"
      radius="xl"
      className={styles.iconButton}
      {...props}
    />
  );
}
