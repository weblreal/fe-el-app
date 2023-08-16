// Modules
import { useEffect, useRef, useState, useCallback } from "react";
import { ISelect } from "./ISelect";
import styled from "styled-components";
// Components
import Column from "../Column/Column";
import Text from "../Text/Text";
import Row from "../Row/Row";
import Icon from "../Icon/Icon";

const useKeyPress = (targetKey: string, ref: any) => {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler =(event: KeyboardEvent) => {
      event.preventDefault();

      if (event.key === targetKey) {
        setKeyPressed(true);
      }
    }

    const upHandler = (event: KeyboardEvent) => {
      event.preventDefault();
      
      if (event.key === targetKey) {
        setKeyPressed(false);
      }
    };

    const dropdownRef = ref?.current;

    if(!dropdownRef) return;

    dropdownRef?.addEventListener("keydown", downHandler);
    dropdownRef?.addEventListener("keyup", upHandler);

    return () => {
      dropdownRef?.removeEventListener("keydown", downHandler);
      dropdownRef?.removeEventListener("keyup", upHandler);
    };
  }, [targetKey, ref]);

  return keyPressed;
};

const Select = ({
  disabled,
  error,
  errorMessage,
  label,
  maxLength,
  minLength,
  name,
  onBlur,
  onChange,
  options,
  placeholder,
  required,
  success,
  transparent,
  type,
  value
}: ISelect) => {
  const optionRef = useRef(null);
  const ref = useRef<HTMLInputElement>(null);
  const [cursor, setCursor] = useState(0);
  const [focus, setFocus] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const enterPress = useKeyPress("Enter", ref);
  const downPress = useKeyPress("ArrowDown", ref);
  const upPress = useKeyPress("ArrowUp", ref);

  // Handlers
  const onChangeHandler = useCallback((event: any) => {
    if (event && onChange) onChange({ name, value: event })
    setShowOptions((prev: boolean) => !prev)
  }, [onChange, name]);

  useEffect(() => {
    if (options?.length && downPress && showOptions) {
      setCursor((prevState) =>
        prevState < options?.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress, options?.length, showOptions]);

  useEffect(() => {
    if (options?.length && upPress && showOptions) {
      setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress, options?.length, showOptions]);

  useEffect(() => {
    if (options?.length && enterPress && showOptions) {
      onChangeHandler(options[cursor]?.value);
    }
  }, [cursor, enterPress, showOptions, options, onChangeHandler]);

  return (
    <Column
      color="auto"
      position="relative"
    >
      {/* Label */}
      {!!label && (
        <Row mb="8px">
          <Text
            color="#6d6e71"
            fontSize="14px"
            width="fit-content"
          >
            {label}
          </Text>
          {required && (
            <Text
              color="#e95145"
              fontSize="14px"
              ml="2px"
            >
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
          maxLength={maxLength}
          minLength={minLength}
          name={name}
          onBlur={(event: any) => {
            setFocus(false);
						setTimeout(() => {
							setShowOptions(false);
						}, 250)
            if (onBlur) onBlur(event);
          }}
          onClick={() => setShowOptions((prev: boolean) => !prev)}
          onFocus={() => setFocus(true)}
          placeholder={placeholder}
          readOnly
          ref={ref}
          required={required}
          type={type}
          transparent={transparent}
          value={value}
        />

        {/* Icon */}
        <IconWrapper onClick={() => setShowOptions((prev: boolean) => !prev)}>
          {success && <Icon type={"check"} color="#6ba772" size={15} />}
          {error && <Icon type={"alert"} color="#e95145" size={15} />}
          <Icon color={error ? "#e95145" : "auto"} type={showOptions ? "angle-up" : "angle-down"} size={24} />
        </IconWrapper>
      </Row>

			{(options && showOptions) && (
				<OptionWrapper ref={optionRef} label={label}>
					{options?.map((option: any, key: number) => (
						<Text
              color="auto"
							key={key}
							onClick={() => onChangeHandler(option?.value)}
							onMouseEnter={() => setCursor(key)}
							p="4px 12px"
              backgroundColor={
								options[cursor]?.label === option?.label
									? { background: "#1890ff" }
									: { background: "background" }
							}
						>
							{ option?.label }
						</Text>
					))}
				</OptionWrapper>
			)}

      {/* Error Message */}
      {error && !!errorMessage && (
        <Text 
          color="#e95145" 
          width="fit-content" 
          fontSize="12px"
          mt="8px"
        >
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
  column-gap: 10px;
  align-items: center;
  height: 100%;
`;

const OptionWrapper = styled.div<{ label?: any }>`
	cursor: pointer;
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
	max-height: 300px;
	overflow: auto;
	position: absolute;
	top: ${(props) => props.label ? "61px" : "37px"};
	width: 100%;
	z-index: 100;
	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 50px;
	}
`;

const StyledInput = styled.input<{ transparent?: boolean }>`
  width: 100%;
  min-height: 36px;
  padding: 8px 12px;
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
  font-family: var(--AvenirLight);
  font-size: 14px;
  line-height: 1.45;
  outline: 0;
  position: relative;
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

export default Select;
