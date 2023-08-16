// Modules
import styled from "styled-components";
import { useEffect } from "react";

// Components
import Container from "../UI/Container/Container";
import useScrollIntoView from "../../hooks/useScrollIntoView";
import Flex from "../UI/Flex/Flex";
import Text from "../UI/Text/Text";

const Options = styled(Container)`
  overflow-y: auto;
  max-height: 300px;
  box-shadow: ${(props) => `inset 0 0 0 1px ${props.theme.shadows?.["Solid Border"]}`};
  background-color: ${(props) => props.theme.colors.background};
  margin-top: 0px;
  position: absolute;
  width: 100%;
  font-size: 14px;

  &::-webkit-scrollbar {
    cursor: pointer;
    width: 4px;
    position: relative;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.neutral["10"]};
    border-radius: 2px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.text};
    margin-right: 1em;
  }

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      padding-left: 12px;
      user-select: none;
      cursor: pointer;
    }
  }
`;

export const Option = styled.li<{ active?: boolean }>`
  background-color: ${(props) => props.active ? props.theme.colors.accent : ""};
  transition: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
  }
`;

export const OptionScroller = ({
  active,
  label,
}: {
  active?: boolean;
  label: string;
}) => {
  // Hooks
  const { element, scrollToELement } = useScrollIntoView({
    block: "nearest",
    behavior: "auto",
  });

  useEffect(() => {
    if (active) scrollToELement();
  }, [active, element, scrollToELement]);

  return (
    <Flex alignItems="center" py={1} ref={element}>
      <Text>{label}</Text>
    </Flex>
  );
};

export default Options;
