import {
  TextInput,
  TextInputProps,
  TextareaProps,
  Textarea,
} from "@mantine/core";
import styles from "./styles.module.css";

type Props =
  | ({ multiline: true } & TextareaProps)
  | ({ multiline?: false } & TextInputProps);

const PrimaryInput = ({ multiline, ...props }: Props) => {
  if (multiline) {
    return (
      <Textarea
        {...(props as TextareaProps)}
        minRows={4}
        className={styles.inputField}
        classNames={{ input: styles.inputArea }}
      />
    );
  }

  return (
    <TextInput
      {...(props as TextInputProps)}
      className={styles.inputField}
      classNames={{ input: styles.input }}
    />
  );
};

export default PrimaryInput;
