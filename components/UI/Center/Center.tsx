import styled from "styled-components";
import { flexbox, space, layout, color, position, border } from "styled-system";
import Flex from "../Flex/Flex";
import { IFlex } from "../Flex/IFlex";

const Center = styled(Flex)<IFlex>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${flexbox}
  ${space}
  ${layout}
  ${color}
  ${position}
  ${border}
`;

export default Center;
