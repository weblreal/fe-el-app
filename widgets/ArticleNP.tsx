import AppConfig from "../logic/configs/AppConfig";
import { IArticle } from "../models/widgets/IArticle";
import styled from "styled-components";
// Components
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import Column from "../components/UI/Column/Column";

const ArticleNP = ({ title, paragraph }: IArticle) => {
  const getTitle = () => {
    title = title?.trim();
    if (title != null && title != "" && title != "-") {
      return (
        <Container p={{ _: "0px 0px 32px", tablet: "24px 0px 40px" }}>
          <Text fontSize="30px" textAlign="left" fontFamily="Avenir Bold">
            {AppConfig.html(title)}
          </Text>
        </Container>
      );
    } else {
      return "";
    }
  };

  const getPadding = () => {
    title = title?.trim();
    if (title != null && title != "" && title != "-")
      return { _: "16px 16px 0", tablet: "32px 176px 0", desktopL: "32px 400px 0" };
    else return { _: "16px 16px 0", tablet: "32px 176px 0" };
  };

  const getFontSize = (): string => {
    if (title != null && title != "" && title != "-") return "21px";
    else return "21px";
  };

  return (
    <Container
      m={{ _: "unset", tablet: "auto" }}
      maxWidth="full"
      overflow="hidden"
      backgroundColor="background"
      p={getPadding()}
    >
      {getTitle()}
      <Column justifyContent="left" maxWidth="screen3">
        <TextParagraph
          fontSize={{ _: "16px", tablet: getFontSize() }}
          textAlign="left"
        >
          {AppConfig.html(paragraph)}
        </TextParagraph>
      </Column>
    </Container>
  );
};

const TextParagraph = styled(Text)`
  ul {
    padding-left: 30px;
  }

  table {
    tbody {
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

export default ArticleNP;
