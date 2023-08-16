import Flex from "../UI/Flex/Flex";
import Icon from "../UI/Icon/Icon";
import Text from "../UI/Text/Text";

type ICTAPlay = {
  onClickHandler?: () => void;
  label?: string;
};

const CTAPlay = ({ label, onClickHandler }: ICTAPlay) => {
  return (
    <Flex width="fit-content" m="auto" justifyContent="center" pointer onClick={onClickHandler} allPointer>
      <Icon color="white" type="player" size={24} />
      <Text color="white" fontSize="h3" ml={20}>
        {label}
      </Text>
    </Flex>
  );
};

export default CTAPlay;
