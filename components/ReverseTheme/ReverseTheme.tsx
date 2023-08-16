import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import useGetTheme from "../../hooks/useGetTheme";
import dark from "../../themes/dark";
import light from "../../themes/light";

const ReverseTheme: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Hooks
  const theme = useGetTheme();

  return (
    <ThemeProvider theme={theme.name === "Light Theme" ? dark : light}>
      {children}
    </ThemeProvider>
  );
};

export default ReverseTheme;
