import { Group, Text, Box, Title } from "@mantine/core";
import { useScrollToTop } from "../../lib/hooks/useScrollToTop";
import styles from "./styles.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import PrimaryButton from "@/components/ui/primary-button";
import PrimaryInput from "@/components/ui/text-input/text-input";
import { FormData, sendEmail } from "@/lib/emailjs";

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const TEXT_FIELDS: {
  name: keyof FormData;
  type?: string;
  multiline?: boolean;
}[] = [
  { name: "name", type: "text" },
  { name: "email", type: "email" },
  { name: "subject", type: "text" },
  { name: "message", type: "text", multiline: true },
];

const Contact = () => {
  useScrollToTop();

  const { t } = useTranslation();
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);

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
    const missingFields = Object.entries(formData).some(
      ([_key, value]) => !value || value === "",
    );

    if (missingFields) {
      setStatusType("error");
      setStatusMessage(t("contact.validationError"));
      return;
    }

    sendEmail(formData)
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
    <>
      <Group className={styles.container} mt={100}>
        <Text className={styles.title}>
          <span>{t("contact.title")}</span>
        </Text>
        <Box className={styles.formBox}>
          <form onSubmit={handleSubmit}>
            {TEXT_FIELDS.map(({ name, type, multiline }) => (
              <PrimaryInput
                required
                name={name}
                type={type}
                label={t(`contact.${name}`)}
                value={formData[name]}
                onChange={handleChange}
                placeholder={t(`contact.${name}Placeholder`)}
                multiline={multiline}
              />
            ))}
            <PrimaryButton type="submit">
              <Title fw={400} order={5}>
                {t("contact.submitButton")}
              </Title>
            </PrimaryButton>
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
    </>
  );
};

export default Contact;
