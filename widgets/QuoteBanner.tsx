import AppConfig from "../logic/configs/AppConfig";
// Components
import Flex from "../components/UI/Flex/Flex";
import Column from "../components/UI/Column/Column";
import TextEllipsis from "../components/TextEllipsis/TextEllipsis";
import Dots from "../components/UI/Dots/Dots";
import Container from "../components/UI/Container/Container";

type Props = { longText?: string };

const QuoteBanner = ({ longText }: Props) => {
  return (
    <Flex
      margin="auto"
      maxWidth="screen"
      minHeight={{ _: "100%", tablet: "324px" }}
      overflow="hidden"
      backgroundColor="background"
      px={{ _: 2 }}
      py={{ _: 5, tablet: "109px" }}
      width="100%"
    >
      <Column
        width="100%"
        alignItems={{ _: "center", tablet: "center" }}
        justifyContent="center"
      >
        <Flex>
          <Dots
            sizes={{ desktop: 17, mobile: 12 }}
            variants={AppConfig.setAnimationVariant("DOT_SPREAD_OUT_LARGE")}
            transitions={{ duration: 0.8 }}
          />
        </Flex>
        <Container
          variants={AppConfig.setAnimationVariant("OPACITY_VARIANT")}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.75, duration: 0.75 }}
          maxWidth="screen3"
        >
          <TextEllipsis
            textAlign={{ _: "center", tablet: "center" }}
            fontSize={{ _: "h2", tablet: "48px" }}
            fontFamily="Avenir Light"
            fontWeight="light"
            lineHeight={{ _: "44px", tablet: "64px" }}
            maxWidth="screen3"
            width="full"
            lineCountD={2}
            lineCountM={10}
          >
            {AppConfig.html(longText || "")}
          </TextEllipsis>
        </Container>
      </Column>
    </Flex>
  );
};

export default QuoteBanner;
