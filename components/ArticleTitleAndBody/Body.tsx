// Modules
import styled from "styled-components";
import useGetTranslatedDate from "../../hooks/useTranslatedDate";
import AppConfig from "../../logic/configs/AppConfig";

// Components
import Column from "../UI/Column/Column";
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import Header from "../UI/Header/Header";
import Hidden from "../UI/Hidden/Hidden";
import Text from "../UI/Text/Text";
import BodySocial from "./BodySocial";

interface IBodyProps {
  tagList: string[];
  shareText: string;
  backgroundImage?: string;
  publishDate: string;
  title: string;
  newText: string;
  text2: string;
}

const Body: React.FC<IBodyProps> = ({
  tagList,
  shareText,
  backgroundImage,
  publishDate,
  title,
  newText,
  text2,
}) => {
  // Hooks
  const { month, day, year } = useGetTranslatedDate({
    price: { date: publishDate, time: "" },
  });
  
  // Variables
  const date = `${day} ${AppConfig.toCapitalizeString(month)} ${year}`;
  
  // Functions
  // Effects

  return (
    <Container
      m="auto"
      width="full"
      maxWidth="screen2"
      p={{
        _: !backgroundImage ? "67px 16px" : "0 16px",
        desktopS: "75px 64px",
      }}
      overflow="hidden"
    >
      <Flex>
        <Hidden till="desktopS">
          {/* Social */}
          <Column minWidth="304px" mr={4}>
            <BodySocial shareText={shareText} tagList={tagList} />
          </Column>
        </Hidden>

        <Column
          position="relative"
          maxWidth={{ _: "auto", desktopXL: "full" }}
          width="full"
        >
          {!backgroundImage && (
            <>
              <Read color="#6d6e71" fontSize="16px">
                {date}
              </Read>
              <Header
                fontFamily={{ _: "Avenir Bold", desktopS: "Avenir Black" }}
                fontSize={{ _: "38px", desktopS: "48px" }}
                element="h1"
                mb={6}
              >
                {title}
              </Header>
            </>
          )}

          {/* Social */}
          <Hidden from="desktopS">
            <Column
              width="full"
              mt={backgroundImage ? 5 : 1}
              mb="56px"
              px="16px"
            >
              <BodySocial shareText={shareText} tagList={tagList} />
            </Column>
          </Hidden>

          <Header
            color="text"
            element="h3"
            fontFamily="Avenir Medium"
            fontWeight={500}
          >
            {AppConfig.html(newText)}
          </Header>

          {text2 && (
            <ArticleBody
              fontSize="18px"
              mt={newText ? 5 : 0}
              fontFamily="Avenir Medium"
              fontWeight={500}
            >
              {AppConfig.html(text2)}
            </ArticleBody>
          )}
        </Column>
      </Flex>
    </Container>
  );
};

const Read = styled(Text)`
  position: absolute;
  top: -35px;
`;

const ArticleBody = styled(Text)`
  img {
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: auto;
  }

  table {
    overflow-x: auto;

    tbody {
      min-width: 800px;
      tr {
        &:first-child {
          background-color: black;
          color: white;
        }
      }

      tr:not(:first-child) {
        td:first-child {
          background-color: #8080802d;
        }
      }

      tr,
      td {
        padding: 1em;
        vertical-align: top;
      }
    }
  }
`;

export default Body;
