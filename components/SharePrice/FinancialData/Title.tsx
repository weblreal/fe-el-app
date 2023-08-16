// Modules
import AppConfig from "../../../logic/configs/AppConfig";
// Components
import Text from "../../UI/Text/Text";
import Flex from "../../UI/Flex/Flex";

type ITitleProps = {
  title: string;
};

const Title: React.FC<ITitleProps> = ({ title }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Flex alignItems="center" flexWrap={{ _: "wrap", desktopS: "initial" }}>
      <Text fontSize="32px" fontWeight="500" fontFamily="Avenir Medium">
        {AppConfig.html(title)}
      </Text>
    </Flex>
  );
};
export default Title;
