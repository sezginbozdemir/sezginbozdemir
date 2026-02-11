import IntroSection from "./sections/intro";
import LinksSection from "./sections/links";
import AboutSection from "./sections/about";
import WorkSection from "./sections/work";
import { ScrollTop } from "../../shared/hooks/scroll-to-top";
import { Container } from "@mantine/core";

const Home = () => {
  ScrollTop();
  return (
    <Container size="xl" h="100%" w="100%">
      <IntroSection />
      <LinksSection />
      <AboutSection />
      <WorkSection />
    </Container>
  );
};

export default Home;
