// Modules
import styled from "styled-components";
import AppConfig from "../../logic/configs/AppConfig";
// Components
import Flex from "../UI/Flex/Flex";
import Grid, { GridRow } from "../UI/Grid/Grid";
import Text from "../UI/Text/Text";
import { ITestimonialCards } from "./ITestimonialCards";
import Container from "../UI/Container/Container";
import Picture from "../UI/Picture/Picture";

const TestimonialCard = ({ name, title, paragraph, picture }: ITestimonialCards) => {

  const { html } = AppConfig;

  return (
    <Container
      position="relative"
      width="full"
      height="full"
      maxWidth="full"
      minHeight={{_: "364px", tablet:"402px"}}
      border="1px solid rgba(0, 0, 0, 0.2)"
      padding="28px 24px 24px 24px"
    >
      {/* Image and Name */}
      <Flex
        flexDirection="row"
        marginBottom="32px"
      >
        <Picture src={picture} alt={picture} width={88} height={210}/>
        <Container paddingLeft="16px">
          <Text
            fontFamily="Avenir Roman"
            fontSize="18px"
            marginBottom="8px"
          >
            {name}
          </Text>
          <Text
            fontFamily="Avenir Light"
            fontSize="12px"
          >
            {title}
          </Text>
        </Container>
      </Flex>

      {/* Paragraph */}
      <Container>
        <Text
          fontFamily="Avenir Light"
          fontSize="16px"
        >
          {html(paragraph)}
        </Text>
      </Container>
    </Container>
  );
};

export default TestimonialCard;
