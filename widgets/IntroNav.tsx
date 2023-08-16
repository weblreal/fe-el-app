import AppConfig from "../logic/configs/AppConfig";
import { IIntroNav } from "../models/widgets/IIntroNav";
import { ILink } from "../models/components/ILink";
import { useRouter } from "next/router";
import Link from "next/link";
// Components
import Flex from "../components/UI/Flex/Flex";
import Column from "../components/UI/Column/Column";
import Text from "../components/UI/Text/Text";
import Icon from "../components/UI/Icon/Icon";
import Row from "../components/UI/Row/Row";
import Picture from "../components/UI/Picture/Picture";
import Hidden from "../components/UI/Hidden/Hidden";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import styled from "styled-components";
import Header from "../components/UI/Header/Header";

const IntroNav = ({
  title,
  longText,
  subTitle,
  preTitle,
  backgroundImage,
  cta,
  color,
}: IIntroNav) => {
  // Hooks
  const router = useRouter();

  // Variables
  const renderCta = !!cta?.length;
  const arrPage = router.query.page;

  // Functions
  const getGotoRoute = () => {
    if (!!arrPage) {
      if (arrPage?.length < 1) return;

      const isIndexPos = arrPage?.length >= 0;
      const prevIndex = isIndexPos ? arrPage?.length - 1 : 0;

      const formattedArr = arrPage?.slice(0, prevIndex);
      return (formattedArr as string[]).join("/");
    }
  };

  return (
    <Flex
      m="auto"
      width="full"
      maxWidth="screen"
      position="relative"
      overflow="hidden"
      // backgroundColor="rgba(0, 6, 60, 0.65)"
    >
      <Flex position="absolute" zIndex={-1} size="full">
        <Picture src={backgroundImage} alt={title || backgroundImage} />
      </Flex>
      {renderCta ? (
        <Flex
          p={{ _: "24px 16px", desktopS: "64px" }}
          flexDirection={{ _: "column", desktopS: "row" }}
          justifyContent={{ _: "space-between", desktopS: "space-between" }}
          width="full"
        >
          <Column mb={{ _: "40px", desktopS: "0px" }} maxWidth="696px">
            <Header
              element="h1"
              fontSize={{ _: "h2", desktopS: "48px" }}
              fontFamily={{ _: "Avenir Bold", desktopS: "Avenir Light" }}
              fontWeight={{ _: "bolder", desktop: "light" }}
              color={color || "white"}
              backgroundColor="transparent"
              mb={longText ? 1 : 0}
            >
              {AppConfig.html(title)}
            </Header>

            {/* end of Long Text 1 */}
            <Text
              fontSize={{ _: "h4", desktopS: "h3" }}
              fontFamily={{ desktopS: "Avenir Light" }}
              fontWeight={{ _: "500", desktopS: "light" }}
              color={color || "white"}
              backgroundColor="transparent"
              lineHeight="1.2088em"
            >
              {AppConfig.html(longText)}
            </Text>
          </Column>
          <Column width={{ _: "auto", desktopS: "416px" }}>
            <Text
              color={color || "white"}
              backgroundColor="transparent"
              mb="8px"
              fontFamily="Avenir Light"
              fontWeight="light"
              fontSize={{ _: "h5", desktopS: "regular" }}
            >
              {AppConfig.html(preTitle)}
            </Text>
            {cta?.map((link: ILink, key: number) => (
              <Row key={key} mb={key + 1 !== cta?.length ? 1 : 0}>
                <LinkAngle
                  color={color || "white"}
                  label={link.label}
                  url={link.url}
                  fontSize={{ _: "h5", desktopS: "regular" }}
                  fontWeight="900"
                  fontFamily="Avenir Bold"
                  gap="0"
                />
              </Row>
            ))}
          </Column>
        </Flex>
      ) : (
        <Flex
          p={{ _: "24px 16px", desktopS: "40px 64px 32px" }}
          width="full"
          height="auto"
        >
          {getGotoRoute() && (
            <Flex
              height="auto"
              alignItems={{
                _: subTitle ? "start" : "center",
                desktopS: subTitle ? "start" : "center",
              }}
              pt={{ _: subTitle ? "6px" : 0, desktopS: subTitle ? 2 : 0 }}
              mr={{ _: "16px", desktopS: "24px" }}
            >
              <ArrowLink href={getGotoRoute() || "#"} locale={router.locale}>
                <Flex
                  alignItems={{
                    _: "center",
                    desktopS: subTitle ? "start" : "unset",
                  }}
                  justifyContent="center"
                  pointer
                  height={{ _: "24px", desktopS: "auto" }}
                  width={{ _: "24px", desktopS: "auto" }}
                >
                  <Hidden from="desktopS">
                    <Icon
                      type="arrow-left"
                      size={15.8}
                      color={color || "white"}
                    />
                  </Hidden>
                  <Hidden till="desktopS">
                    <Icon
                      type="arrow-left"
                      size={28}
                      color={color || "white"}
                    />
                  </Hidden>
                </Flex>
              </ArrowLink>
            </Flex>
          )}
          <Flex
            flexDirection={{ _: "column", desktopS: "row" }}
            alignItems={{ _: "unset", desktopS: "center" }}
            justifyContent={{
              _: "unset",
              desktopS: longText ? "space-between" : "unset",
            }}
            width="full"
          >
            <Column
              mr={{ _: "0px", desktopS: "200px" }}
              mb={subTitle || longText ? { _: "8px", desktopS: "0px" } : 0}
            >
              <Header
                element="h1"
                fontSize={{ _: "h2", desktopS: "48px" }}
                color={color || "white"}
                fontFamily="Avenir Light"
                fontWeight={{ _: "bolder", desktop: "light" }}
                backgroundColor="transparent"
              >
                {AppConfig.html(title)}
              </Header>

              {/* Display text from if Long Text 1 in the banner has value from CMS */}
              {subTitle && (
                <Text
                  fontFamily={{ _: "Avenir Medium", desltopS: "Avenir Light" }}
                  fontSize={{ _: "h4", desktopS: "h3" }}
                  color={color || "white"}
                  backgroundColor="transparent"
                  lineHeight="1.2088em"
                  mt={2}
                >
                  {AppConfig.html(subTitle)}
                </Text>
              )}
            </Column>
            <Column width={longText ? "50%" : "unset"}>
              <Text
                fontSize={{ _: "h4", desktopS: "h3" }}
                color={color || "white"}
                backgroundColor="transparent"
                lineHeight="1.2088em"
              >
                {AppConfig.html(longText)}
              </Text>
            </Column>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

const ArrowLink = styled(Link)`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default IntroNav;
