import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IAccordion } from "./IAccordion";
import AppConfig from "../../logic/configs/AppConfig";
// Components
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import MotionContainer from "../UI/MotionContainer/MotionContainer";
import Text from "../UI/Text/Text";
import Icon from "../UI/Icon/Icon";

const Accordion = ({
  header,
  children,
  border,
  spaceProps,
  initialState,
}: IAccordion) => {
  // Hooks
  const [show, setShow] = useState<boolean>(!!initialState);
  const [isVisible, setIsVisible] = useState<boolean>(!!initialState);

  // Handler
  const toggleHandler = () => {
    setShow((prev) => !prev);
  };

  // Effects
  useEffect(() => {
    if (!show) {
      setIsVisible(false);
    } else {
      const timeout = setTimeout(() => {
        setIsVisible(show);
      }, 500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [show]);

  return (
    <Container
      borderTop={border ? "thin" : "unset"}
      borderBottom={border ? "thin" : "unset"}
      borderColor="neutral.20"
      overflow={isVisible ? "visible" : "hidden"}
      px={2}
      py="21px"
      {...spaceProps}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width="full"
        pointer
        onClick={toggleHandler}
      >
        {header && (
          <Text fontFamily="Avenir Bold" fontSize="18px">
            {header}
          </Text>
        )}

        <Flex alignItems="center">
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
            <Container pb="21px">{children}</Container>
          </MotionContainer>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Accordion;
