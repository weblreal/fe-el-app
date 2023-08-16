import styled from "styled-components";
import { flexbox } from "styled-system";
import Container from "../Container/Container";
import { IFlex } from "../Flex/IFlex";

interface IColumn extends IFlex {
  /**
   * Determines whether to reverse the direction of Column Items.
   */
  reversed?: boolean;
}

const Column = styled(Container)<IColumn>`
  ${({reversed}) => `flex-direction: ${reversed ? "column-reverse" : "column"};`}
  display: flex;
  ${flexbox}
`;

export default Column;
