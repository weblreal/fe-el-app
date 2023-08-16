import styled from "styled-components";
import AppConfig from "../../logic/configs/AppConfig";
import { ICta } from "../../models/components/ICta";
import { IBrandsItem } from "../../models/widgets/IBrandsGrid";
import { useEffect } from "react";
// Components
import Container from "../UI/Container/Container";
import Column from "../UI/Column/Column";
import Flex from "../UI/Flex/Flex";
import Hidden from "../UI/Hidden/Hidden";
import Icon from "../UI/Icon/Icon";
import Picture from "../UI/Picture/Picture";
import Row from "../UI/Row/Row";
import Text from "../UI/Text/Text";
import LinkAngle from "../UI/LinkAngle/LinkAngle";
import Grid from "../UI/Grid/Grid";

interface IBrandModal extends IBrandsItem {
  modalHandler?: () => void;
}

const BrandModal = ({
  title,
  title2,
  cta,
  logoImage,
  longText1,
  modalHandler,
}: IBrandModal) => {
  // Effects
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  // Handlers
  const closeHandler = () => {
    if (modalHandler) modalHandler();
  };

  return (
    <Modal
      justifyContent="center"
      alignItems="center"
      variants={AppConfig.setAnimationVariant("OPACITY_VARIANT")}
      initial="hide"
      animate="show"
      exit="hide"
      transition={{ duration: 0.1 }}
    >
      <Overlay onClick={closeHandler} />

      {/* Content */}
      <Flex
        width={{ _: "calc(100% - 32px)", tablet: "863px" }}
        height={{ _: "90%", tablet: "601px" }}
        position="relative"
        justifyContent="center"
        m="auto"
      >
        <BackDrop />

        <Column
          position="absolute"
          alignItems="center"
          justifyContent={{ _: "start", desktopS: "center" }}
          width={{ _: "100%", tablet: "full" }}
          height={{ _: "full", tablet: "full" }}
          pt={88}
        >
          {/* Logo */}
          <Hidden till="tablet">
            <Picture
              width={200}
              height={100}
              src={logoImage?.[0]}
              alt={title || logoImage?.[0]}
              objectFit="contain"
            ></Picture>
          </Hidden>

          <Hidden from="tablet">
            <Picture
              width={200}
              height={100}
              src={logoImage?.[0]}
              alt={title || logoImage?.[0]}
              objectFit="contain"
            ></Picture>
          </Hidden>

          {/* Title */}
          <Text mt="24px" fontSize="20px" color="#000">
            {title}
          </Text>

          {/* Title 2 */}
          <Text mb="24px" color="rgba(0, 0, 0, 0.6)" fontSize="16px">
            {title2}
          </Text>

          {/* Long Text */}
          <LongTextContainer mb={{ _: 3, tablet: 5 }} overflowY="auto">
            <Container
              m="auto"
              width={{ _: "full", tablet: "663px" }}
              px={{ _: 3, tablet: 0 }}
            >
              <Text color="#000">{AppConfig.html(longText1)}</Text>
            </Container>
          </LongTextContainer>

          {/* CTAs */}
          <Hidden till="tablet">
            <Flex
              alignSelf="flex-start"
              width="full"
              mx="auto"
              py={4}
              borderTop={!!(cta || []).length ? "thin" : "none"}
              borderColor="neutral.10"
              mt="auto"
            >
              <Flex
                justifyContent="start"
                flexWrap="wrap"
                maxWidth="663px"
                m="auto"
                width="full"
                mb={-12}
              >
                {cta &&
                  cta.map((link: ICta, key: number) => (
                    <Row key={key} justifyContent="center" mr={3} mb={12}>
                      <LinkAngle
                        label={link.label}
                        url={link.url}
                        iconType="external-link"
                        color="#0077d7"
                        fontSize={{ _: "16px", tablet: "16px" }}
                        gap={0}
                        isExternal
                        textVerticalAlign="top"
                      />
                    </Row>
                  ))}
              </Flex>
            </Flex>
          </Hidden>

          <Hidden from="tablet">
            {cta && cta.length > 0 && (
              <hr
                style={{
                  width: "100%",
                  border: "solid 1px rgba(0, 0, 0, 0.1)",
                  marginTop: "auto",
                }}
              />
            )}
            <Grid
              py={2}
              px={3}
              width={{ _: "full", tablet: "663px" }}
              mx="auto"
              gridTemplateColumns={{ _: "100%", tablet: "50% 50%" }}
              gridGap="8px"
            >
              {cta &&
                cta.map((link: ICta, key: number) => (
                  <Container width="fit-content" key={key}>
                    <LinkAngle
                      url={link.url}
                      iconType="external-link"
                      color="#0077d7"
                      label={link.label}
                      isExternal
                      gap={2.5}
                      fontSize={16}
                    />
                  </Container>
                ))}
            </Grid>
          </Hidden>
        </Column>

        {/* Close Button */}
        <CloseButton onClick={closeHandler} style={{ cursor: "pointer" }}>
          <Icon type="close" size={40} color="black"></Icon>
        </CloseButton>
      </Flex>
    </Modal>
  );
};

const Modal = styled(Flex)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;

const BackDrop = styled(Container)`
  width: 100%;
  height: 100%;
  position: absolute;
  backdrop-filter: blur(19px);
  background-color: rgba(255, 255, 255, 0.8);
`;

const Overlay = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled(Container)`
  position: absolute;
  top: 24px;
  right: 24px;
`;

const LongTextContainer = styled(Text)`
  &::-webkit-scrollbar {
    cursor: pointer;
    width: 4px;
    position: relative;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.neutral["10"]};
    border-radius: 2px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.text};
    margin-right: 1em;
  }
`;
export default BrandModal;
