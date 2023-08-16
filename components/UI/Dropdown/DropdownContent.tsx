// Modules
import { useEffect, useRef } from "react";
import styled from "styled-components";

// Components
import Container from "../Container/Container";
import Text from "../Text/Text";

type IDropdownContentProps = {
  options: { value: string; label: string }[];
  setActiveHandler: (value: string, label: string) => void;
  autoScroll?: boolean;
};

const DropdownContent: React.FC<IDropdownContentProps> = ({
  options,
  setActiveHandler,
  autoScroll,
}) => {
  // Hooks
  const ref = useRef<HTMLUListElement>(null);
  // Variables
  // Functions

  // Effects
  useEffect(() => {
    const { current } = ref;
    if (!current) return;

    if (autoScroll) current.scrollIntoView({ behavior: "smooth" });
  }, [ref, autoScroll]);

  return (
    <Container pb={2} position="absolute" mt="10px" width="full" ref={ref} zIndex={10}>
      <Options>
        {options.map((option, index) => (
          <DropdownItem
            key={index}
            onClick={() => setActiveHandler(option.value, option.label)}
          >
            <Text fontSize="h5" fontFamily="Avenir Light" fontWeight="light">
              {option?.label}
            </Text>
          </DropdownItem>
        ))}
      </Options>
    </Container>
  );
};

const Options = styled.ul`
  list-style-type: none;
  padding: 0;
  cursor: pointer;
  background-color: ${(props: any) => props.theme.colors.background};
  min-width: 160px;
  border: 1px solid ${(props: any) => props.theme.colors.neutral["100"]};
  width: 100%;
  max-height: 300px;
  overflow-y: auto;

  /* width */
  &::-webkit-scrollbar {
    cursor: pointer;
    width: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.neutral["10"]};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.text};
    margin-right: 1em;
  }
`;

const DropdownItem = styled.li`
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: ${(props: any) => props.theme.colors.neutral["10"]};
  }
`;

export default DropdownContent;
