import { AnimatePresence } from "framer-motion";
import { IModal } from "./IModal";
// Components
import ClientOnlyPortal from "../ClientOnlyPortal/ClientOnlyPortal";
import Container from "../UI/Container/Container";
import AppConfig from "../../logic/configs/AppConfig";

const Modal = ({ children, portalId, show, openModalHandler }: IModal) => {
  return portalId ? (
    <ClientOnlyPortal selector={portalId}>
      <AnimatePresence>
        {show && (
          <Container
            variants={AppConfig.setAnimationVariant("OPACITY_VARIANT")}
            initial="hide"
            animate="show"
            exit="hide"
            transition={{ duration: 0.1 }}
          >
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
            {children}
          </Container>
        )}
      </AnimatePresence>
    </ClientOnlyPortal>
  ) : null;
};

export default Modal;
