import React, { useState } from "react";
import Themecontext from "./Themecontext";

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
      if (theme === "dark") {
       document.body.style.backgroundColor = "gray";
      } else {
        document.body.style.backgroundColor = "white";
      }
    };
    const contextValue = {
        theme,
        toggleTheme,
    };
  return (
    <Themecontext.Provider value={contextValue}>{children}</Themecontext.Provider>
  );
};
export default ThemeContextProvider;
