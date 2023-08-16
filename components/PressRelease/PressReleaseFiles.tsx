import { IFiles } from "./IPressRelease";
import { IEvent } from "../../models/components/IEvent";
import AppConfig from "../../logic/configs/AppConfig";
// Components
import PressReleaseDownloadLink from "./PressReleaseDownloadLink";
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import Text from "../UI/Text/Text";
import { GridRow } from "../UI/Grid/Grid";

type Props = {
  longText?: string;
  files?: IFiles[][];
  oneColumnDownloads?: boolean;
  allFiles?: IFiles[];
  event?: IEvent;
  downloadOnly?: boolean;
};

const PressReleaseFiles = ({
  files,
  longText,
  oneColumnDownloads,
  allFiles,
  event,
  downloadOnly,
}: Props) => {
  // Hooks
  // Conditions
  const gridFileColumn = oneColumnDownloads ? "auto" : files && files?.length >= 2 ? "1fr 1fr" : "auto";

  return (
    <>
      {!longText && !event && files && !!files?.length && (
        <GridRow
          gridTemplateColumns={{ _: "auto", tablet: gridFileColumn }}
          gridGap={{ _: 2, tablet: 3 }}
          pb={!downloadOnly && allFiles && allFiles?.length > 1 ? 3 : 0}
        >
          {files?.map((file: any, key: number) => (
            <Flex flexDirection="column" key={key} width="fit-content">
              {file?.[0]?.category && (
                <Text fontSize="14px" mb={1} color="neutral.40" fontWeight="900" fontFamily="Avenir Bold">
                  {AppConfig.html(file?.[0]?.category)}
                </Text>
              )}

              {file?.map((downloadFile: IFiles, key: number) => (
                <Container key={key}>
                  <GridRow mb={key + 1 !== file.length ? 1 : 0}>
                    {downloadFile.url && (
                      <PressReleaseDownloadLink
                        url={downloadFile.url}
                        id={downloadFile.id}
                        label={downloadFile.label}
                        size={downloadFile.size}
                        fileName={downloadFile.fileName}
                      />
                    )}
                  </GridRow>

                  {downloadFile?.longText && (
                    <GridRow mt={2}>
                      <Text fontSize="h5">
                        {AppConfig.html(downloadFile?.longText)}
                      </Text>
                    </GridRow>
                  )}
                </Container>
              ))}
            </Flex>
          ))}
        </GridRow>
      )}
    </>
  );
};

export default PressReleaseFiles;
