import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import RootLayout from "./layout/root.layout";
import NotFound from "./pages/not-found/not-found";
import HomePage from "./pages/home/home.page";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
