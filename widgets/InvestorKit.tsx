// Modules
import { IInvestorFile, IInvestorKit } from "../models/widgets/IInvestorKit";
import AppConfig from "../logic/configs/AppConfig";
import useDownloadFiles from "../hooks/useDownloadFiles";
import useResponsive from "../hooks/useResponsive";
import useGetTranslatedDate from "../hooks/useTranslatedDate";
// Components
import ReverseTheme from "../components/ReverseTheme/ReverseTheme";
import Center from "../components/UI/Center/Center";
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import Grid, { GridRow } from "../components/UI/Grid/Grid";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import Text from "../components/UI/Text/Text";
import BackgroundImage from "../components/UI/BackgroundImage/BackgroundImage";
import PressReleaseDownloadLink from "../components/PressRelease/PressReleaseDownloadLink";

interface IDownload {
  fileName: string;
  url: string;
}

const InvestorKit = ({
  cta,
  downloadLink,
  files,
  header,
  backgroundImage,
}: IInvestorKit) => {
  // Hooks
  const { getTranslatedDates } = useGetTranslatedDate({});
  const [isDownloading, startDownload] = useDownloadFiles(
    files?.map(
      (file: IInvestorFile): IDownload => ({
        fileName: file.fileName,
        url: file.url,
      })
    ) || []
  );

  // Handlers
  const downloadAllHandler = () => {
    if (isDownloading) return;

    if (files) {
      startDownload();
    }
  };

  return (
    <ReverseTheme>
      <Container
        overflow="hidden"
        position="relative"
        py={{ _: 0, desktopS: 5 }}
        maxWidth="screen"
        width="full"
        m="auto"
      >
        {backgroundImage && (
          <BackgroundImage
            src={backgroundImage}
            alt={backgroundImage}
            zIndex={-1}
          />
        )}
        <Container
          backgroundTheme
          py={{ _: 3, desktopS: 5 }}
          px={{ _: 2, desktopS: 8 }}
          maxWidth="928px"
          width="full"
          m="auto"
        >
          <Flex
            mb={{ _: 4 }}
            alignItems={{ _: "center" }}
            justifyContent={{ _: "space-between" }}
          >
            <Text
              fontSize={{ _: "h2" }}
              fontFamily="Avenir Medium"
              fontWeight="500"
            >
              {header}
            </Text>

            {downloadLink && (
              <Container onClick={() => downloadAllHandler()} minWidth="140px">
                <LinkAngle
                  iconType="download"
                  label={downloadLink}
                  url="#"
                  gap={1}
                  loading={isDownloading}
                  iconVerticalAlign="sub"
                />
              </Container>
            )}
          </Flex>

          <Grid gridGap={{ _: 3, desktopS: 4 }}>
            {files?.map((file: IInvestorFile, key: number) => (
              <GridRow key={key}>
                <Flex
                  alignItems={{ _: "start", desktopS: "center" }}
                  justifyContent={{ _: "", desktopS: "space-between" }}
                  flexDirection={{
                    _: "column",
                    desktopS: "row-reverse",
                  }}
                >
                  {file.date && (
                    <Text
                      color="neutral.70"
                      mb={{ _: 1, desktopS: 0 }}
                      fontSize={{ _: "h5" }}
                      fontFamily="Avenir Light"
                      fontWeight="light"
                    >
                      <InvestorKitDate date={file.date} />
                    </Text>
                  )}

                  <Container width="fit-content">
                    <PressReleaseDownloadLink
                      url={file.url}
                      label={file.label}
                      id={file.id}
                    />
                  </Container>
                </Flex>
              </GridRow>
            ))}
          </Grid>

          {cta && (
            <Center mt={{ _: 4 }}>
              <LinkAngle
                label={cta?.label}
                url={cta?.url}
                fontSize="h3"
                gap={1}
              />
            </Center>
          )}
        </Container>
      </Container>
    </ReverseTheme>
  );
};

const InvestorKitDate = ({ date }: { date: string }) => {
  // Hooks
  const { month, day, year } = useGetTranslatedDate({
    price: { date: date, time: "" },
  });
  return (
    <>
      {month} {day} {year}
    </>
  );
};

export default InvestorKit;
