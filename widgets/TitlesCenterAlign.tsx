import AppConfig from "../logic/configs/AppConfig";
import { ITitlesCenter } from "../models/widgets/ITitlesCenter";
// Components
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import Column from "../components/UI/Column/Column";
import Link from "next/link";

const TitlesCenterAlign = ({ title, longText, mailTo }: ITitlesCenter) => {
  return (
    <Container
      m="auto"
      width="full"
      overflow="hidden"
      backgroundColor="background"
      p={
        mailTo || longText
          ? { _: "40px 16px 24px", tablet: "80px 16px 40px" }
          : { _: "40px 16px 0", tablet: "80px 16px 0" }
      }
    >
      <Column justifyContent="center" maxWidth="screen3" m="auto">
        <Text
          fontFamily="Avenir Medium"
          fontSize={{ _: "32px", tablet: "48px" }}
          fontWeight="500"
          textAlign={{ _: "left", tablet: "center" }}
          mb={longText || mailTo ? { _: 2, tablet: 5 } : {}}
        >
          {AppConfig.html(title)}
        </Text>

        {mailTo && (
          <Text
            fontSize={{ tablet: "21px" }}
            textAlign={{ _: "left", tablet: "center" }}
            fontFamily="Avenir Light"
            fontWeight={300}
            color="accent"
            style={{ textDecoration: "underline" }}
            mb="1em"
          >
            <Link href={`mailto:${mailTo}`}>{mailTo}</Link>
          </Text>
        )}

        <Text
          fontSize={{ tablet: "21px" }}
          textAlign={{ _: "left", tablet: "center" }}
          fontFamily="Avenir Light"
          fontWeight={300}
        >
          {AppConfig.html(longText)}
        </Text>
      </Column>
    </Container>
  );
};

export default TitlesCenterAlign;
