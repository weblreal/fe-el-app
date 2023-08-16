// Modules
import { IPressRelease } from "./IPressRelease";
// Components
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import Grid from "../UI/Grid/Grid";
import Hidden from "../UI/Hidden/Hidden";
import PressReleaseTags from "./PressReleaseTags";
import PressReleaseTitle from "./PressReleaseTitle";
import PressReleaseLongText from "./PressReleaseLongText";
import PressReleaseFiles from "./PressReleaseFiles";
import PressReleaseEvents from "./PressReleaseEvents";
import PressReleaseCTA from "./PressReleaseCTA";
import PressReleaseDownloadShare from "./PressReleaseDownloadShare";
import PressReleaseDate from "./PressReleaseDate";
import useGetTheme from "../../hooks/useGetTheme";

const PressRelease = ({
  date,
  tag,
  title,
  files,
  allFiles,
  singleFile,
  cta,
  longText,
  share,
  event,
  oneColumnDownloads,
  downloadAllLabel,
  noBorder,
  tags,
  downloadOnly,
  isTitleLinkToPDF,
  hideDay,
}: IPressRelease) => {
  // Conditions
  const renderRow1 = tag || date;
  const renderRow2 = longText || title || !!allFiles?.length || !!files?.length;
  const renderRow3 =
    (!downloadOnly && allFiles && allFiles?.length > 1) || cta || share;

  // Hooks
  const theme = useGetTheme();

  return (
    <Container
      p={3}
      border={noBorder ? "none" : "thin"}
      borderColor={theme.name === "Dark Theme" ? "neutral.20" : "neutral.10"}
      backgroundTheme
    >
      {/* Row 1 */}
      {renderRow1 && (
        <Flex
          flexDirection={{ _: "column", tablet: "unset" }}
          mb={{ _: 2, tablet: 1 }}
        >
          <PressReleaseTags tag={tag} tags={tags} />
          <PressReleaseDate date={date} hideDay={hideDay} />
        </Flex>
      )}

      {/* Row 2 */}
      {renderRow2 && (
        <Grid gridGap={1} pb={cta || share ? 3 : 0}>
          <PressReleaseTitle
            allFiles={allFiles}
            title={title}
            longText={longText}
            url={cta?.url}
            isTitleLinkToPDF={isTitleLinkToPDF}
          />

          <PressReleaseLongText longText={longText} />

          <PressReleaseFiles
            allFiles={allFiles}
            files={files}
            longText={longText}
            oneColumnDownloads={oneColumnDownloads}
            event={event}
            downloadOnly={downloadOnly}
          />

          <PressReleaseEvents event={event} />

          {longText && (
            <Hidden from="tablet">
              <PressReleaseCTA cta={cta} />
            </Hidden>
          )}
        </Grid>
      )}

      {/* Row 3 */}
      {renderRow3 && (
        <Flex
          justifyContent={{
            _: "space-between ",
            tablet: cta ? "space-between" : "end",
          }}
          alignItems="center"
          flexDirection={{ _: "row", tablet: "row" }}
          borderTop={
            longText || !!files?.length ? { _: "thin", tablet: "none" } : "none"
          }
          borderTopColor="neutral.10"
        >
          {/* left */}
          {!longText && (
            <Hidden till="tablet">
              <Container
                pt={{ _: downloadAllLabel || share ? 3 : 0, tablet: 0 }}
              >
                <PressReleaseCTA cta={cta} />
              </Container>
            </Hidden>
          )}

          {longText && (
            <Hidden till="tablet">
              <Container
                pt={{ _: downloadAllLabel || share ? 3 : 0, tablet: 0 }}
              >
                <PressReleaseCTA cta={cta} />
              </Container>
            </Hidden>
          )}

          {!longText && (
            <Hidden from="tablet">
              <Container
                pt={{ _: downloadAllLabel || share ? 3 : 0, tablet: 0 }}
              >
                <PressReleaseCTA cta={cta} />
              </Container>
            </Hidden>
          )}

          {/* Right */}
          <PressReleaseDownloadShare
            fullWidth={!!longText}
            allFiles={allFiles}
            share={share}
            singleFile={singleFile}
            downloadAllLabel={downloadAllLabel}
          />
        </Flex>
      )}
    </Container>
  );
};

export default PressRelease;
