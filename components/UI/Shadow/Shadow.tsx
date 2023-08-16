import styled from "styled-components";
import { shadow, ShadowProps } from "styled-system";
import Container from "../Container/Container";

const Shadow = styled(Container)<ShadowProps>`
  ${shadow}
`;
export default Shadow;
