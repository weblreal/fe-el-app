// Modules
import styled from "styled-components";
import { ILongText } from "./ILongText";
import Text from "../Text/Text";
import { typography } from "styled-system";

const LongText = styled(Text)<ILongText>`
  font-family: var(--AvenirLight);
  font-weight: 300;

  ${typography}
`;

export default LongText;
