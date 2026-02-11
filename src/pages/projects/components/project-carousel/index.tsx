import { Carousel } from "@mantine/carousel";
import styles from "./project-carousel.module.css";
import { Box, Image } from "@mantine/core";

interface Props {
  images: string[];
}

const ProjectCarousel = ({ images }: Props) => {
  return (
    <Box className={styles.carouselWrapper}>
      <Carousel
        classNames={{
          control: styles.carouselControl,
          root: styles.carouselRoot,
        }}
        height={500}
        slideSize="100%"
        loop
        align="center"
      >
        {images.map((image, index) => (
          <Carousel.Slide key={index}>
            <Image
              style={{ objectPosition: "left" }}
              src={image}
              height="100%"
              width="100%"
              alt="Project image"
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};

export default ProjectCarousel;
