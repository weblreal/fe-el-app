import { useContext } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { ThemeContext } from "../../../context/ThemeContextProvider";
// Components
import { GridRow } from "../../UI/Grid/Grid";
import Flex from "../../UI/Flex/Flex";
import Text from "../../UI/Text/Text";
import Toggle from "../../UI/Toggle/Toggle";

const ThemeToggle = ({}) => {
  // Hooks
  const { toggleCurrentTheme, currentTheme } = useContext(ThemeContext);
  const { saveEnergyToggleText } = useAppSelector(
    (prev) => prev.FinancialSlice
  );

  // Functions
  const setBackgroundColor = () => {
    if (currentTheme === "Dark Theme") return "#1a1a1a";
    if (currentTheme === "Light Theme") return "black";
  };

  return (
    <GridRow p={2} backgroundColor={setBackgroundColor()}>
      <Flex justifyContent="space-between">
        <Text transparent color="white">
          {saveEnergyToggleText}
        </Text>
        <Toggle
          onChange={() => (toggleCurrentTheme ? toggleCurrentTheme() : null)}
          checked={currentTheme === "Dark Theme"}
        />
      </Flex>
    </GridRow>
  );
};

export default ThemeToggle;
