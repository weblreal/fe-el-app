// Modules
import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ITheme } from "../models/ITheme";
import { IThemeContextProvider } from "../models/IThemeContextProvider";
import dark from "../themes/dark";
import light from "../themes/light";

export const ThemeContext = createContext<{
  toggleCurrentTheme?: () => void;
  currentTheme?: ITheme;
}>({});

const ThemeContextProvider = ({
  children,
  defaultTheme = "Light Theme",
}: IThemeContextProvider) => {
  // Hooks
  const [currentTheme, setCurrentTheme] = useState<ITheme>(defaultTheme);
  
  // Functions
  const toggleCurrentTheme = () => {
    const newTheme = currentTheme === "Dark Theme" ? "Light Theme" : "Dark Theme";

    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Effects
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "Light Theme") setCurrentTheme(localTheme);
    if (localTheme === "Dark Theme") setCurrentTheme(localTheme);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme,
        toggleCurrentTheme: toggleCurrentTheme,
      }}
    >
      <ThemeProvider theme={currentTheme === "Dark Theme" ? dark : light}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
