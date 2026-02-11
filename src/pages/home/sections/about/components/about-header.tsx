import { Group, Stack, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import styles from "../about.module.css";

const AboutHeader = () => {
  const { t } = useTranslation();

  return (
    <Group className={styles.mainGroupTitle} mb={100}>
      <Text style={{ zIndex: "1000" }} className={styles.about}>
        <span>{t("about.breadcrumb")}</span>
      </Text>
      <Stack
        style={{ zIndex: "1000" }}
        gap={0}
        className={styles.descriptionStack}
      >
        <Title order={4} className={styles.description}>
          {t("about.line1_start")}{" "}
          <span className={styles.italic}>{t("about.line1_italic")}</span>{" "}
          {t("about.line1_end")}
        </Title>
        <Title order={4} className={styles.description}>
          {t("about.line2_start")}{" "}
          <span className={styles.italic}>{t("about.line2_italic")}</span>{" "}
          {t("about.line2_end")}
        </Title>
      </Stack>
    </Group>
  );
};

export default AboutHeader;
