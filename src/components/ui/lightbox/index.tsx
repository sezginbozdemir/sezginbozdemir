import { Modal } from "@mantine/core";
import styles from "./styles.module.css";
import ImageSlider from "../image-slider";

interface Props {
  images: string[];
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

const Lightbox = ({ images, setOpened, opened }: Props) => {
  return (
    <Modal
      withCloseButton
      opened={opened}
      onClose={() => setOpened(false)}
      size="2xl"
      padding={0}
      classNames={{
        body: styles.modalBody,
        inner: styles.modalInner,
        content: styles.modalContent,
        header: styles.modalHeader,
        close: styles.modalClose,
      }}
      centered
    >
      <ImageSlider images={images} />
    </Modal>
  );
};

export default Lightbox;
