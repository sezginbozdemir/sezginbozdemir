import styles from "../intro.module.css";
import { Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
interface Props {
  hidden?: boolean;
}

const IntroText: React.FC<Props> = ({ hidden }) => {
  const { t } = useTranslation();
  return (
    <Title
      className={`${styles.Text} ${hidden ? styles.hidden : ""}`}
      order={4}
    >
      {t("intro.part1")}{" "}
      <span className={styles.TextSpan}>{t("intro.part2")}</span>{" "}
      {t("intro.part3")}{" "}
      <span className={styles.TextSpan}>{t("intro.part4")}</span>{" "}
      {t("intro.part5")}
    </Title>
  );
};
export default IntroText;
