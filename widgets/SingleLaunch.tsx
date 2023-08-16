import AppConfig from "../logic/configs/AppConfig";
import { ISingleLaunch } from "../models/widgets/ISingleLaunch";
import Link from "next/link";
import dark from "./../themes/dark";
import { ICta } from "../models/components/ICta";
// Components
import Button from "../components/UI/Button/Button";
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import Icon from "../components/UI/Icon/Icon";
import Picture from "../components/UI/Picture/Picture";
import Row from "../components/UI/Row/Row";
import styled from "styled-components";
import Text from "../components/UI/Text/Text";
import { GradientLinear } from "../components/Gradient/Gradient";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import { useRouter } from "next/router";

const { html } = AppConfig;
const SingleLaunch = ({
  bgImage,
  title,
  description,
  cta,
  logo,
}: ISingleLaunch) => {
  const router = useRouter();
  const isOTP = router?.asPath?.includes("operations-talent-program");

  const getVariant = (key: number) => {
    const length = cta?.length || 0;
    const variant = length === 1 ? "secondary" : "primary";

    return variant;
  };

  return (
    <Container
      minHeight={{
        _: "427px",
        desktopS: "468px",
      }}
      overflow="hidden"
      margin="0 auto"
      maxWidth="screen"
      position="relative"
      px={{
        _: "16px",
        tablet: "0px",
      }}
      pt="70px"
      pb={{ _: "95px", desktopS: "120px" }}
      width="full"
    >
      {bgImage && (
        <PictureWrapper>
          <Container zIndex={1}>
            <GradientLinear />
          </Container>
          <Picture
            alt={title || "Widget image/logo"}
            objectFit="cover"
            src={bgImage[0]}
          />
        </PictureWrapper>
      )}
      {logo && (
        <LogoWrapper>
          <Picture
            alt={title || "Widget image/logo"}
            objectFit="cover"
            src={logo}
          />
        </LogoWrapper>
      )}
      <Flex
        alignItems="center"
        flexDirection="column"
        margin="0 auto"
        maxWidth="640px"
        position="relative"
        width={{
          _: "auto",
          tablet: "640px",
        }}
        zIndex={5}
      >
        {!logo && (
          <Row>
            <Flex>
              <Icon color="white" size={12} type="essilor-dot" />
            </Flex>
            <Flex ml="5px">
              <Icon color="white" size={12} type="essilor-dot" />
            </Flex>
          </Row>
        )}
        <Text
          color="#ffffff"
          fontFamily="Avenir Black"
          fontSize={{
            _: "40px",
            tablet: "48px",
          }}
          fontWeight="bolder"
          pb="16px"
          pt={`${logo ? "90px" : "33px"}`}
          textAlign="center"
        >
          {html(title)}
        </Text>
        <Text
          color="#ffffff"
          fontFamily="Avenir Light"
          fontSize={{
            _: "16px",
            tablet: "24px",
          }}
          fontWeight="light"
          pb="32px"
          textAlign="center"
        >
          {html(description)}
        </Text>
        {cta && (
          <Flex
            flexDirection={{
              _: "column",
              tablet: "row",
            }}
            justifyContent="center"
            alignItems="center"
          >
            {cta?.map((cta: ICta, key: number) => (
              <Link
                href={cta?.url || "#"}
                key={key}
                target={cta.isExternal ? "_blank" : "_parent"}
              >
                <Button
                  minWidth="140px"
                  variant={getVariant(key)}
                  theme={dark}
                  mx={{
                    _: 0,
                    tablet: "12px",
                  }}
                  my={{
                    _: "12px",
                    tablet: 0,
                  }}
                >
                  <LinkAngle
                    fontFamily={{
                      _: isOTP ? "Avenir Light" : "Avenir Regular",
                    }}
                    fontSize={{
                      _: isOTP ? "16px" : "18px",
                    }}
                    gap={0}
                    color="black"
                    label={cta?.label}
                    url="#"
                    textVerticalAlign="baseline"
                    isExternal={cta?.isExternal}
                  />
                </Button>
              </Link>
            ))}
          </Flex>
        )}
      </Flex>
    </Container>
  );
};
const PictureWrapper = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  img {
    background-size: cover;
  }
`;

const LogoWrapper = styled("div")`
  height: 108px;
  position: absolute;
  top: 0;
  width: 100%;
  img {
    background-size: cover;
    height: 100%;
    margin: 0 auto;
    width: 94px;
  }
`;

export default SingleLaunch;
