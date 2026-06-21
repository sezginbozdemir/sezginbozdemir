import IntroSection from "./sections/intro";
import LinksSection from "./sections/links";
import AboutSection from "./sections/about";
import WorkSection from "./sections/work";
import { useScrollToTop } from "../../lib/hooks/useScrollToTop";

const HomePage = () => {
  useScrollToTop();
  return (
    <>
      <IntroSection />
      <LinksSection />
      <AboutSection />
      <WorkSection />
    </>
  );
};

export default HomePage;
