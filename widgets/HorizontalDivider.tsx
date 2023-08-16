import AppConfig from "../logic/configs/AppConfig";
import { IHorizontalDivider } from "../models/widgets/IHorizontalDivider";
import useView from "../hooks/useView";
import { useRef } from "react";
// Components
import Flex from "../components/UI/Flex/Flex";
import Text from "../components/UI/Text/Text";
import Button from "../components/UI/Button/Button";
import Hidden from "../components/UI/Hidden/Hidden";
import Link from "next/link";
import ReverseTheme from "../components/ReverseTheme/ReverseTheme";
import Container from "../components/UI/Container/Container";
import Grid from "../components/UI/Grid/Grid";

const HorizontalDivider = ({ longText, cta }: IHorizontalDivider) => {
  // Hooks
  const containerRef = useRef<null>(null);
  const isVisible = useView(containerRef, { once: true });

  return (
    <ReverseTheme>
      <Flex
        margin="auto"
        maxWidth="screen"
        width="full"
        py={{ _: "40px", tablet: "84px" }}
        px="16px"
        overflow="hidden"
        backgroundColor="background"
        position="relative"
        flexDirection={{ _: "column", tablet: "row" }}
        justifyContent="center"
        ref={containerRef}
      >
        <Hidden till="tablet">
          <Grid
            gridTemplateColumns="auto auto"
            maxWidth="968px"
            width="100%"
            alignItems="center"
            justifyContent="space-between"
            gridGap={67}
            initial="hide"
            animate={isVisible ? "show" : "hide"}
            variants={AppConfig.setAnimationVariant("SLIDE_UPWARD_20_REVEAL")}
          >
            <Text
              fontSize="22px"
              fontFamily="Avenir Light"
              lineHeight="1.64"
              fontWeight="300"
            >
              {AppConfig.html(longText || "")}
            </Text>
            {cta?.label && (
              <Link href={cta?.url || "#"}>
                <Button minWidth="230px" variant="secondary">
                  <Text
                    fontFamily="Avenir Roman"
                    fontSize="22px"
                    lineHeight="32px"
                    fontWeight="normal"
                    m="auto"
                  >
                    {cta?.label}
                  </Text>
                </Button>
              </Link>
            )}
          </Grid>
        </Hidden>
        <Hidden from="tablet">
          <Container
            initial="hide"
            animate={isVisible ? "show" : "hide"}
            variants={AppConfig.setAnimationVariant("SLIDE_UPWARD_20_REVEAL")}
          >
            <Text
              fontSize="h3"
              mb={3}
              fontFamily="Avenir Light"
              lineHeight="1.375"
              fontWeight="light"
            >
              {AppConfig.html(longText || "")}
            </Text>
            {cta?.label && (
              <Link href={cta?.url || "#"}>
                <Button minWidth="full" variant="secondary" height={48}>
                  <Text
                    fontFamily="Avenir Roman"
                    fontSize="regular"
                    fontWeight="light"
                    m="auto"
                  >
                    {cta?.label}
                  </Text>
                </Button>
              </Link>
            )}
          </Container>
        </Hidden>
      </Flex>
    </ReverseTheme>
  );
};

export default HorizontalDivider;
