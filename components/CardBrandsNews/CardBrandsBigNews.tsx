// Modules
import AppConfig from "../../logic/configs/AppConfig";
import Link from "next/link";
import { IBrandsNews } from "../../models/widgets/IBrandsNewsRow";
import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
// Components
import Icon from "../UI/Icon/Icon";
import Text from "../UI/Text/Text";
import Column from "../UI/Column/Column";
import Picture from "../UI/Picture/Picture";
import Row from "../UI/Row/Row";
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import ClientOnlyPortal from "../ClientOnlyPortal/ClientOnlyPortal";
import ReverseTheme from "../ReverseTheme/ReverseTheme";
import Center from "../UI/Center/Center";
import Grid from "../UI/Grid/Grid";
import Input from "../UI/Input/Input";
import LinkAngle from "../UI/LinkAngle/LinkAngle";

const CardBrandsBigNews = ({
  backgroundImage,
  date,
  title,
  cta,
  longText,
  tagArray,
  tagCta,
}: IBrandsNews) => {
  // Hooks
  const [modal, setModal] = useState(false);
  const router = useRouter();

  //To convert <em> tags
  let rawText: any = AppConfig.html(longText);
  let details = rawText?.props?.children?.props?.children;

  return (
    <Row
      position="relative"
      width="full"
      maxWidth="screen"
      minHeight="384px"
      border="thin"
      borderColor="neutral.10"
      backgroundColor="background"
      marginBottom="32px"
    >
      {backgroundImage && (
        <Column width="50%" height="384px">
          <Link prefetch={false} href={cta?.url || ""}>
            <Flex width="full" height="384px">
              <Picture alt="bg" src={backgroundImage} objectFit="cover" />
            </Flex>
          </Link>
        </Column>
      )}

      {/* Tag */}
      {tagArray && tagArray?.length > 0 && (
        <Flex zIndex={1} position="absolute" left={2} top={2}>
          {tagArray.map((tag: any, key: number) => (
            <Container key={key}>
              {key < 2 && (
                <Container
                  pt="7.7px"
                  pb="8.1px"
                  px={2}
                  backgroundColor="rgba(0,0,0,0.4)"
                  borderRadius={{ _: 0, tablet: 100 }}
                  width="fit-content"
                  noSelect
                  marginRight="5px"
                >
                  <Link href={`${tagCta?.url ? tagCta?.url : ""}#S__${tag[router.locale || "en"]}`} key={key}>
                    <Text
                      color="white"
                      fontSize="19.4px"
                      fontFamily="Avenir Roman"
                    >
                      {tag[router.locale || "en"]?.toLocaleUpperCase()}
                    </Text>
                  </Link>
                </Container>
              )}
              {key == 2 && (
                <Container
                  pt="7.7px"
                  pb="8.1px"
                  px={2}
                  backgroundColor="rgba(0,0,0,0.4)"
                  borderRadius={{ _: 0, tablet: 100 }}
                  width="fit-content"
                  noSelect
                  key={key}
                  marginRight="5px"
                >
                  <Text
                    color="white"
                    fontSize="19.4px"
                    fontFamily="Avenir Roman"
                  >
                    + {tagArray.length - 2}
                  </Text>
                </Container>
              )}
            </Container>
          ))}
        </Flex>
      )}

      <Column p="32px 24px" width="50%" height="384px">
        {/* Date */}
        {date && (
          <Text fontSize="h5" color="#6d6e71" mb="8px">
            {date}
          </Text>
        )}

        {/* Title */}
        {title && (
          <Column>
            <Text
              fontWeight={{ _: "normal", tablet: "bold" }}
              fontFamily={{ _: "Avenir Regular", tablet: "Avenir Black" }}
              fontSize="h3"
              minHeight="auto"
              mb="8px"
            >
              <Link prefetch={false} href={cta?.url || ""}>
                {AppConfig.html(title)}
              </Link>
            </Text>
          </Column>
        )}

        {/*Long text*/}
        {longText && (
          <Column>
            <Text
              fontWeight="normal"
              fontFamily="Avenir Roman"
              fontSize="16px"
              height="auto"
              mb="17px"
            >
              {AppConfig.html(details)}
            </Text>
          </Column>
        )}

        {/* CTA */}
        {cta && cta.url && (
          <Row justifyContent="space-between">
            <LinkAngle
              label={cta.label}
              url={cta.url}
              fontSize="h5"
              // fontWeight={{ _: "normal", tablet: "bold" }}
              fontFamily={{ _: "Avenir Bold", tabet: "Avenir Regular" }}
              gap={0}
            />
            <Container pointer onClick={() => setModal(true)}>
              <Icon type="upload" size={24} color="#1890ff" />
            </Container>
          </Row>
        )}
      </Column>

      <ClientOnlyPortal selector="#portal">
        <AnimatePresence>
          {modal && (
            <>
              <Container
                position="fixed"
                top={0}
                left={0}
                height="full"
                width="full"
                backgroundColor="neutral.60"
                zIndex={9999}
                pointer
                onClick={() => setModal(false)}
              ></Container>
              <ShareModal
                closeHandler={() => setModal(false)}
                link={cta?.url}
              />
            </>
          )}
        </AnimatePresence>
      </ClientOnlyPortal>
    </Row>
  );
};

const ShareModal = ({
  closeHandler,
  link,
}: {
  closeHandler: () => void;
  link?: string;
}) => {
  // Hook
  const [copied, setCopied] = useState(false);

  // Functions
  const onCopyText = (elem: any) => {
    elem.select();
    document.execCommand("copy");
    setCopied(true);
  };

  return (
    <Modal
      p={3}
      position="fixed"
      maxWidth="screen4"
      width="full"
      height="500px"
      zIndex={9999}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <Container
        backgroundColor="neutral.70"
        zIndex={-2}
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        top={0}
      />
      <BlurContainer
        position="absolute"
        top={0}
        left={0}
        width="full"
        height="full"
        zIndex={-3}
      ></BlurContainer>

      <ReverseTheme>
        <Center pointer width={40} height={40} ml="auto" onClick={closeHandler}>
          <Icon type="close" size={40} />
        </Center>

        <Container mb={5}>
          <Text
            fontSize="h2"
            fontFamily="Avenir Bold"
            textAlign="center"
            my={3}
          >
            Share it with your social community
          </Text>

          <Text textAlign="center" mb={2} fontSize="h5">
            SHARE
          </Text>

          <Grid
            gridGap={2}
            gridTemplateColumns="24px 24px 24px 24px"
            justifyContent="center"
          >
            <LinkedinShareButton url={`${window.location.origin}/${link}`}>
              <Icon type="linkedin" size={24} />
            </LinkedinShareButton>
            <FacebookShareButton url={`${window.location.origin}/${link}`}>
              <Icon type="facebook" size={24} />
            </FacebookShareButton>
            <TwitterShareButton url={`${window.location.origin}/${link}`}>
              <Icon type="twitter" size={24} />
            </TwitterShareButton>
            <EmailShareButton url={`${window.location.origin}/${link}`}>
              <Icon type="mail" size={24} />
            </EmailShareButton>
          </Grid>
        </Container>

        <Container>
          <Text fontSize="h5" textAlign="center" mb={2}>
            Or copy the link below
          </Text>
          <Container margin="auto" maxWidth="417px" mb={2}>
            <Input
              transparent={false}
              icon="copy"
              value={`${window.location.origin}/${link}`}
              onIconClick={onCopyText}
            />
          </Container>

          {copied && (
            <Container>
              <Text fontSize="h6" textAlign="center">
                Copied
              </Text>
            </Container>
          )}
        </Container>
      </ReverseTheme>
    </Modal>
  );
};

const BlurContainer = styled(Container)`
  backdrop-filter: blur(10px);
`;

const Modal = styled(Container)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default CardBrandsBigNews;
