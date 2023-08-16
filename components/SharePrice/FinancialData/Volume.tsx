// Modules

// Components
import Column from "../../UI/Column/Column";
import LongText from "../../UI/LongText/LongText";
import Text from "../../UI/Text/Text";

type IVolumeProps = {
  value: string;
  label: string;
};

const Volume: React.FC<IVolumeProps> = ({ label, value }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Column width="304px">
      <Text fontSize="24px" mb="8px">
        {value}
      </Text>
      <LongText fontSize="18px">{label}</LongText>
    </Column>
  );
};
export default Volume;
