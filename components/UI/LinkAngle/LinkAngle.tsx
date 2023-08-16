// Modules
import Link from "next/link";
import styled from "styled-components";
import { ICta } from "../../../models/components/ICta";
import { IIconType } from "../../../models/components/IIcon";
// Components
import Loading from "../../Loading/Loading";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import Icon from "../Icon/Icon";
import Span from "../Span/Span";

interface ILinkAngle extends ICta {
  fontSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "regular" | any;
  fontFamily?: string | {};
  fontWeight?: "bold" | "normal" | "light" | "bolder" | any;
  color?: string;
  gap?: string | number | {};
  iconType?: IIconType;
  reverse?: boolean;
  iconVerticalAlign?: IIconVerticalAlign;
  textVerticalAlign?: IIconVerticalAlign;
  loading?: boolean;
  isExternal?: boolean;
}

type IIconVerticalAlign =
  | "middle"
  | "sub"
  | "bottom"
  | "baseline"
  | "revert"
  | "sub"
  | "super"
  | "text-bottom"
  | "text-top"
  | "top";

const LinkAngle = ({
  label,
  url,
  fontSize = "h5",
  fontFamily = "Avenir Regular",
  fontWeight = "normal",
  color,
  gap = "16px",
  iconType = "angle-right",
  reverse,
  iconVerticalAlign = "middle",
  textVerticalAlign,
  loading,
  isExternal,
}: ILinkAngle) => {
  // Handlers
  const renderLink = () => {
    return (
      <Button
        variant="link"
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        textAlign="left"
      >
        <Span verticalAlign={textVerticalAlign}>
          {reverse && (
            <SpanIcon
              mr={gap}
              height={24}
              verticalAlign={loading ? "middle" : iconVerticalAlign}
            >
              {!loading && <Icon type={iconType} size={24} color={color} />}
              {loading && (
                <Flex alignItems="center" maxHeight={14} mr={gap}>
                  <Loading color={color} />
                </Flex>
              )}
            </SpanIcon>
          )}
          <Span verticalAlign={textVerticalAlign}>{label}</Span>
          {!reverse && (
            <SpanIcon
              ml={gap}
              height={24}
              verticalAlign={loading ? "middle" : iconVerticalAlign}
            >
              {!loading && <Icon type={iconType} size={24} color={color} />}
              {loading && (
                <Flex alignItems="center" maxHeight={14} mr={gap}>
                  <Loading color={color} />
                </Flex>
              )}
            </SpanIcon>
          )}
        </Span>
      </Button>
    );
  };

  return url !== "#" ? (
    <LinkContainer href={url || "#"} target={isExternal ? "_blank" : ""}>
      {renderLink()}
    </LinkContainer>
  ) : (
    <NoLinkContainer>{renderLink()}</NoLinkContainer>
  );
};

const LinkContainer = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
`;

const NoLinkContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
`;

const SpanIcon = styled(Container)`
  display: inline-flex;
  align-items: center;
`;

export default LinkAngle;
