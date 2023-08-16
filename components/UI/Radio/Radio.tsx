// Modules
import { useEffect, useRef, useState } from "react";
import { IRadio } from "./IRadio";
import styled from "styled-components";
// Components
import Column from "../Column/Column";
import Text from "../Text/Text";
import Row from "../Row/Row";
import { style } from "styled-system";

const Radio = ({
  disabled,
  error,
  errorMessage,
  label,
  name,
  onBlur,
  onChange,
  options,
  required,
  success,
  transparent,
  type,
  value,
  labelSize,
  checked,
  radioButtonSize,
}: IRadio) => {
  // Hooks
  const [focus, setFocus] = useState(false);
  // Handlers
  const onChangeHandler = (event: any) => {
    if (event && onChange) onChange({ name, value: event?.target?.id });
  };

  return (
    <Column my={1} position="relative">
      {/* Label */}
      {!!label && (
        <Row mb="8px">
          <Text color="auto" width="fit-content" fontSize="18px">
            {label}
          </Text>
          {required && (
            <Text color="#e95145" fontSize="14px" ml="2px">
              *
            </Text>
          )}
        </Row>
      )}

      {/* Radio Group */}
      {options && (
        <OptionWrapper>
          {options?.map((option: any, key: number) => (
            <RadioWrapper key={key}>
              <StyledInput
                autoComplete="off"
                disabled={disabled}
                id={option?.value}
                name={name}
                onChange={onChangeHandler}
                onFocus={() => setFocus(true)}
                required={required}
                transparent={transparent}
                type={type}
                value={value}
                checked={checked}
                radioButtonSize={radioButtonSize}
              />
              <label
                htmlFor={option?.value}
                style={{
                  cursor: "pointer",
                  fontSize: `${labelSize || "14px"}`,
                  paddingLeft: "8px",
                }}
              >
                {option?.label}
              </label>
            </RadioWrapper>
          ))}
        </OptionWrapper>
      )}

      {/* Error Message */}
      {error && !!errorMessage && (
        <Text color="#e95145" width="fit-content" fontSize="12px">
          {errorMessage}
        </Text>
      )}
    </Column>
  );
};

const OptionWrapper = styled.div`
  background: auto;
`;

const RadioWrapper = styled.div`
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
  display: flex;
  align-items: center;
  padding: 7px 0;
`;

const StyledInput = styled.input<
  {
    transparent?: boolean;
    radioButtonSize?: number;
  } & React.InputHTMLAttributes<HTMLInputElement>
>`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: ${(props: any) => props.radioButtonSize + "px" || "20px"};
  height: ${(props: any) => props.radioButtonSize + "px" || "20px"};
  border-radius: 50%;
  background-color: ${(props: any) => (props.checked ? "gray" : "transparent")};

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
  cursor: pointer;
  min-height: 16px;
  min-width: 16px;

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

export default Radio;
