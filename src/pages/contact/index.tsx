import {
  Group,
  Text,
  Box,
  TextInput,
  Textarea,
  Button,
  Title,
  Container,
} from "@mantine/core";
import { ScrollTop } from "../../shared/hooks/scroll-to-top";
import styles from "./contact.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const Contact = () => {
  const { t } = useTranslation();
  ScrollTop();
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_26y0va8",
        "template_seg40oc",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "bbUkLejFT4lzzGXLQ",
      )
      .then(() => {
        setStatusMessage(t("contact.successMessage"));
        setStatusType("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err: any) => {
        console.error("Error sending email:", err);
        setStatusMessage(t("contact.errorMessage"));
        setStatusType("error");
      });
  };
  return (
    <Container size="xl" h="100%" w="100%">
      <Group className={styles.container} mt={100}>
        <Text className={styles.title}>
          <span>{t("contact.title")}</span>
        </Text>
        <Box className={styles.formBox}>
          <form onSubmit={handleSubmit}>
            <TextInput
              name="name"
              label={t("contact.name")}
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contact.namePlaceholder")}
              required
              className={styles.inputField}
              classNames={{ input: styles.input }}
            />
            <TextInput
              name="email"
              value={formData.email}
              onChange={handleChange}
              label={t("contact.email")}
              placeholder={t("contact.emailPlaceholder")}
              required
              type="email"
              className={styles.inputField}
              classNames={{ input: styles.input }}
            />
            <TextInput
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              label={t("contact.subject")}
              placeholder={t("contact.subjectPlaceholder")}
              required
              type="subject"
              className={styles.inputField}
              classNames={{ input: styles.input }}
            />
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              label={t("contact.message")}
              placeholder={t("contact.messagePlaceholder")}
              required
              minRows={4}
              className={styles.inputField}
              classNames={{ input: styles.inputArea }}
            />
            <Button px={50} type="submit" className={styles.button}>
              <Title fw={400} order={5}>
                {t("contact.submitButton")}
              </Title>
            </Button>
            {statusMessage && (
              <Text
                mt={30}
                size="sm"
                style={{
                  color: statusType === "error" ? "red" : "var(--white)",
                }}
              >
                {statusMessage}
              </Text>
            )}
          </form>
        </Box>
      </Group>
    </Container>
  );
};

export default Contact;
