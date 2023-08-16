import AppConfig from "../logic/configs/AppConfig";
import { IDiscoverPortfolio } from "../models/widgets/IDiscoverPortfolio";
import useResponsiveBackground from "../hooks/useResponsiveBackground";
// Components
import Center from "../components/UI/Center/Center";
import Column from "../components/UI/Column/Column";
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import Icon from "../components/UI/Icon/Icon";
import Picture from "../components/UI/Picture/Picture";
import Row from "../components/UI/Row/Row";
import Text from "../components/UI/Text/Text";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import { GradientLinear } from "../components/Gradient/Gradient";

const DiscoverPortfolio = ({ header, content }: IDiscoverPortfolio) => {
  const { html } = AppConfig;
  // Hooks
  const [_, setBG] = useResponsiveBackground([]);

  return (
    <Flex
      flexDirection="column"
      maxWidth="screen"
      mx="auto"
      position="relative"
      width="full"
    >
      {header && (
        <Row
          justifyContent="center"
          pb={{ _: 3, tablet: 4 }}
          pt={{ _: 5, tablet: "96px" }}
        >
          <Text
            fontFamily="Avenir Medium"
            fontSize={{ _: "28px", tablet: "32px" }}
            fontWeight="500"
            px={2}
            textAlign="center"
          >
            {html(header)}
          </Text>
        </Row>
      )}

      <Flex
        backgroundColor="black"
        flexDirection={{ _: "column", tablet: "row" }}
        height={{ _: "960px", tablet: "480px", desktopXL: "680px" }}
        justifyContent="center"
        maxWidth="screen"
        overflow="hidden"
        position="relative"
        size="full"
      >
        {content &&
          content?.map((data: any, key: number) => (
            <Container
              key={key}
              position={"relative"}
              height={{ _: 287, mobile: 487, tablet: "unset" }}
              width={{ _: "unset", tablet: "full" }}
            >
              {data?.bgImage && setBG(data?.bgImage) && (
                <Picture
                  alt={data?.title}
                  objectFit="cover"
                  src={setBG(data?.bgImage) || ""}
                  zIndex={0}
                />
              )}
              <Container zIndex={1}>
                <GradientLinear />
              </Container>
              <Center
                flexDirection="column"
                position="absolute"
                bottom={{ _: "40px", tablet: "75px" }}
                width="full"
                px={2}
              >
                <Column
                  alignItems="center"
                  flexDirection="row"
                  mb={{ _: "23.3px", tablet: "34.7px" }}
                >
                  <Flex>
                    <Icon color="white" size={13.3} type="essilor-dot" />
                  </Flex>
                  <Flex ml="5.41px">
                    <Icon color="white" size={13.3} type="essilor-dot" />
                  </Flex>
                </Column>
                <Text
                  color={"#ffffff"}
                  fontFamily={{ _: "Avenir Black", tablet: "Avenir Bold" }}
                  fontSize="32px"
                  fontWeight="bolder"
                  letterSpacing={"0.32px"}
                  textAlign="center"
                  lineHeight="1.31"
                >
                  {html(data.title)}
                </Text>

                {data?.ctaText && data?.link && (
                  <Column
                    alignItems="center"
                    flexDirection="row"
                    mt={{ _: 1, tablet: 4 }}
                  >
                    <LinkAngle
                      label={data.ctaText}
                      url={data.link}
                      fontFamily="Avenir Regular"
                      fontSize={{ _: "16px", tablet: "24px" }}
                      color="white"
                      gap={data?.isExternal ? 1 : 0}
                      iconType={data?.isExternal ? "external-link" : undefined}
                      isExternal={data?.isExternal}
                    />
                  </Column>
                )}
              </Center>
            </Container>
          ))}
      </Flex>
    </Flex>
  );
};

export default DiscoverPortfolio;
