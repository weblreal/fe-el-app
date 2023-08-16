import styled from "styled-components";
import AppConfig from "../../logic/configs/AppConfig";
import { GridRow } from "../UI/Grid/Grid";
// Components
import TextEllipsis from "../TextEllipsis/TextEllipsis";

type Props = {
  longText?: string;
};

const PressReleaseLongText = ({ longText }: Props) => {
  return (
    <>
      {longText && (
        <GridRow>
          <Text
            lineCountD={3}
            lineCountM={3}
            fontSize="h5"
            fontFamily={{ _: "Avenir Light", tablet: "Avenir Regular" }}
            fontWeight={{ _: "light", tablet: "normal" }}
            mb={{ _: 1, tablet: 0 }}
          >
            {AppConfig.html(longText)}
          </Text>
        </GridRow>
      )}
    </>
  );
};

const Text = styled(TextEllipsis)`
  strong {
    font-weight: 400;
  }
`;

export default PressReleaseLongText;
