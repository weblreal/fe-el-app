import styled from "styled-components";
import useResponsive from "../../hooks/useResponsive";
import { ISolutionBrands } from "../../models/widgets/ISolutionsOpticians";
import ClientOnlyPortal from "../ClientOnlyPortal/ClientOnlyPortal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import Container from "../UI/Container/Container";
import Picture from "../UI/Picture/Picture";
import BrandModal from "./BrandModal";

const PictureWrapper = styled(Container)`
  display: flex;
  position: relative;
`;

const BrandWithModal = ({ logo, longText, name, cta = []}: ISolutionBrands) => {
  // Hooks
  const { is } = useResponsive();
  const [show, setShow] = useState(false);

  return (
    <>
      <PictureWrapper
        width="full"
        height="full"
        maxWidth={{ _: "179px", desktopS: "200px" }}
        maxHeight={{ _: "89.5px", desktopS: "100px" }}
        pointer
        onClick={() => setShow(true)}
      >
        <Picture
          src={logo}
          alt={name || logo}
          width={is("desktopS", "<") ? 179 : 207.5}
          height={is("desktopS", "<") ? 89.5 : 113.9}
          objectFit="contain"
        />
      </PictureWrapper>

      {/* Modal */}
      <ClientOnlyPortal selector="#portal">
        <AnimatePresence>
          {show && (
            <BrandModal
              title={name}
              longText1={longText}
              logoImage={[logo]}
              modalHandler={() => setShow(false)}
              cta={cta}
            />
          )}
        </AnimatePresence>
      </ClientOnlyPortal>
    </>
  );
};

export default BrandWithModal;
