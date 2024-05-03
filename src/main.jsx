import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./contexts/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}> */}
      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
