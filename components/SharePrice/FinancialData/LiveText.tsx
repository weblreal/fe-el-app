// Modules
import styled from "styled-components";

// Components
import Flex from "../../UI/Flex/Flex";
import Span from "../../UI/Span/Span";
import Text from "../../UI/Text/Text";

type ILiveTextProps = {
  liveText: string;
};

const LiveText: React.FC<ILiveTextProps> = ({ liveText }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Flex
      width="77px"
      height="32px"
      borderRadius="100px"
      border="thin"
      borderColor="neutral.10"
      backgroundColor="neutral.5"
      justifyContent="center"
      alignItems="center"
      order={{ _: "1", desktopS: "2" }}
      ml={{ _: "12px", desktopS: "0px" }}
    >
      <Dot />
      <Text fontSize="16px" ml="10px" fontFamily="Avenir Roman">
        {liveText}
      </Text>
    </Flex>
  );
};

const Dot = styled(Span)`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.text};
`;
export default LiveText;
