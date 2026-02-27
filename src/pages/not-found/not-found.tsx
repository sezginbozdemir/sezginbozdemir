import { Button, Container, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <Container className={styles.wrapper}>
      <Text className={styles.code}>404</Text>
      <Text className={styles.message}>Page Not Found</Text>
      <Link to="/">
        <Button variant="light" color="gray" radius="md">
          Go Home
        </Button>
      </Link>
    </Container>
  );
}
