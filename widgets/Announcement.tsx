// Modules
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IAnnouncement } from "../models/widgets/IAnnouncement";
import AppConfig from "../logic/configs/AppConfig";

// Components
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import Header from "../components/UI/Header/Header";
import Icon from "../components/UI/Icon/Icon";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import LongText from "../components/UI/LongText/LongText";
import Row from "../components/UI/Row/Row";
import Hidden from "../components/UI/Hidden/Hidden";
import ReverseTheme from "../components/ReverseTheme/ReverseTheme";

const Announcement: React.FC<IAnnouncement> = ({ cta, header, longText }) => {
  // Hooks
  const [show, setShow] = useState(false);

  // Variables
  const opacity = {
    variants: AppConfig.setAnimationVariant("OPACITY_VARIANT"),
    animate: "show",
    exit: "hide",
    initial: "hide",
    transition: { delay: 0.5 },
  };

  // Functions
  const showHandler = () => {
    setShow((prev) => !prev);
  };
  // Effects

  return (
    <>
      <ReverseTheme>
        <AnimatePresence>
          {!show ? (
            <ClosedSpeaker onClick={showHandler} />
          ) : (
            <Container
              position="fixed"
              zIndex={888}
              bottom={{ _: "unset", tablet: 104 }}
              top={{ _: 123, tablet: "unset" }}
              right={{ _: "unset", tablet: 0 }}
              left={{ _: "16px", tablet: "unset" }}
              p={{ _: 2, tablet: 3 }}
              backgroundTheme
              maxWidth={{ _: "full", tablet: "648px" }}
              width="calc(100% - 32px)"
              layoutId="wrapper"
            >
              <Flex justifyContent="center" alignContent="center">
                <Row
                  alignItems="center"
                  width="full"
                  justifyContent="space-between"
                  mb={2}
                >
                  <Flex alignItems="center">
                    <Container layoutId="speaker">
                      <Speaker />
                    </Container>

                    {header && (
                      <Container {...opacity}>
                        <Header fontSize={{ _: "16px", tablet: "20px" }} ml={2}>
                          {header}
                        </Header>
                      </Container>
                    )}
                  </Flex>

                  {/* Close */}
                  <Flex
                    alignItems="center"
                    pointer
                    onClick={showHandler}
                    className="tappable"
                    {...opacity}
                  >
                    <Close />
                  </Flex>
                </Row>
              </Flex>
              {longText && (
                <Flex mb={2} {...opacity}>
                  <LongText fontSize={{ _: 16, tablet: 18 }}>
                    {AppConfig.html(longText)}
                  </LongText>
                </Flex>
              )}
              {cta?.label && cta?.url && (
                <Flex {...opacity}>
                  <LinkAngle
                    url={cta?.url}
                    label={cta?.label}
                    gap={0}
                    fontSize={{ _: 16, tablet: 18 }}
                  />
                </Flex>
              )}
            </Container>
          )}
        </AnimatePresence>
      </ReverseTheme>
    </>
  );
};

interface IClosed {
  onClick: () => void;
}

const ClosedSpeaker = ({ onClick }: IClosed) => {
  return (
    <Flex
      position="fixed"
      bottom={{ _: "unset", tablet: 104 }}
      top={{ _: 123, tablet: "unset" }}
      right={0}
      zIndex={999}
      p={{ _: 2, tablet: 3 }}
      backgroundTheme
      width="fit-content"
      alignItems="center"
      pointer
      onClick={onClick}
      layoutId="wrapper"
    >
      <Flex layoutId="speaker">
        <Hidden from="tablet">
          <Icon type="announcement" size={24} />
        </Hidden>

        <Hidden till="tablet">
          <Icon type="announcement" size={40} />
        </Hidden>
      </Flex>
    </Flex>
  );
};

const Speaker = () => {
  return (
    <>
      <Hidden till="tablet">
        <Icon type="announcement" size={40} />
      </Hidden>
      <Hidden from="tablet">
        <Icon type="announcement" size={24} />
      </Hidden>
    </>
  );
};

const Close = () => {
  return (
    <>
      <Hidden till="tablet">
        <Icon type="close" size={40} />
      </Hidden>
      <Hidden from="tablet">
        <Icon type="close" size={24} />
      </Hidden>
    </>
  );
};

export default Announcement;
