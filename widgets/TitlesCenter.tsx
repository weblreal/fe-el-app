import AppConfig from "../logic/configs/AppConfig";
import { ITitlesCenter } from "../models/widgets/ITitlesCenter";
// Components
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import Column from "../components/UI/Column/Column";

const TitlesCenter = ({ title, longText }: ITitlesCenter) => {
  return (
    <Container
      m="auto"
      width="full"
      maxWidth="screen"
      overflow="hidden"
      backgroundColor="background"
      p={{ _: "40px 16px", tablet: "120px 176px 77px" }}
    >
      <Column justifyContent="left">
        <Text
          fontSize={["h2", "h1"]}
          fontWeight="bold"
          textAlign="left"
          mb={5}
        >
          {AppConfig.html(title)}
        </Text>
        <Text fontSize={["regular", "h4"]} textAlign="left">
          {AppConfig.html(longText)}
        </Text>
      </Column>
    </Container>
  );
};

export default TitlesCenter;
