import { Outlet } from "react-router-dom";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
