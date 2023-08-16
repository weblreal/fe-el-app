// Modules
import styled from "styled-components";

// Components
import Container from "../UI/Container/Container";

type ILoadingProps = {
  color?: string;
};

const Loading: React.FC<ILoadingProps> = ({ color }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return <Circle color={color} />;
};

const Circle = styled(Container)<{ color?: string }>`
  pointer-events: none;
  width: 14px;
  height: 14px;
  margin: auto;
  border: solid 2px ${(props) => props.color || props.theme.colors.text};
  border-radius: 50%;
  border-right-color: transparent;
  border-bottom-color: transparent;
  -webkit-transition: all 0.5s ease-in;
  -webkit-animation-name: rotate;
  -webkit-animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;

  transition: all 0.5s ease-in;
  animation-name: rotate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  pointer-events: none;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
export default Loading;
