// Modules

// Components
import Column from "../../UI/Column/Column";
import LongText from "../../UI/LongText/LongText";
import Text from "../../UI/Text/Text";

type IChangeProps = {
  label: string;
  value: string;
};

const Change: React.FC<IChangeProps> = ({ label, value }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Column
      width="304px"
      mx={{ _: "0px", desktopS: "32px" }}
      my={{ _: "24px", desktopS: "0px" }}
    >
      <Text
        fontSize="24px"
        color={value?.includes("-") ? "#000000" : "#008a10"}
        mb="8px"
      >
        {value}%
      </Text>
      <LongText fontSize="18px" fontFamily="Avenir Light" fontWeight="light">
        {label}
      </LongText>
    </Column>
  );
};
export default Change;
