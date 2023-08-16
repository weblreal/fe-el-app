// Modules
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import useDownloadFiles from "../../hooks/useDownloadFiles";
import AppConfig from "../../logic/configs/AppConfig";
import ClientOnlyPortal from "../ClientOnlyPortal/ClientOnlyPortal";
import Link from "next/link";
import { IPressRelease } from "../PressRelease/IPressRelease";
// Components
import Column from "../UI/Column/Column";
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import Grid, { GridRow } from "../UI/Grid/Grid";
import LinkAngle from "../UI/LinkAngle/LinkAngle";
import Text from "../UI/Text/Text";
import ShareModal from "../ShareModal/ShareModal";
import PressReleaseTitle from "../PressRelease/PressReleaseTitle";

const PressReleaseLarge = ({
  cta,
  date,
  longText,
  tag,
  title,
  singleFile,
  share,
  downloadAllLabel,
}: IPressRelease) => {
  // Hooks
  const [activeDownloads, setActiveDownloads] = useState<
    { url: string; fileName: string; type?: string }[]
  >([
    {
      fileName: singleFile?.label || "",
      url: singleFile?.url || "",
      type: singleFile?.type,
    },
  ]);
  const [isDownloading, startDownload] = useDownloadFiles(activeDownloads);
  const [modal, setModal] = useState(false);

  // Functions
  const downloadFileHandler = () => {
    if (!isDownloading && singleFile && singleFile?.url) startDownload();
  };

  const openModalHandler = () => {
    setModal((prev) => !prev);
  };

  return (
    <Container p={3} border="thin" borderColor="neutral.10">
      {/* Row 1 */}
      <Flex
        alignItems={{ _: "start", tablet: "center" }}
        mb={{ _: 2, tablet: 3 }}
        flexDirection={{ _: "column", tablet: "row" }}
      >
        {tag && (
          <Column
            justifyContent="center"
            alignItems="center"
            backgroundColor="neutral.5"
            px={2}
            py={1}
            border="thin"
            borderColor="neutral.5"
            borderWidth={0.5}
            mr={{ _: 0, tablet: 2 }}
            mb={{ _: 2, tablet: 0 }}
            borderRadius="100px"
          >
            {/* Tag */}
            <Text fontFamily="Avenir Roman">{tag}</Text>
          </Column>
        )}

        {/* Date */}
        <Column alignItems="center">
          <Text verticalAlign="middle" color="neutral.40" fontSize="h5">
            {date}
          </Text>
        </Column>
      </Flex>

      {/* Row 2 */}
      <Grid gridGap={1}>
        <GridRow>
          {singleFile?.url ? (
            <Link href={singleFile?.url} download target="_blank">
              <Text fontSize="h5" fontFamily="Avenir Bold" fontWeight="bolder">
                {title}
              </Text>
            </Link>
          ) : (
            <Text fontSize="h5" fontFamily="Avenir Bold" fontWeight="bolder">
              {title}
            </Text>
          )}
        </GridRow>

        <GridRow>
          <Text fontSize="h5">{AppConfig.html(longText)}</Text>
        </GridRow>
      </Grid>

      {/* Row 3 */}
      <Flex
        justifyContent={cta ? "space-between" : "end"}
        flexDirection={{ _: "column", tablet: "row" }}
        mt={{ _: 0, tablet: 3 }}
      >
        {/* CTA */}
        {cta && (
          <Column my={{ _: 2, tablet: 0 }}>
            <LinkAngle
              label={cta.label || ""}
              url={cta.url}
              gap={0}
              iconVerticalAlign="top"
            />
          </Column>
        )}
        <Column
          flexDirection="row"
          justifyContent={{ _: "space-between", tablet: "initial" }}
          pt={{ _: 3, tablet: 0 }}
          mt={{ _: 0, tablet: 0 }}
          borderTop={{ _: "thin", tablet: "none" }}
          borderTopColor="neutral.10"
        >
          {/* Download */}
          {downloadAllLabel && (
            <Container>
              <LinkAngle
                iconType="download"
                gap={1}
                color="#1890ff"
                label={downloadAllLabel}
                url={singleFile?.id ? `cap/content/${singleFile?.id}` : "#"}
                iconVerticalAlign="sub"
                loading={isDownloading}
                isExternal
              />
            </Container>
          )}

          {/* Share */}
          {share && (
            <Container ml={3} onClick={openModalHandler}>
              <LinkAngle
                iconType="upload"
                label={share.label || ""}
                url="#"
                gap={1}
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
                {...share}
                url={share?.url || "#"}
              />
            </>
          )}
        </AnimatePresence>
      </ClientOnlyPortal>
    </Container>
  );
};

export default PressReleaseLarge;
