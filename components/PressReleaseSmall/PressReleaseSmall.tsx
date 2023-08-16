// Modules
import { AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { IPressRelease } from "../PressRelease/IPressRelease";
import useDownloadFiles from "../../hooks/useDownloadFiles";
import ClientOnlyPortal from "../ClientOnlyPortal/ClientOnlyPortal";
import styled from "styled-components";
import Link from "next/link";
// Components
import Column from "../UI/Column/Column";
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import Grid, { GridRow } from "../UI/Grid/Grid";
import LinkAngle from "../UI/LinkAngle/LinkAngle";
import Text from "../UI/Text/Text";
import ShareModal from "../ShareModal/ShareModal";
import PressReleaseTags from "../PressRelease/PressReleaseTags";
import PressReleaseDate from "../PressRelease/PressReleaseDate";
import TextEllipsis from "../TextEllipsis/TextEllipsis";

const PressReleaseSmall = ({
  cta,
  date,
  title,
  singleFile,
  share,
  tags = [],
  tagCta,
  downloadAllLabel,
}: IPressRelease) => {
  // Hooks
  const [activeDownloads] = useState<
    { url: string; fileName: string; type?: string }[]
  >([
    {
      fileName: singleFile?.fileName || "",
      url: singleFile?.url || "#",
      type: singleFile?.type,
    },
  ]);
  const [isDownloading, startDownload] = useDownloadFiles(activeDownloads);
  const [modal, setModal] = useState(false);

  // Functions
  const openModalHandler = () => {
    setModal((prev) => !prev);
  };

  return (
    <Flex
      p={3}
      border="thin"
      borderColor="neutral.10"
      maxWidth="full"
      minHeight="360px"
      alignItems="flex-start"
      flexDirection="column"
      overflow="hidden"
      height="full"
    >
      {/* Row 1 */}
      <Flex alignItems="start" mb={2} flexDirection="column">
        {/* Tags */}
        <PressReleaseTags tags={tags} tagCta={tagCta} isGoBackTags />

        {/* Date */}
        <Column alignItems="center">
          <PressReleaseDate
            date={date || ""}
            fontSize="h5"
            fontWeight={{ _: "bolder", desktopS: "normal" }}
            fontFamily={{ _: "Avenir Bold", desktopS: "Avenir Regular" }}
          />
        </Column>
      </Flex>

      {/* Row 2 */}
      <Grid gridGap={1} width="full">
        <GridRow>
          <Text fontSize="22px" fontFamily="Avenir Bold" fontWeight="bolder">
            {cta?.url && (
              <Link href={cta?.url}>
                <TextEllipsisHoverable lineCountM={4} lineCountD={4}>
                  {title}
                </TextEllipsisHoverable>
              </Link>
            )}
          </Text>
        </GridRow>
      </Grid>

      {/* Row 3 */}
      <Flex
        justifyContent="space-between"
        flexDirection="column"
        mt="auto"
        width="full"
      >
        {/* CTA */}
        {cta && (
          <Column my={2}>
            <LinkAngle
              fontFamily={{ _: "Avenir Bold", desktopS: "Avenir Regular" }}
              fontWeight={{ _: "bolder", desktopS: "normal" }}
              label={cta.label || "#"}
              url={cta.url}
              gap={0}
            />
          </Column>
        )}
        <Column
          flexDirection="row"
          justifyContent="space-between"
          pt={3}
          mt={0}
          borderTop="thin"
          borderTopColor="neutral.10"
        >
          {/* Download */}
          <Container>
            <LinkAngle
              fontFamily={{ _: "Avenir Bold", desktopS: "Avenir Regular" }}
              fontWeight={{ _: "bolder", desktopS: "normal" }}
              iconType="download"
              gap="4px"
              color="#1890ff"
              label={downloadAllLabel || ""}
              url={singleFile?.id ? `cap/content/${singleFile?.id}` : "#"}
              iconVerticalAlign="sub"
              isExternal
              loading={isDownloading}
            />
          </Container>

          {/* Share */}
          {share && (
            <Container ml={3} onClick={openModalHandler}>
              <LinkAngle
                iconType="upload"
                label={share.label || "#"}
                url="#"
                gap="4px"
                iconVerticalAlign="sub"
              />
            </Container>
          )}
        </Column>
      </Flex>

      <ClientOnlyPortal selector="#portal">
        <AnimatePresence>
          {modal && (
            <>
              <Container
                position="fixed"
                top={0}
                left={0}
                height="full"
                width="full"
                backgroundColor="neutral.60"
                zIndex={9999}
                pointer
                onClick={openModalHandler}
              ></Container>
              <ShareModal
                closeHandler={openModalHandler}
                url={share?.url || "#"}
              />
            </>
          )}
        </AnimatePresence>
      </ClientOnlyPortal>
    </Flex>
  );
};

const TextEllipsisHoverable = styled(TextEllipsis)`
  &:hover {
    text-decoration: underline;
  }
`;

export default PressReleaseSmall;
