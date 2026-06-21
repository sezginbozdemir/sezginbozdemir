import { Carousel } from "@mantine/carousel";
import styles from "./styles.module.css";
import { Box, Image } from "@mantine/core";

interface Props {
  images: string[];
}

const ImageSlider = ({ images }: Props) => {
  return (
    <Box className={styles.carouselWrapper}>
      <Carousel
        classNames={{
          control: styles.carouselControl,
          root: styles.carouselRoot,
          viewport: styles.carouselViewport,
          slide: styles.carouselSlide,
          container: styles.carouselContainer,
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

export default ImageSlider;
