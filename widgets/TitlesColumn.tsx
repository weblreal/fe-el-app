import Grid, { GridColumn } from "../components/UI/Grid/Grid";
import Text from "../components/UI/Text/Text";
import AppConfig from "../logic/configs/AppConfig";
import { ITitlesCenter } from "../models/widgets/ITitlesCenter";

const TitlesColumn = ({ longText, title }: ITitlesCenter) => {
  return (
    <Grid
      gridGap={{ _: 2, tablet: 5 }}
      maxWidth="screen"
      width="full"
      m="auto"
      py={{ _: 5, tablet: 10 }}
      px={{ _: 2, tablet: 8 }}
      gridTemplateColumns={{ _: "unset", tablet: "1fr 1fr" }}
    >
      <GridColumn>
        <Text fontSize={{ _: "h2", tablet: "h1" }} fontWeight="bolder" fontFamily="Avenir Bold">
          {AppConfig.html(title)}
        </Text>
      </GridColumn>
      <GridColumn>
        <Text fontSize={{ _: 16, tablet: 21 }} lineHeight={{ _: "normal", tablet: "32px" }} fontWeight="light" fontFamily="Avenir Light">{AppConfig.html(longText)}</Text>
      </GridColumn>
    </Grid>
  );
};

export default TitlesColumn;
