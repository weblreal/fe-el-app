import AppConfig from "../logic/configs/AppConfig";
import { IColumns3 } from "../models/widgets/IColumns3";
import styled from "styled-components";
// Components
import Text from "../components/UI/Text/Text";
import Column from "../components/UI/Column/Column";
import Grid from "../components/UI/Grid/Grid";
import Container from "../components/UI/Container/Container";

type Props = {
  columns: IColumns3[];
};

const Columns3 = ({ columns }: Props) => {
  const allColumns = columns?.map((column) => ({ ...column }));

  return (
    <Container maxWidth="screen" width="full" m="auto" backgroundColor="#000000">
      <Grid
        gridTemplateColumns={
          allColumns.length === 1
            ? "repeat(1)"
            : allColumns.length === 2
            ? "repeat(2, 50%)"
            : `repeat(${allColumns.length}, 1fr)`
        }
        gridGap={{ _: 2, tablet: 5 }}
        width="full"
        maxWidth={allColumns?.length === 1 ? "screen3" : "screen"}
        overflow="hidden"
        m="auto"
        p={{ _: "40px 16px", tablet: "80px 64px" }}
        backgroundColor="#000000" // TODO
      >
        {allColumns.map((column: IColumns3, key: number) => (
          <Column justifyContent="left" key={key}>
            <TextParagraph
              fontFamily="Avenir Light"
              fontWeight="light"
              fontSize={{ _: "16px", tablet: "21px" }}
              textAlign="left"
              color="#ffffff"
            >
              {AppConfig.html(column.paragraph)}
            </TextParagraph>
          </Column>
        ))}
      </Grid>
    </Container>
  );
};

const TextParagraph = styled(Text)`
  ul {
    padding-left: 30px;
  }
`;

export default Columns3;
