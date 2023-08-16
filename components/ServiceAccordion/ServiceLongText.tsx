// Modules
import AppConfig from "../../logic/configs/AppConfig";

// Components
import Text from "../UI/Text/Text";

type IServiceLongTextProps = {
  longText: string;
};

const ServiceLongText: React.FC<IServiceLongTextProps> = ({ longText }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Text
      fontFamily="Avenir Roman"
      fontSize="h5"
      color="neutral.80"
      py={{ _: 3, desktopS: 0 }}
      pt={{ desktopS: 0 }}
      px={{ _: 2, desktopS: 0 }}
    >
      {AppConfig.html(longText)}
    </Text>
  );
};
export default ServiceLongText;
