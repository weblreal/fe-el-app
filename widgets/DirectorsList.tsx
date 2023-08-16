import { useState } from "react";
import { useRouter } from "next/router";
import AppConfig from "../logic/configs/AppConfig";
import { toUpper } from "lodash";
import { IBoardOfDirectors } from "../models/widgets/IBoardOfDirectors";

// Components
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import styled from "styled-components";
import Flex from "../components/UI/Flex/Flex";


const DirectorsList = ({ title, directors }: IBoardOfDirectors) => {

    const Router = useRouter()
    const { html } = AppConfig;
    const [hoveredPerson, setHoveredPerson] = useState<number | null>(null);
    const handleRedirectToProfile = (path: string) => Router.push(path)

    return (
        <Container
            margin="0 auto 30px"
            pt="30px"
            px="15px"
            maxWidth={{ _: "100%", tablet: "80%", desktopS: "800px" }}
            width="full"
        >
            <Text
                fontFamily="Avenir Light"
                fontSize="26px"
                pt="30px"
                pb="15px"
                textAlign="left"
                m="auto"
                maxWidth={{ _: "100%", tablet: "80%", desktopS: "full" }}
                width="full"
            >
                {html(title)}
            </Text>
            <Flex
                flexDirection="column"
                // ml={{ desktopS: 0, desktopL: "128px" }}
                overflow="hidden"
                width={{ _: "100%", tablet: "80%", desktopS: "full" }}
                m="auto"
                maxWidth={{ _: "100%" }}
            >
                {directors && directors?.map((director: any, key: number) => (
                    <Container
                        key={key}
                        pt="15px"
                        pb="20px"
                        pl="20px"
                        pr="30px"
                        position="relative"
                        onClick={() => handleRedirectToProfile(director?.route)}
                        onMouseLeave={() => setHoveredPerson(null)}
                        onMouseOver={() => setHoveredPerson(key)}
                        style={
                            (hoveredPerson === key && hoveredPerson !== null ) 
                                ? { backgroundColor: "rgba(230,231,232,0.5)", borderTop: "1px solid #BCBEC0", borderBottom: "1px solid #BCBEC0", cursor: "pointer" }
                                : { borderTop: "1px solid #BCBEC0", borderBottom: "1px solid #BCBEC0", cursor: "pointer" }
                        }
                    >
                        <Text
                            fontFamily="Avenir Light"
                            fontSize="25px"
                            pb="5px"
                            style={
                                (hoveredPerson === key && hoveredPerson !== null)
                                    ? { textDecoration: "underline" }
                                    : { textDecoration: "none" }
                            }
                        >
                            {html(director?.name)}
                        </Text>
                        <Text
                            fontFamily="Avenir Light"
                            fontSize="15px"
                            letterSpacing="0.125rem"
                        >
                            {html(toUpper(director?.position))}
                        </Text>
                        {hoveredPerson === key && hoveredPerson !== null &&
                            <HoverBorder>
                            </HoverBorder>
                        }
                    </Container>
                ))}
            </Flex>
        </Container>
    );
};
const HoverBorder = styled(Container)`
/* background: #8EC5E2; */
height: 4px;
-webkit-transition: all 0.3s;
transition: all 0.3s;
width: 100%;
position: absolute;
bottom: -2px;
left: 0;
z-index: 1;
`;
export default DirectorsList;
