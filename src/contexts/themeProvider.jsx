import { useState } from "react";
import { ThemeContext } from "./theme";

const intialState = {
  themeMode: "light",
};

const ThemeProvider = (props) => {
  const [themeState, setThemeState] = useState(intialState);

  const lightThemeHanlder = () => {
    setThemeState((item) => {
      item.themeMode = "light";
    });
  };

  const darkThemeHandler = () => {
    setThemeState((item) => {
      item.themeMode = "dark";
    });
  };

  const themeValue = {
    themeMode: themeState.themeMode,
    darkTheme: darkThemeHandler,
    lightTheme: lightThemeHanlder,
  };
  
  return (
    <ThemeContext.Provider value={themeValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
