import PressRelease from "../components/PressRelease/PressRelease";
import AppConfig from "../logic/configs/AppConfig";
import { IServiceAccordion } from "../models/widgets/IServiceAccordion";
import { IAccordion } from "../models/components/IAccordion";
import { IFiles } from "../components/PressRelease/IPressRelease";
import { useState } from "react";
// Components
import Container from "../components/UI/Container/Container";
import Grid from "../components/UI/Grid/Grid";
import Text from "../components/UI/Text/Text";
import AccordionLarge from "../components/AccordionLarge/AccordionLarge";
import ServiceHeader from "../components/ServiceAccordion/ServiceHeader";
import ServiceLongText from "../components/ServiceAccordion/ServiceLongText";
import VideoBanner from "../components/VideoBanner/VideoBanner";

const ServiceAccordion = ({
  items,
  topText,
  bottomText,
}: IServiceAccordion) => {
  // Hooks
  const [active, setActive] = useState(0);

  const onClickHandler = (index: number) => {
    setActive(index);
  };

  return (
    <Container
      maxWidth="screen4"
      width="full"
      m="auto"
      pt={!topText ? 5 : 0}
      pb={5}
    >
      {/* Top Text */}
      {topText && <ServiceHeader topText={topText} />}

      <Grid>
        {items?.map((accordion: IAccordion<IFiles[][]>, key: number) => (
          <AccordionLarge
            key={key}
            {...accordion}
            open={active === key}
            onClick={() => onClickHandler(key)}
          >
            <Container
              backgroundColor={{ _: "neutral.5", desktopS: "background" }}
              pb={{ desktopS: 3 }}
            >
              {/* Long Text */}
              {accordion?.longText && (
                <ServiceLongText longText={accordion?.longText} />
              )}

              {((accordion?.pressRelease &&
                !!accordion?.pressRelease?.length) ||
                accordion.cta) && (
                <Container
                  key={key}
                  py={{ _: 2, desktopS: 3 }}
                  px={{ _: 2, desktopS: 0 }}
                >
                  <PressRelease
                    files={accordion.pressRelease}
                    allFiles={accordion.allFiles}
                    downloadOnly={true}
                    cta={accordion.cta}
                    oneColumnDownloads
                  />
                </Container>
              )}

              {/* Video */}
              {accordion.video?.src && (
                <Container
                  backgroundColor={{ _: "neutral.5", desktopS: "background" }}
                  pb={{ desktopS: 3 }}
                  position="relative"
                  height="500px"
                >
                  <VideoBanner
                    src={accordion.video?.src}
                    play={true}
                    controls
                  />
                </Container>
              )}
            </Container>
          </AccordionLarge>
        ))}
      </Grid>

      {/* Bottom Text */}
      {bottomText && (
        <Text
          fontFamily="Avenir Light"
          fontWeight="light"
          fontSize="h5"
          py={{ _: 3, desktopS: 5 }}
          px={{ _: 2, desktopS: 0 }}
        >
          {AppConfig.html(bottomText)}
        </Text>
      )}
    </Container>
  );
};

export default ServiceAccordion;
