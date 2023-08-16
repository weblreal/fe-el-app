import { useState } from "react";
import { IFiles, IShare } from "./IPressRelease";
import useDownloadFiles from "../../hooks/useDownloadFiles";
// Components
import Modal from "../Modal/Modal";
import ShareModal from "../ShareModal/ShareModal";
import Column from "../UI/Column/Column";
import Container from "../UI/Container/Container";
import LinkAngle from "../UI/LinkAngle/LinkAngle";

type Props = {
  allFiles?: IFiles[];
  singleFile?: IFiles;
  share?: IShare;
  downloadAllLabel?: string;
  fullWidth?: boolean;
};

const PressReleaseDownloadShare = ({
  allFiles,
  singleFile,
  share,
  downloadAllLabel,
  fullWidth,
}: Props) => {
  // Hooks
  const [modal, setModal] = useState<boolean>(false);
  const [isDownloading, startDownload] = useDownloadFiles(
    allFiles?.map((file: any) => ({
      fileName: file?.fileName,
      type: file?.type,
      url: file?.url,
    })) || []
  );

  // Variables
  const renderDownloadAll = (allFiles && allFiles?.length > 1) || singleFile;

  // Functions
  const downloadAllHandler = () => {
    if (isDownloading) return;
    startDownload();
  };

  const openModalHandler = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <Column
        width={{ _: fullWidth ? "full" : "auto", tablet: "auto" }}
        flexDirection="row"
        justifyContent={{ _: "space-between", tablet: "initial" }}
        pt={{ _: downloadAllLabel || share ? 3 : 0, tablet: 0 }}
      >
        {/* Download */}
        {renderDownloadAll && downloadAllLabel && (
          <Container
            onClick={(allFiles || []).length > 1 ? downloadAllHandler : () => {}}
            ml={!share ? "auto" : "unset"}
          >
            <LinkAngle
              iconType="download"
              gap={1}
              color="#1890ff"
              label={downloadAllLabel}
              url={(allFiles || []).length > 1 || !allFiles?.[0]?.id ? "#" : `cap/content/${allFiles?.[0]?.id}/`}
              isExternal
              iconVerticalAlign="sub"
              loading={isDownloading}
            />
          </Container>
        )}

        {/* Share */}
        {share && (
          <Container ml={renderDownloadAll && downloadAllLabel ? 3 : "auto"} onClick={openModalHandler}>
            <LinkAngle
              iconType="upload"
              iconVerticalAlign="sub"
              label={share.label || ""}
              // color="#1890ff"
              url="#"
              gap={1}
            />
          </Container>
        )}
      </Column>

      <Modal
        openModalHandler={openModalHandler}
        show={modal}
        portalId="#portal"
      >
        <ShareModal
          title1={share?.title1}
          closeHandler={openModalHandler}
          url={share?.url || "#"}
          label=""
        />
      </Modal>
    </>
  );
};

export default PressReleaseDownloadShare;
