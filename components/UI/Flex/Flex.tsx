import styled from "styled-components";
import { flexbox } from "styled-system";
import { IFlex } from "./IFlex";
import Container from "../Container/Container";

const Flex = styled(Container)<IFlex>`
  display: flex;
  ${flexbox}
`;

export default Flex;
