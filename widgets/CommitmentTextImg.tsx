import styled from "styled-components";
import AppConfig from "../logic/configs/AppConfig";
// Components
import Container from "../components/UI/Container/Container";
import Grid, { GridRow } from "../components/UI/Grid/Grid";
import Hidden from "../components/UI/Hidden/Hidden";
import Picture from "../components/UI/Picture/Picture";
import Text from "../components/UI/Text/Text";

type Props = {
  picture?: string;
  title?: string;
  longText?: string;
};

const CommitmentTextImg = ({ longText, picture, title }: Props) => {
  return (
    <Grid
      maxWidth={{ _: "screen2", desktopS: "screen" }}
      width="full"
      m="auto"
      gridTemplateColumns={{
        _: "unset",
        desktopS: "1fr 1fr",
        desktopXL: "auto 960px",
      }}
    >
      {/* Left */}
      <Container
        pt={{ _: 5, desktopS: "78px" }}
        pb={{ _: 4, desktopS: "49px" }}
        pl={{ _: 2, desktopS: 2 }}
        pr={{ _: 2, desktopS: 0 }}
        mr={{ _: 0, desktopS: 128 }}
        maxWidth={{ _: "auto", desktopS: 520 }}
        ml="auto"
      >
        {title && (
          <Text
            fontSize="32px"
            fontFamily="Avenir Bold"
            fontWeight={900}
            mb={2}
          >
            {AppConfig.html(title)}
          </Text>
        )}
        <LongText
          fontSize={{ _: "regular", desktopS: "21px" }}
          fontWeight="light"
          fontFamily="Avenir Light"
        >
          {AppConfig.html(longText)}
        </LongText>
      </Container>

      {/* Right */}
      {picture && (
        <GridRow
          maxWidth={{ _: "unset", desktopS: "960px" }}
          gridRow={{ _: "1", desktopS: "unset" }}
          minHeight={{ _: "300px", desktopS: "471px" }}
        >
          <Hidden till="desktopS">
            <PictureWrapper>
              <Picture src={picture} alt={title || "Pic"} />
            </PictureWrapper>
          </Hidden>
          <Hidden from="desktopS">
            <Picture src={picture} alt="test" objectFit="cover" />
          </Hidden>
        </GridRow>
      )}
    </Grid>
  );
};

const PictureWrapper = styled(Container)`
  display: flex;
  position: relative;
  height: 100%;
`;

const LongText = styled(Text)`
  ul {
    padding-left: 1.5em;
  }

  h2 {
    font-size: 32px;
    font-weight: 300;

    @media only screen and (max-width: 834px) {
      font-size: 24px;
    }
  }
`;

export default CommitmentTextImg;
