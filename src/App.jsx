import React, { useEffect, useContext } from "react";
import { ThemeContext } from "./contexts/theme";
import ThemeBtn from "./comp/ThemeBtn";
import Card from "./comp/Card";

const App = () => {
  const { themeMode } = useContext(ThemeContext);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
        </div>
        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
