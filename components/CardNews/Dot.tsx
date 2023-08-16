import styled from "styled-components";

const Dot = styled.span<{ active?: boolean }>`
  display: block;
  width: ${(props) => (props.active ? "26px" : "13px")};
  height: 13px;
  border-radius: 13px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.text : "transparent"};
  border: ${(props) => props.theme.borders.thin};
  border-color: ${(props) => props.theme.colors.text};
  cursor: pointer;

  transition: 500ms ease;
`;

export default Dot;
