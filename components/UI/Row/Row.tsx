import styled from "styled-components";
import { flexbox } from "styled-system";
import Container from "../Container/Container";
import { IFlex } from "../Flex/IFlex";

interface IRow extends IFlex {
  /**
   * Determines whether to reverse the direction of Row Items.
   */
  reversed?: boolean;
}

const Row = styled(Container)<IRow>`
  display: flex;
  ${({reversed}) => `flex-direction: ${reversed ? "row-reverse" : "row"};`}
  ${flexbox}
`;

export default Row;
