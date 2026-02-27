import IntroSection from "./sections/intro";
import LinksSection from "./sections/links";
import AboutSection from "./sections/about";
import WorkSection from "./sections/work";
import { useScrollToTop } from "../../lib/hooks/useScrollToTop";
import { Container } from "@mantine/core";

const HomePage = () => {
  useScrollToTop();
  return (
    <Container size="xl" h="100%" w="100%">
      <IntroSection />
      <LinksSection />
      <AboutSection />
      <WorkSection />
    </Container>
  );
};

export default HomePage;
