// Modules
import AppConfig from "../../logic/configs/AppConfig";

// Components
import Text from "../UI/Text/Text";

type IServiceHeaderProps = {
  topText?: string;
};

const ServiceHeader = ({ topText }: IServiceHeaderProps) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Text
      fontFamily="Avenir Light"
      fontWeight="light"
      fontSize="h5"
      py={{ _: 3, desktopS: 5 }}
      px={{ _: 2, desktopS: 0 }}
    >
      {AppConfig.html(topText)}
    </Text>
  );
};

export default ServiceHeader;
