import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useClickedOutside from "../../../hooks/useClickedOutside";
// Components
import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import Icon from "../Icon/Icon";
import MotionContainer from "../MotionContainer/MotionContainer";
import Text from "../Text/Text";
import DropdownContent from "./DropdownContent";

interface DropdownProps {
  options: { value: string; label: string }[];
  onChange?: (event: any) => void;
  initialLabel?: string;
  autoScroll?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  initialLabel,
  autoScroll,
}) => {
  // Hooks
  const [isOpen, setIsOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState<string | null>(
    initialLabel || options?.[0]?.label || null
  );

  const { ref } = useClickedOutside({
    trigger: isOpen,
    callBack: () => setIsOpen(false),
  });

  useEffect(() => {
    if (initialLabel) setActiveLabel(initialLabel);
  }, [initialLabel]);

  // Handlers
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const setActiveHandler = (value: string, label: string) => {
    setActiveLabel(label);
    setIsOpen(false);

    if (onChange)
      onChange({
        target: {
          name: label,
          value: value,
        },
      });
  };

  const renderLabel = () => {
    return (
      <Text color="neutral.70" fontFamily="Avenir Light" fontWeight="light">
        {activeLabel}
      </Text>
    );
  };

  return (
    <DropdownContainer ref={ref}>
      <DropdownButton
        onClick={toggleDropdown}
        onBlur={() => setIsOpen(false)}
        alignItems="center"
        justifyContent="space-between"
        backgroundColor={isOpen ? "neutral.10" : "unset"}
      >
        <Text fontSize="h5" fontFamily="Avenir Light" fontWeight="light">
          {renderLabel()}
        </Text>
        <Icon type={isOpen ? "angle-up" : "angle-down"} size={24} />
      </DropdownButton>
      <AnimatePresence>
        {isOpen && (
          <MotionContainer
            variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
            transition={{ duration: 0 }}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <DropdownContent
              setActiveHandler={setActiveHandler}
              options={options}
              autoScroll={autoScroll}
            />
          </MotionContainer>
        )}
      </AnimatePresence>
    </DropdownContainer>
  );
};

const DropdownContainer = styled(Container)`
  position: relative;
  display: inline-block;

  white-space: nowrap;

  /* min-width: 160px; */
`;

const DropdownButton = styled(Flex)`
  max-height: 48px;
  min-width: 160px;
  padding: 12px 8px 12px 16px;
  font-size: 16px;
  border: 1px solid ${(props: any) => props.theme.colors.neutral["100"]};
  border-radius: 0;
  cursor: pointer;

  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
`;

export default Dropdown;
