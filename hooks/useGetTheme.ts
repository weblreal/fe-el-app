import { useContext } from "react";
import { ThemeContext } from "styled-components";

const useGetTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};

export default useGetTheme;
