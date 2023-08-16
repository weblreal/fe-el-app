// Modules

// Components
import Text from "../../UI/Text/Text";
import Column from "../../UI/Column/Column";
import LongText from "../../UI/LongText/LongText";

type ILastPriceProps = {
  value: string;
  label: string;
};

const LastPrice: React.FC<ILastPriceProps> = ({ value, label }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Column width="304px">
      <Text fontSize="24px" mb="8px">
        €{value}
      </Text>
      <LongText fontSize="18px" fontFamily="Avenir Light">
        {label}
      </LongText>
    </Column>
  );
};
export default LastPrice;
