import AppConfig from "../logic/configs/AppConfig";
import { IDirectorProfile } from "../models/widgets/IDirectorProfile";
import styled from "styled-components";
// Components
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import Picture from "../components/UI/Picture/Picture";
import Hidden from "../components/UI/Hidden/Hidden";

const DirectorProfile = ({
  name,
  paragraph,
  picture,
}: IDirectorProfile) => {
  return (
    <Container
      m="auto"
      width={{ _: "calc(100vw-100%)", tablet: "80%", desktopS: "1200px" }}
      backgroundColor="background"
      mt="30px"
    >
      <Container
        width={{ _: "100%", tablet: "80%", desktopS: "100%" }}
        maxWidth="780px"
        m={{ tablet: "auto" }}
        p={{ _: 15, tablet: 0 }}
        pb={0}
      >
        <Container>
          {/*<Text fontSize="42px" textAlign="left" p="10px 4px 15px" fontFamily="Avenir Light">{name}</Text>
          <Text fontSize="26px" textAlign="left" paddingBottom="15px" fontFamily="Avenir Light">{title}</Text>*/}
          <PictureWrapper
            m={{ _: "0 0 25px", tablet: "0 30px 20px 0" }}
            width={{ _: "100%", tablet: "218px" }}
            height={{ _: "auto", tablet: "218px" }}
          >
            <Hidden till="desktopS">
              {picture && (
                <Picture
                  src={picture}
                  alt={name || picture}
                  width={345}
                  height={345}
                />
              )}
            </Hidden>
            <Hidden from="desktopS">
              {picture && <Picture src={picture} alt={name || picture} />}
            </Hidden>
          </PictureWrapper>
          <AboutText
            fontSize={{ _: "18px", tablet: "19px" }}
            textAlign="left"
            lineHeight="1.875rem"
            fontFamily="Avenir Light"
            fontWeight="200"
          >
            {AppConfig.html(paragraph)}
          </AboutText>
        </Container>
      </Container>
    </Container>
  );
};

const PictureWrapper = styled(Container)`
  float: left;
`;

const AboutText = styled(Text)`
  p {
    padding-bottom: 15px;
  }
`;

export default DirectorProfile;
