import styled from "styled-components";
import Text from "../UI/Text/Text";

interface IProps {
  lineCountM?: number;
  lineCountD?: number;
}

const TextEllipsis = styled(Text)<IProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: ${(props: IProps) => props.lineCountM};
  -webkit-line-clamp: ${(props: IProps) => props.lineCountM};
  -webkit-box-orient: vertical;
  max-height: ${(props: IProps) => `${(props.lineCountM || 0) + 0.9}em`};

  p::after {
    content: "";
    white-space: pre-line;
  }

  @media (min-width: 834px) {
    line-clamp: ${(props: IProps) => props.lineCountD};
    -webkit-line-clamp: ${(props: IProps) => props.lineCountD};
    max-height: ${(props: IProps) => `${(props.lineCountD || 0) + 0.9}em`};
  }
`;

TextEllipsis.defaultProps = {
  lineCountD: 2,
  lineCountM: 3,
};

export default TextEllipsis;
