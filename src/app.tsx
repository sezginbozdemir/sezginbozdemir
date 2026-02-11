import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import AppRouter from "./app-router";
import "./i18n";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const theme = createTheme({
  fontFamily: "Fira Code",
  headings: {
    fontFamily: "Open Sans",
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <AppRouter />
      </I18nextProvider>
    </MantineProvider>
  );
}

export default App;
