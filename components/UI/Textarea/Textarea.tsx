// Modules
import { useEffect, useRef, useState } from "react";
import { ITextarea } from "./ITextarea";
import styled from "styled-components";
// Components
import Column from "../Column/Column";
import Text from "../Text/Text";
import Row from "../Row/Row";
import Icon from "../Icon/Icon";

const Textarea = ({
  disabled,
  error,
  errorMessage,
  icon,
  label,
  maxLength,
  minLength,
  name,
  onBlur,
  onChange,
  onIconClick,
  placeholder,
  required,
  rows,
  showCharsCount,
  success,
  transparent,
  type,
  value,
}: ITextarea) => {
  // Hooks
  const [input, setInput] = useState("");
  const [currentCharsCount, setCurrentCharsCount] = useState<number>(0);
  const [focus, setFocus] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  // Handlers
  const onChangeHandler = (event: any) => {
    if (event) {
      const { value } = event?.target;

      if (onChange) onChange(event);
      setCurrentCharsCount(value?.length)
      setInput(value);
    }
  };

  const onIconClickHandler = () => {
    if (ref?.current && onIconClick) {
      onIconClick(ref.current);
    }
  };

  // Effects
  useEffect(() => {
    // RESET TO 0 WHEN SUBMITTED
    if (showCharsCount && value === "") setCurrentCharsCount(0)
  }, [value, showCharsCount]);

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
          autoComplete="off"
          className={`
            ${success ? "success" : ""}
            ${error ? "error" : ""}
            ${focus && !error ? "focus" : ""}
            ${focus && error ? "error" : ""}
          `}
          disabled={disabled}
          name={name}
          onBlur={(event: any) => {
            setFocus(false);
            if (onBlur) onBlur(event);
          }}
          onChange={onChangeHandler}
          onFocus={() => setFocus(true)}
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder}
          required={required}
          rows={rows || 1}
          style={{
            paddingRight: `${error ? "40px" : "12px"}`
          }}
          transparent={transparent}
          value={value}
          withIcon={!!icon}
        />

        {/* Icon */}
        <IconWrapper onClick={onIconClickHandler}>
          {!!icon && !success && !error && <Icon type={icon} size={15} />}
          {success && <Icon type={"check"} color="#6ba772" size={15} />}
          {error && <Icon type={"alert"} color="#e95145" size={15} />}
        </IconWrapper>
      </Row>

      {(showCharsCount && maxLength) && (
        <Text
          fontFamily="Avenir Bold"
          fontSize="12px"
          mt="8px"
          width="fit-content"
        >
          {`${currentCharsCount} of ${maxLength} characters`}
        </Text>
      )}

      {/* Error Message */}
      {error && errorMessage && (
        <Text
          color="#e95145"
          fontSize="12px"
          mt="8px"
          width="fit-content"
        >
          {errorMessage}
        </Text>
      )}
    </Column>
  );
};

const IconWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  position: absolute;
  right: 14.5px;
  top: 0;
`;

const StyledInput = styled.textarea<{ transparent?: boolean; withIcon?: boolean }>`
  background-color: ${(props: any) => {
    const transparent = props.transparent;
    return transparent ? "transparent" : "initial";
  }};
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
  border-radius: 4px;
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
  font-family: var(--AvenirRoman);
  font-size: 14px;
  line-height: 1.45;
  outline: 0;
  overflow: hidden;
  padding: 8px 0px;
  padding-left: 12px !important;
  resize: vertical;
  width: 100%;

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

export default Textarea;
