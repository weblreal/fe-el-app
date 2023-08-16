import AppConfig from "../logic/configs/AppConfig";
import styled from "styled-components";
import { ITextPlusLink } from "../models/widgets/ITextPlusLink";
// Components
import Container from "../components/UI/Container/Container";
import Text from "../components/UI/Text/Text";
import Column from "../components/UI/Column/Column";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import Flex from "../components/UI/Flex/Flex";
import Header from "../components/UI/Header/Header";

type Props = {
  items: ITextPlusLink[];
  title?: string;
};

const TextPlusLink = ({ items, title }: Props) => {
  const { html } = AppConfig;

  const allItems = items?.map((item) => ({ ...item }));

  return (
    <Container
      maxWidth={{ _: "100%", tablet: "640px" }}
      margin="40px auto 33px"
      padding={{ _: "0 16px", tablet: "0" }}
    >
      {title && (
        <Header
          element="h2"
          fontFamily="Avenir Medium"
          fontWeight="500"
          fontSize={{ _: 32, tablet: 48 }}
          mb={{ _: 2, tablet: 3 }}
        >
          {title}
        </Header>
      )}

      {allItems &&
        allItems.map((item: ITextPlusLink, key: number) => (
          <Container marginBottom={key !== allItems?.length - 1 ? "33px" : 0} key={key}>
            <Text fontWeight="700" marginBottom="10px">
              {item.title}
            </Text>
            <Text fontSize="16px" marginBottom="10px">
              {html(item.paragraph)}
            </Text>
            <Flex flexDirection={{ _: "column", tablet: "row" }}>
              {item.cta &&
                item.cta.map((cta, key: number) => (
                  <Column
                    marginRight="40px"
                    paddingBottom={{ _: "10px", tablet: "0" }}
                    key={key}
                  >
                    <LinkAngle
                      iconVerticalAlign="text-top"
                      isExternal={cta.isExternal}
                      label={cta.label}
                      url={cta.url}
                      fontSize="18px"
                      color="#5c8db8"
                      gap={0}
                    />
                  </Column>
                ))}
            </Flex>
          </Container>
        ))}
    </Container>
  );
};

const TextParagraph = styled(Text)`
  ul {
    padding-left: 30px;
  }
`;

export default TextPlusLink;
