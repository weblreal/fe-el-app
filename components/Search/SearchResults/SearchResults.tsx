// Modules
import Link from "next/link";
import AppConfig from "../../../logic/configs/AppConfig";
import { IResult, ISearchResults } from "./ISearchResults";
import { useState } from "react";
import styled from "styled-components";
import usePaginateArray from "../../../hooks/usePaginateArray";

// Components
import Container from "../../UI/Container/Container";
import Grid, { GridRow } from "../../UI/Grid/Grid";
import Header from "../../UI/Header/Header";
import LongText from "../../UI/LongText/LongText";
import Shadow from "../../UI/Shadow/Shadow";
import Text from "../../UI/Text/Text";
import Center from "../../UI/Center/Center";
import Span from "../../UI/Span/Span";
import Button from "../../UI/Button/Button";
import Flex from "../../UI/Flex/Flex";

const SearchResults: React.FC<ISearchResults> = ({ results = [] }) => {
  // Hooks
  const [active, setActive] = useState(1);
  const arr = usePaginateArray({
    arr: results,
    itemsPerPage: 8,
    activePage: active,
  });

  // Variables

  // Functions
  const loadMoreHandler = () => {
    setActive((prev) => prev + 1);
  };

  // Effects

  return (
    <Grid gridGap={2} p={2} maxWidth="screen3" m="auto">
      <GridRow>
        <Text
          fontSize="18px"
          fontFamily="Avenir Medium"
          fontWeight={500}
          mb={4}
        >
          {results.length} result(s)
        </Text>
      </GridRow>
      {arr?.map((result: IResult, key: number) => (
        <ResultItem {...result} longText={result.longText} key={key} />
      ))}

      <GridRow pt={3}>
        <Center>
          <Text
            fontSize="18px"
            fontFamily={{ _: "Avenir Bold", desktopS: "Avenir Regular" }}
            fontWeight={{ _: 900, desktopS: 400 }}
          >
            Showing <Span fontWeight={900}>{arr?.length}</Span> of{" "}
            <Span fontWeight={900}>{results?.length}</Span>
          </Text>
        </Center>
      </GridRow>
      {arr.length < results.length && (
        <GridRow>
          <Flex justifyContent="center">
            <Button
              variant="secondary"
              width={{ _: "full", desktopS: "fit-content" }}
              onClick={loadMoreHandler}
            >
              <Text textAlign="center">Load more</Text>
            </Button>
          </Flex>
        </GridRow>
      )}
    </Grid>
  );
};

const ResultItem = ({ cta, longText, date }: IResult) => {
  return (
    <Shadow boxShadow="Card Border">
      <Container p={[3]}>
        {cta?.url && (
          <Link href={cta.url}>
            <HeaderLink fontSize={[22, 18]} mb={longText || date ? 1 : 0}>
              {cta.label}
            </HeaderLink>
          </Link>
        )}

        {longText && (
          <LongText fontSize={18}>
            {AppConfig.limitText(longText, 240)}
          </LongText>
        )}

        {date && (
          <Text mt={3} fontSize={18} color="neutral.40">
            {date}
          </Text>
        )}
      </Container>
    </Shadow>
  );
};

const HeaderLink = styled(Header)`
  &:hover {
    text-decoration: underline;
  }
`;
export default SearchResults;
