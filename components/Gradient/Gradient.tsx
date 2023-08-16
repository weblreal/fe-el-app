import styled from "styled-components";
import Container from "../UI/Container/Container";

const Gradient = styled(Container)`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.3) 100%, #000 0%);
`;

export const GradientLinear = styled(Container)`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 100%),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1));
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
`;

export default Gradient;
