// Modules
import { AnimatePresence } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import AppConfig from "../../logic/configs/AppConfig";
import { IAccordion } from "../../models/components/IAccordion";
import { IFiles } from "../PressRelease/IPressRelease";
import { useEffect } from "react";
// Components
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import Icon from "../UI/Icon/Icon";
import MotionContainer from "../UI/MotionContainer/MotionContainer";
import Text from "../UI/Text/Text";
import Hidden from "../UI/Hidden/Hidden";

interface IAccordionProps extends IAccordion<IFiles[][]> {
  children: ReactNode;
}

const AccordionLarge = ({
  header,
  toggleLabelOn,
  toggleLabelOff,
  children,
  open = false,
  onClick,
}: IAccordionProps) => {
  // Hooks
  const [show, setShow] = useState(open);

  // Handler
  const toggleHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    let timeout;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      if (event.target) {
        const element = event.target as HTMLDivElement;
        const yOffset = -200;

        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        if (global.window) window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 500);

    if (onClick) {
      onClick();
    }

    setShow((prev) => !prev);
  };

  useEffect(() => {
    setShow(open);
  }, [open]);

  return (
    <Container borderBottom="thin" borderColor="neutral.20" overflow="hidden">
      <Flex
        pt={{ _: 24, desktopS: 3 }}
        pb={{ _: 26, desktopS: 3 }}
        px={{ _: 2, desktopS: 0 }}
        alignItems="start"
        justifyContent="space-between"
        width="full"
        pointer
        onClick={toggleHandler}
      >
        {header && (
          <Text fontFamily="Avenir Bold" fontSize={{ _: "h5", desktopS: "h5" }}>
            {header}
          </Text>
        )}

        <Flex
          alignItems="center"
          width="full"
          maxWidth="190px"
          justifyContent="end"
          ml="auto"
        >
          <Hidden till="tablet">
            <Text mr="4px" fontSize="h5">
              {show ? toggleLabelOff : toggleLabelOn}
            </Text>
          </Hidden>
          <Icon type={!show ? "angle-down" : "angle-up"} size={24} />
        </Flex>
      </Flex>

      <AnimatePresence>
        {show && (
          <MotionContainer
            initial="initial"
            animate="animate"
            exit="exit"
            variants={AppConfig.setAnimationVariant("EXPAND_VARIANT_NO_DELAY")}
          >
            {children}
          </MotionContainer>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default AccordionLarge;
