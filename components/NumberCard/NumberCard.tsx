import styled from "styled-components";
import AppConfig from "../../logic/configs/AppConfig";
import { INumberCard } from "./INumberCard";
// components
import BackgroundImage from "../UI/BackgroundImage/BackgroundImage";
import Flex from "../UI/Flex/Flex";
import Grid from "../UI/Grid/Grid";
import Header from "../UI/Header/Header";
import Text from "../UI/Text/Text";
import Hidden from "../UI/Hidden/Hidden";

const NumberCard = ({ header, longText, backgroundImage }: INumberCard) => {
  return (
    <Flex
      width={{ _: "full", mobile: 360, tablet: 360, desktopL: "full" }}
      maxHeight={{ _: 520, desktopS: 648, desktopXL: 820 }}
      height="9999px"
      position="relative"
      p={{ _: 3, desktopS: "24px 24px 24px 40px" }}
    >
      <BackgroundImage src={backgroundImage} alt={header || "Number Module"} />
      <Gradient />

      {/* Content */}
      <VerticalText>
        <Hidden till="desktopS">
          <Flex alignItems="center">
            {header && (
              <Text
                fontFamily="Avenir Medium"
                fontWeight="500"
                fontSize="80px"
                transparent
                color="white"
                lineHeight={1}
              >
                {AppConfig.html(header)}
              </Text>
            )}

            {longText && (
              <Header fontFamily="Avenir Bold" fontWeight="bolder" element="h3" color="white" fontSize="h3" mt={2}>
                {AppConfig.html(longText)}
              </Header>
            )}
          </Flex>
        </Hidden>

        <Hidden from="desktopS">
          {header && (
            <Text
              fontFamily="Avenir Medium"
              fontWeight="500"
              fontSize="80px"
              color="white"
              lineHeight={1}
              ml={1}
            >
              {AppConfig.html(header)}
            </Text>
          )}

          {longText && (
            <Text
              transparent
              color="white"
              fontSize="h3"
              fontFamily="Avenir Black"
              fontWeight="bolder"
            >
              {AppConfig.html(longText)}
            </Text>
          )}
        </Hidden>
      </VerticalText>
    </Flex>
  );
};

const VerticalText = styled(Grid)`
  writing-mode: vertical-rl;
  text-align: left;
  transform: scale(-1, -1);
`;
const Gradient = styled(Grid)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.3) 100%, #000 0%);
`;

export default NumberCard;
