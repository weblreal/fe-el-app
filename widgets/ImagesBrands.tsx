import AppConfig from "../logic/configs/AppConfig";
import { IBrand, IImagesBrands } from "../models/widgets/IImagesBrands";
import useResponsiveBackground from "../hooks/useResponsiveBackground";
// Components
import Flex from "../components/UI/Flex/Flex";
import Column from "../components/UI/Column/Column";
import Text from "../components/UI/Text/Text";
import Icon from "../components/UI/Icon/Icon";
import Hidden from "../components/UI/Hidden/Hidden";
import Picture from "../components/UI/Picture/Picture";
import styled from "styled-components";
import Row from "../components/UI/Row/Row";
import Link from "next/link";
import Grid from "../components/UI/Grid/Grid";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import Container from "../components/UI/Container/Container";

const ImagesBrands = ({ title, brands }: IImagesBrands) => {
  // Hooks
  const [_, setBg] = useResponsiveBackground([]);

  // Functions
  const renderBrands = () => {
    return brands?.map((brand: IBrand, key: number) => {
      return (
        <Brand key={key} justifyContent={{ _: "end", tablet: "start" }}>
          {setBg(brand.backgroundImage) && (
            <Link prefetch={false} href={brand?.cta?.url || "#"}>
              <Flex
                width="full"
                height={{ _: "280px", desktopS: "400px", desktopXL: "500px" }}
              >
                <Picture
                  src={setBg(brand.backgroundImage) || ""}
                  alt={brand?.title || setBg(brand.backgroundImage) || ""}
                />
              </Flex>
            </Link>
          )}
          <Hidden till="tablet">
            <Column mt="32px" height="full" justifyContent="space-between">
              <Text
                fontSize="h2"
                fontFamily="Avenir Bold"
                fontWeight="bolder"
                mb="8px"
              >
                {AppConfig.html(brand?.title)}
              </Text>

              {brand?.cta && (
                <LinkAngle
                  label={brand?.cta?.label}
                  url={brand?.cta?.url}
                  gap={0}
                  fontFamily="Avenir Light"
                  fontWeight="light"
                />
              )}
            </Column>
          </Hidden>
          <Hidden from="tablet">
            <Link prefetch={false} href={brand?.cta?.url || "#"}>
              <Gradient />
            </Link>
            <Column position="absolute" margin="30px 19px">
              <Flex mb="21.3px">
                <Container mr="4.5px">
                  <Icon type="essilor-dot" size={8} color="#fff" />
                </Container>
                <Container>
                  <Icon type="essilor-dot" size={8} color="#fff" />
                </Container>
              </Flex>
              <Text
                fontSize="h3"
                fontFamily="Avenir Roman"
                color="white"
                backgroundColor="transparent"
                mb="8px"
              >
                {AppConfig.html(brand?.title)}
              </Text>
              {brand?.cta && (
                <Row>
                  <LinkAngle
                    label={brand?.cta?.label}
                    url={brand?.cta?.url}
                    color="white"
                    gap={0}
                    fontFamily="Avenir Bold"
                  />
                </Row>
              )}
            </Column>
          </Hidden>
        </Brand>
      );
    });
  };

  return (
    <Column
      m="auto"
      width="full"
      maxWidth="screen"
      backgroundColor="background"
      p={{ _: "0px", tablet: "40px 32px", desktopS: "80px 64px" }}
    >
      <Flex
        width="full"
        p={{ _: "24px 16px", tablet: "0px" }}
        justifyContent={{ _: "unset", tablet: "center" }}
      >
        <Text
          fontSize={{ _: "h3", tablet: "h2" }}
          fontFamily="Avenir Medium"
          fontWeight={500}
          mb={{ _: "0px", tablet: "56px" }}
        >
          {AppConfig.html(title)}
        </Text>
      </Flex>
      <Flex size="full" flexDirection={{ _: "column", tablet: "row" }}>
        {renderBrands()}
      </Flex>
    </Column>
  );
};

const Brand = styled(Column)`
  width: 100%;
  position: relative;

  &:not(:last-of-type) {
    margin-right: 16px;
  }
`;

const Gradient = styled(Grid)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 100%);
`;

export default ImagesBrands;
