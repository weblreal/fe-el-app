// Modules
import { useState } from "react";
import styled from "styled-components";
import { typography, TypographyProps } from "styled-system";
import { IInput, ISearchInput } from "./ISearchInput";

// Components
import Container from "../../UI/Container/Container";
import LongText from "../../UI/LongText/LongText";
import Icon from "../../UI/Icon/Icon";
import Grid from "../../UI/Grid/Grid";
import Hidden from "../../UI/Hidden/Hidden";

const SearchInput: React.FC<ISearchInput> = ({
  label1,
  placeholder,
  onChange,
  onSubmit,
  onCancel,
  defaultValue,
}) => {
  // Hooks
  const [input, setInput] = useState(defaultValue);

  // Functions
  const onChangeHandler = (event: any) => {
    if (onChange) onChange(event);
    setInput(event.target.value);
  };

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    if (onSubmit) onSubmit(input);

    // setInput("");
  };

  const onCancelHandler = () => {
    setInput("");

    if (onCancel) onCancel();
  };

  return (
    <Container
      pt={{ _: 2, desktopS: 5 }}
      pb={{ _: 2, desktopS: 4 }}
      px={2}
      maxWidth="screen2"
      m="auto"
    >
      <form onSubmit={onSubmitHandler}>
        {/* Label */}
        {label1 && (
          <LongText fontSize={["18px", "20px"]} mb={1}>
            {label1}
          </LongText>
        )}

        {/* Input */}
        <Input
          placeholder={placeholder}
          onChange={onChangeHandler}
          onCancel={onCancelHandler}
          onSubmit={onSubmitHandler}
          value={input || ""}
        />
      </form>
    </Container>
  );
};

const Input = ({
  placeholder,
  onChange,
  onCancel,
  value,
  onSubmit,
}: IInput) => {
  return (
    <Container position="relative">
      <Container pr={{ _: 30, desktopS: 60 }}>
        <TextBox
          type="text"
          fontSize={{ _: 24, desktopS: 32 }}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          autoFocus
        />
      </Container>

      <Hidden till="desktopS">
        <Icons backgroundTheme gridGap={12} gridTemplateColumns="auto auto">
          <Container onClick={onCancel}>
            <Icon type="cancel" size={18} />
          </Container>

          <Container onClick={onSubmit}>
            <Icon type="search" size={24} />
          </Container>
        </Icons>
      </Hidden>

      <Hidden from="desktopS">
        <Icons backgroundTheme gridGap={12} gridTemplateColumns="auto">
          <Container onClick={onCancel}>
            <Icon type="cancel" size={18} />
          </Container>
        </Icons>
      </Hidden>

      <Line backgroundColor="neutral.20" />
    </Container>
  );
};

const Line = styled(Container)`
  height: 1px;
  width: 100%;
  zindex: 1;
`;

const Icons = styled(Grid)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;

  align-items: center;
  height: 80%;
  z-index: 0;
`;

const TextBox = styled.input<TypographyProps>`
  ${typography}

  font-family: var(--AvenirMedium);
  width: 100%;

  outline: none;
  appearance: none;
  background: transparent;
  color: ${(props) => props.theme.colors.text};

  &::placeholder {
    color: ${(props) => props.theme.colors.neutral[20]};
  }
`;

export default SearchInput;
