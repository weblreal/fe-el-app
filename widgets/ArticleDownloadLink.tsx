import AppConfig from "../logic/configs/AppConfig";
import { IArticleDownloadLink } from "../models/widgets/IArticleDownloadLink";
import styled from "styled-components";
// Components
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import Picture from "../components/UI/Picture/Picture";
import Link from "next/link";
import Icon from "../components/UI/Icon/Icon";
import Row from "../components/UI/Row/Row";
import Flex from "../components/UI/Flex/Flex";

const ArticleDownloadLink = ({ paragraph,picture,cta }: IArticleDownloadLink) => {
  return (
    <Container
      m="auto"
      width={{_:"calc(100vw-100%)", tablet:"80%",desktopS:"1200px"}}
      backgroundColor="background"
      paddingBottom="15px"
    >
      <Container width={{_:"100%", tablet:"80%",desktopS:"100%"}} maxWidth="780px" m={{tablet:"auto"}} p={{_: 15, tablet: 0}} pb={0}>
        <Container>
          <PictureWrapper m={{_:"0 0 25px",tablet:"0 40px 40px 0"}} 
                          width={{_:"100%",tablet:"200px"}}
                          height={{_:"auto"}}>
          {picture && <Picture src={picture} alt={picture} width={200} />}
          </PictureWrapper>
          <AboutText fontSize={{_:"19px"}} textAlign="left" lineHeight="1.875rem" fontFamily="Avenir Light">
            {AppConfig.html(paragraph)}
          </AboutText>
        </Container>
      </Container>
      <LinkWrapper
        width={{_:"100%", tablet:"80%",desktopS:"100%"}} maxWidth="780px" m={{tablet:"auto"}} p={{_: 15, tablet:"15px 0px 0px 0px"}} pb={0}
      >
        <Row>
          <Container display="block" margin="auto 0 auto 0">
            <Icon type="arrow-down" size={14}/>
          </Container>
          <Link prefetch={false} href={cta?.url || "#"}>
              <LinkLabel 
                ml="8px" 
                fontSize={{ _: "14px" }}  
                display="inline-block" 
                fontFamily="Avenir Bold"
                >{AppConfig.html(cta?.label)}</LinkLabel>
          </Link>
        </Row>
      </LinkWrapper>
    </Container>
  );
};

const PictureWrapper = styled(Container)`
  float: left;
`;

const AboutText = styled(Text)`
  p{
    padding-bottom: 15px;
  }
`;

const LinkWrapper = styled(Container)`
  overflow:hidden;
`;

const LinkLabel = styled(Text)`
  text-transform: uppercase;
  text-decoration: underline;
  transition: all 0.3s;
  &:hover{
    margin-left: 15px;
  }
`;

export default ArticleDownloadLink;
