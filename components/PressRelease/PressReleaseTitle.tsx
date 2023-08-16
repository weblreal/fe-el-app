import { IFiles } from "./IPressRelease";
import Link from "next/link";
// Components
import { GridRow } from "../UI/Grid/Grid";
import TextEllipsis from "../TextEllipsis/TextEllipsis";
import styled from "styled-components";

type Props = {
  title?: string;
  allFiles?: IFiles[];
  longText?: string;
  isTitleLinkToPDF?: boolean;
  url?: string;
};

const PressReleaseTitle = ({
  title,
  allFiles,
  longText,
  isTitleLinkToPDF,
  url,
}: Props) => {
  // Variables
  const contentId = allFiles?.[0]?.id;

  return (
    <>
      {isTitleLinkToPDF && (
        <Link href={`cap/content/${contentId}/`} target="_blank">
          <Title
            lineCountM={4}
            lineCountD={4}
            fontSize={{ _: longText ? "22px" : "h5", tablet: "h5" }}
            fontFamily="Avenir Bold"
            fontWeight="bolder"
          >
            {title}
          </Title>
        </Link>
      )}
      {!isTitleLinkToPDF && (
        <GridRow mb={allFiles?.[0]?.category ? 2 : 0} width="fit-content">
          <Link href={url || "#"}>
            <Title
              lineCountM={4}
              lineCountD={4}
              fontSize={{ _: longText ? "22px" : "h5", tablet: "h5" }}
              fontFamily="Avenir Bold"
              fontWeight="bolder"
            >
              {title}
            </Title>
          </Link>
        </GridRow>
      )}
    </>
  );
};

const Title = styled(TextEllipsis)`
  &:hover {
    text-decoration: underline !important;
  }
`;

export default PressReleaseTitle;
