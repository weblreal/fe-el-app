import { useState } from "react";
import { IBrandsItem } from "../../models/widgets/IBrandsGrid";
import styled from "styled-components";
// Components
import Container from "../UI/Container/Container";
import Picture from "../UI/Picture/Picture";
import Flex from "../UI/Flex/Flex";
import ClientOnlyPortal from "../ClientOnlyPortal/ClientOnlyPortal";
import Hidden from "../UI/Hidden/Hidden";
import BrandModal from "../BrandWithModal/BrandModal";

const BrandsGridItem = ({
  title,
  title2,
  longText1,
  logoImage,
  cta,
  onClick,
  active,
}: IBrandsItem) => {
  const blackLogo = logoImage?.[0];
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Flex
        position="relative"
        width="full"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#fff"
        style={{ cursor: "pointer" }}
        onClick={() => (onClick ? onClick() : setShowModal(true))}
        px={3}
      >
        {active && (
          <Container
            position="absolute"
            top={0}
            left={0}
            height="full"
            width="full"
            backgroundColor="rgba(0, 0, 0, 0.2)"
            zIndex={2}
          ></Container>
        )}

        <Logo width={{ _: "140px", tablet: "150px", desktopS: "260px" }} height="full" py={2}>
          <Hidden till="desktopS">
            <Picture
              src={blackLogo}
              width={260}
              height={130}
              objectFit="contain"
              alt="logo"
              className="123123"
            ></Picture>
          </Hidden>
          <Hidden from="desktopS">
            <Picture
              src={blackLogo}
              width={150}
              height={75}
              objectFit="contain"
              alt="logo"
            ></Picture>
          </Hidden>
        </Logo>
      </Flex>
      <ClientOnlyPortal selector="#portal">
        {showModal && (
          <BrandModal
            title={title}
            title2={title2}
            longText1={longText1}
            logoImage={logoImage}
            modalHandler={() => setShowModal(false)}
            cta={cta}
          />
        )}
      </ClientOnlyPortal>
    </>
  );
};

const Logo = styled(Flex)`
  align-items: center;
  filter: grayscale(1);
`;

export default BrandsGridItem;
