// Modules
import { useState } from "react";
import { ICheckbox } from "./ICheckbox";
import styled from "styled-components";
// Components
import Column from "../Column/Column";
import Text from "../Text/Text";
import Row from "../Row/Row";

const Checkbox = ({
  disabled,
  error,
  errorMessage,
  label,
  name,
  onChange,
  required,
  success,
  transparent,
  type = "checkbox",
  value,
  fonts,
}: ICheckbox) => {
  // Hooks
  const [focus, setFocus] = useState(false);

  // Handlers
  const onChangeHandler = (event: any) => {
    if (event && onChange) onChange({ name, value: event?.target?.checked });
  };

  return (
    <Column position="relative">
      {!!label && (
        <CheckboxWrapper>
          <LabelWrapper>
            <StyledInput
              autoComplete="off"
              checked={value || false}
              className={`
            ${success ? "success" : ""}
            ${error ? "error" : ""}
            ${focus && !error ? "focus" : ""}
            ${focus && error ? "error" : ""}
            `}
              disabled={disabled}
              name={name}
              onChange={onChangeHandler}
              onFocus={() => setFocus(true)}
              required={required}
              transparent={transparent}
              type={type}
            />
            <Row pl={1}>
              <Text fontSize="14px" width="fit-content" {...fonts}>
                {label}
              </Text>
              {required && (
                <Text color="#e95145" fontSize="14px" ml="2px" {...fonts}>
                  *
                </Text>
              )}
            </Row>
          </LabelWrapper>
        </CheckboxWrapper>
      )}

      {/* Error Message */}
      {error && !!errorMessage && (
        <Text color="#e95145" fontSize="12px" pt={1} width="fit-content">
          {errorMessage}
        </Text>
      )}
    </Column>
  );
};

const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckboxWrapper = styled.div`
  display: flex;
`;

const StyledInput = styled.input<{ transparent?: boolean }>`
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
    /* margin-left: -1px;
    margin-top: -1px; */
  }

  &[disabled] {
    background-color: #bcbec0;
  }
`;

export default Checkbox;
