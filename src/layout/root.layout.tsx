import { Outlet } from "react-router-dom";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Container } from "@mantine/core";

const RootLayout = () => {
  return (
    <Container size="xl" h="100%" w="100%">
      <Header />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default RootLayout;
