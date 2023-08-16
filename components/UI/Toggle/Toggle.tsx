import { ChangeEvent } from "react";
import styled from "styled-components";
import { IToggle } from "./IToggle";

const Toggle = ({ checked, onChange, theme }: IToggle) => {
  // Functions
  const onChangeHandler = (event: ChangeEvent) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Wrapper className="tappable">
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChangeHandler} />
        <span className="slider round"></span>
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.span`
  user-select: none;

  .switch {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 19px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 17px;
    width: 17px;
    left: 1px;
    bottom: 1px;
    background-color: black;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${(props) => props.theme.colors.success};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${(props) => props.theme.colors.success};
  }

  input:checked + .slider:before {
    transform: translateX(13px);
    background-color: white;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 32px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default Toggle;
