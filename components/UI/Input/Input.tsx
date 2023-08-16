// Modules
import { useEffect, useRef, useState } from "react";
import { IInput } from "./IInput";
import styled from "styled-components";
// Components
import Column from "../Column/Column";
import Text from "../Text/Text";
import Row from "../Row/Row";
import Icon from "../Icon/Icon";

const Input = ({
  placeholder,
  disabled,
  success,
  error,
  errorMessage,
  label,
  name,
  icon,
  onChange,
  type,
  maxLength,
  minLength,
  required,
  onBlur,
  value,
  transparent,
  onIconClick,
  onFocus,
  onClick,
  clear = true,
}: IInput) => {
  // Hooks
  const [input, setInput] = useState("");
  const [focus, setFocus] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  // Handlers
  const onChangeHandler = (event: any) => {
    if (event) {
      const { target } = event;

      if (onChange) onChange(event);
      setInput(target.value);
    }
  };

  const onIconClickHandler = () => {
    if (ref?.current && onIconClick) {
      onIconClick(ref.current);
    }
  };

  const onFocusHandler = () => {
    const { current } = ref;
    current?.focus();
  };

  useEffect(() => {
    if (onFocus) onFocusHandler();
  }, [onFocus]);

  useEffect(() => {}, [input]);

  return (
    <Column position="relative">
      {/* Label */}
      {!!label && (
        <Row mb="8px">
          <Text color="#6d6e71" width="fit-content" fontSize="14px">
            {label}
          </Text>
          {required && (
            <Text color="#e95145" fontSize="14px" ml="2px">
              *
            </Text>
          )}
        </Row>
      )}

      {/* Input */}
      <Row position="relative">
        <StyledInput
          className={`
            ${success ? "success" : ""}
            ${error ? "error" : ""}
            ${focus && !error ? "focus" : ""}
            ${focus && error ? "error" : ""}
          `}
          onChange={onChangeHandler}
          onFocus={() => setFocus(true)}
          onBlur={(event: any) => {
            setFocus(false);
            if (onBlur) onBlur(event);
          }}
          onClick={onClick}
          name={name}
          type={type}
          autoComplete="off"
          maxLength={maxLength}
          minLength={minLength}
          required={required}
          value={!clear ? "" : value}
          placeholder={placeholder}
          disabled={disabled}
          transparent={transparent}
          ref={ref}
          withIcon={!!icon}
          style={{
            paddingRight: `${error ? "40px" : icon ? "40px" : "12px"}`,
          }}
        />

        {/* Icon */}
        <IconWrapper onClick={onIconClickHandler}>
          {!!icon && !success && !error && <Icon type={icon} size={15} />}
          {success && <Icon type={"check"} color="#6ba772" size={15} />}
          {error && <Icon type={"alert"} color="#e95145" size={15} />}
        </IconWrapper>
      </Row>

      {/* Error Message */}
      {error && errorMessage && (
        <Text color="#e95145" width="fit-content" fontSize="12px" mt="8px">
          {errorMessage}
        </Text>
      )}
    </Column>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  right: 14.5px;
  top: 0;

  display: flex;
  align-items: center;
  height: 100%;
  /* cursor: pointer; */
`;

const StyledInput = styled.input<{ transparent?: boolean; withIcon?: boolean }>`
  width: 100%;
  height: 36px;
  padding: 8px 0px;
  padding-left: 12px !important;
  border-radius: 4px;
  border: ${(props: any) => {
    const transparent = props.transparent;
    const theme = props.theme.name;

    if (transparent) {
      if (theme === "Light Theme") {
        return "solid 1px black";
      } else {
        return "solid 1px #bcbec0";
      }
    } else {
      if (theme === "Light Theme") {
        return "solid 1px black";
      } else {
        return "solid 1px #bcbec0";
      }
    }
  }};
  font-family: var(--AvenirRoman);
  font-size: 14px;
  line-height: 1.45;
  outline: 0;
  resize: none;
  background-color: ${(props: any) => {
    const transparent = props.transparent;
    return transparent ? "transparent" : "initial";
  }};
  color: ${(props: any) => {
    const transparent = props.transparent;
    const theme = props.theme.name;

    if (transparent) {
      if (theme === "Light Theme") {
        return "black";
      } else {
        return "white";
      }
    } else {
      return props.theme.colors.text;
    }
  }};

  &[type="number"] {
    appearance: textfield;
  }

  &.error {
    border-color: #e95145;
  }

  &.success {
    border-color: #6ba772;
  }

  &.focus {
    box-shadow: 0 2px 8px 0 rgba(92, 141, 184, 0.25);
    border: solid 2px #1890ff;
    margin-left: -1px;
    margin-top: -1px;
  }

  &[disabled] {
    background-color: #bcbec0;
  }
`;

export default Input;
