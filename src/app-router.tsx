import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./shared/header";
import Footer from "./shared/footer";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import NotFound from "./not-found";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
