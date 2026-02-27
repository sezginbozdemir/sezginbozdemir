import { Button } from "@mantine/core";
import type { ElementProps } from "@mantine/core";
import styles from "./styles.module.css";

type PrimaryButtonProps = React.ComponentProps<typeof Button> &
  ElementProps<"button", keyof React.ComponentProps<typeof Button>>;

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <Button component="button" className={styles.primaryButton} {...props} />
  );
}
