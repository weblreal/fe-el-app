// Modules
import useClickedOutside from "../../hooks/useClickedOutside";
import useGetTheme from "../../hooks/useGetTheme";
import useKeyPress from "../../hooks/useKeyPress";
import { useState, useEffect } from "react";
import styled from "styled-components";
// Components
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import Icon from "../UI/Icon/Icon";
import Text from "../UI/Text/Text";
import Span from "../UI/Span/Span";
import Options, { Option, OptionScroller } from "./Options";

interface IOption {
  label: string;
  value: string;
}
type IDropdownProps = {
  options: IOption[];
  placeholder?: string;
  onChange?: (event: { target: { value: string; name: string } }) => void;
  error?: boolean;
  errorMessage?: string;
  name?: string;
  required?: boolean;
  label?: string;
  value?: any;
};

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  placeholder,
  error,
  onChange,
  name,
  errorMessage,
  label,
  required,
  value,
}) => {
  /**
   * Hooks
   */
  const theme = useGetTheme();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<number>(-1);
  const [shadowIndex, setShadowIndex] = useState<number>(-1);

  /**
   * Functions
   */
  const openHandler = () => {
    setOpen((prev) => !prev);
  };

  const optionHandler = (index: number) => {
    setIndex(index);
    
    const active = options?.[index];
    if (onChange && active) onChange({ target: { value: active?.value, name: name || "" } });

    openHandler();
  };

  const keyPressHandler = (event: KeyboardEvent) => {
    if (event.key === "ArrowDown") {
      setShadowIndex((prev) => (prev === options.length - 1 ? prev : prev + 1));
    } else if (event.key === "ArrowUp") {
      setShadowIndex((prev) => (prev <= 0 ? prev : prev - 1));
    }
  };

  /**
   * Custom Hooks
   */
  const { ref } = useClickedOutside({ trigger: open, callBack: () => setOpen(false) });
  useKeyPress({
    callBack: keyPressHandler,
    disable: !open,
    enter: () => optionHandler(shadowIndex),
    exit: () => setOpen(false),
  });

  /**
   * Variables
   */
  const dropdownBorder = error ? open ? `0px 0px 0px 1px #e95145` : `0px 0px 0px 1px #e95145` : open ? `0px 0px 0px 2px ${theme.colors.accent}` : "Solid Border";
  const textColor = error ? "#e95145" : theme.colors.text;

  /**
   * Effects
   */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "initial";
  }, [open]);

  return (
    <Container ref={ref} position="relative">
      {/* Label */}
      {!!label && (
        <Flex mb="8px">
          <Text color="text" fontSize="14px" width="fit-content">
            {label}
          </Text>
          {required && (
            <Text color="error" fontSize="14px" ml="2px">
              *
            </Text>
          )}
        </Flex>
      )}

      {/* Header */}
      <Header
        pointer
        position="relative"
        boxShadow={dropdownBorder}
        backgroundTheme
        borderRadius="4px"
        py="6px"
        px={12}
        zIndex={2}
        onClick={openHandler}
        tabIndex={0}
      >
        <Text
          mr="auto"
          fontFamily="Avenir Light"
          color={textColor}
          style={{ alignItems: "center", display: "flex" }}
          fontSize={14}
        >
          {index >= 0 && !!value && options[index]?.label}
          {(index < 0 || !value) && (<Span color={error ? "error" : "neutral.70"}>{placeholder}</Span>)}
        </Text>

        {error && (
          <Flex mr={1} alignItems="center">
            <Icon type="alert" size={14} color="#e95145" />
          </Flex>
        )}

        <Icon
          type={open ? "angle-up" : "angle-down"}
          size={24}
          color={textColor}
        />
      </Header>

      {/* Options */}
      {open && (
        <Options
          maxHeight={300}
          boxShadow="Solid Border"
          backgroundColor="background"
          mt="-1px"
          zIndex={3}
          position="absolute"
          width="full"
        >
          <ul>
            {options?.map((option: IOption, key: number) => (
              <Option
                key={key}
                active={options[shadowIndex]?.value === option.value}
                onClick={() => optionHandler(key)}
              >
                <OptionScroller
                  label={option.label}
                  active={options[shadowIndex]?.value === option.value}
                />
              </Option>
            ))}
          </ul>
        </Options>
      )}

      {/* Error Message */}
      {error && !!errorMessage && (
        <Text color="error" width="fit-content" fontSize="12px" mt="8px">
          {errorMessage}
        </Text>
      )}
    </Container>
  );
};

const Header = styled(Flex)``;

export default Dropdown;
