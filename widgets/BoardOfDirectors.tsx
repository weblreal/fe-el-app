import { useState } from "react";
import { useRouter } from "next/router";
import AppConfig from "../logic/configs/AppConfig";
import { toUpper } from "lodash";
import { IBoardOfDirectors } from "../models/widgets/IBoardOfDirectors";

// Components
import Container from "../components/UI/Container/Container";
import Grid, { GridColumn } from "../components/UI/Grid/Grid";
import Picture from "../components/UI/Picture/Picture";
import Text from "../components/UI/Text/Text";
import styled from "styled-components";


const BoardOfDirectors = ({ title, directors }: IBoardOfDirectors) => {
  
  const Router = useRouter()
  const { html } = AppConfig;
  const [hoveredPerson, setHoveredPerson] = useState<number | null>(null);
  const handleRedirectToProfile = (path: string) => Router.push(path);
  
  return (
    <Container
      margin="0 auto"
      pt="30px"
      px="15px"
      width={{
        _: "100vw",
        desktopS: "1170px",
      }}
    >
      {title !== '-' && (
        <Text
          fontFamily="Avenir Light"
          fontSize="42px"
          pb="15px"
          textAlign="left"
          width="100%"
        >
          {html(title)}
        </Text>
      )}
      <Grid
        backgroundColor="background"
        gridGap="10px 15px"
        gridTemplateColumns="repeat(auto-fit, minmax(270px, 1fr))"
        overflow="hidden"
      >
        {directors && directors?.map((director: any, key: number) => (
          <GridColumn
            display="block !important"
            height={{
              _: "auto",
              tablet: "388px"
            }}
            key={key}
            mb={{
              _: "40px",
              tablet: "40px"
            }}
            onClick={() => handleRedirectToProfile(director?.route)}
            onMouseLeave={() => setHoveredPerson(null)}
            onMouseOver={() => setHoveredPerson(key)}
            // style={
            //   (hoveredPerson === key && hoveredPerson !== null)
            //     ? {borderBottom: "4px solid #8fcadd", cursor: "pointer"}
            //     : {cursor: "pointer"}
            // }
            width={{
              _: "100%",
              desktopS: "270px"
            }}
            pointer
          >
            <PictureWrapper
              height="270px"
              mb="20px"
              width="100%"
            >
              <Picture
                alt={director?.imgAlt}
                height={270}
                objectFit="cover"
                src={director?.imgUrl}
                width={999}
              />
            </PictureWrapper>
            <Container
              mb="20px"
            >
              <Text
                fontFamily="Avenir Light"
                fontSize="19px"
                pb="5px"
                style={
                  (hoveredPerson === key && hoveredPerson !== null)
                    ? {textDecoration: "underline"}
                    : {textDecoration: "none"}
                }
              >
                {html(director?.name)}
              </Text>
              <Text
                fontFamily="Avenir Light"
                fontSize="12px"
                letterSpacing="0.125rem"
              >
                {html(toUpper(director?.position))}
              </Text>
            </Container>
          </GridColumn>
        ))}
      </Grid>
    </Container>
  );
};
const PictureWrapper = styled(Container)`
  display: flex;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default BoardOfDirectors;
