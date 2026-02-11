import { Box, Group, Stack, Text, Title, Accordion, List } from "@mantine/core";
import styles from "./work.module.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa6";

const WorkSection = () => {
  const { i18n } = useTranslation();
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const loadWorkData = async () => {
      const lang = i18n.language;

      if (lang === "ro") {
        const workDataRo = await import("./work-ro.json");
        setWorkData(workDataRo.default);
      } else {
        const workDataEn = await import("./work-en.json");
        setWorkData(workDataEn.default);
      }
    };

    loadWorkData();
  }, [i18n.language]);

  if (!workData) return null;
  return (
    <>
      <Box className={styles.headerBox}>
        <Text className={styles.header}>Work</Text>
      </Box>

      <Accordion className={styles.workBox}>
        {workData.experience.map((job: any, index: number) => (
          <Accordion.Item
            key={index}
            value={job.company}
            className={styles.accordionItem}
          >
            <Accordion.Control className={styles.workGroup}>
              <Group>
                <Group className={styles.innerGroup}>
                  <Stack className={styles.timeStack}>
                    <Title order={4} className={styles.time}>
                      {job.start} - {job.end}
                    </Title>
                    <Title order={6} className={styles.range}>
                      {job.duration}
                    </Title>
                  </Stack>
                  <Title order={4} className={styles.company}>
                    {job.company}
                  </Title>
                </Group>
                <Text className={styles.stack}>{job.role}</Text>
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <List
                spacing="sm"
                py={10}
                icon={<FaCircle size={6} color="white" />}
              >
                {job.list.map((item: string, i: number) => (
                  <List.Item key={i}>
                    <Title order={4} className={styles.desc}>
                      {item}
                    </Title>
                  </List.Item>
                ))}
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>

      <Box className={styles.headerBox}>
        <Stack my={20} gap={0}>
          <Title className={styles.time} order={5}>
            {workData.title}
          </Title>
          <Title order={5} className={styles.total}>
            {workData.total}
          </Title>
        </Stack>
      </Box>
    </>
  );
};

export default WorkSection;
