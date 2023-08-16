import { useState } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import styled from "styled-components";
import AppConfig from "../../logic/configs/AppConfig";
import { IShare } from "../PressRelease/IPressRelease";
import ReverseTheme from "../ReverseTheme/ReverseTheme";
import Center from "../UI/Center/Center";
import Container from "../UI/Container/Container";
import Grid from "../UI/Grid/Grid";
import Icon from "../UI/Icon/Icon";
import Input from "../UI/Input/Input";
import Text from "../UI/Text/Text";

interface IShareModal extends IShare {
  closeHandler: () => void;
}

const ShareModal = ({
  closeHandler,
  title1,
  title2,
  title3,
  url,
}: IShareModal) => {
  // Hook
  const [copied, setCopied] = useState(false);

  // Functions
  const onCopyText = (elem: any) => {
    elem.select();
    document.execCommand("copy");
    setCopied(true);
  };

  // Effects
  // useEffect(() => {
  //   const test = null;
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.overflow = "initial";
  //   };
  // }, []);

  return (
    <Modal
      p={3}
      position="fixed"
      maxWidth="863px"
      width={{ _: "calc(100% - 32px)", desktopS: "full" }}
      top={{ _: "calc(406px / 2 + 48px)", desktopS: "50%" }}
      minHeight={{ _: 420, desktopS: 406 }}
      zIndex={9999}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
    >
      <ReverseTheme>
        <Container
          backgroundColor="neutral.60"
          zIndex={-2}
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
        />
      </ReverseTheme>
      <BlurContainer
        position="absolute"
        top={0}
        left={0}
        width="full"
        height="full"
        zIndex={-3}
      ></BlurContainer>

      <Center pointer width={40} height={40} ml="auto" onClick={closeHandler}>
        <Icon type="close" size={40} />
      </Center>

      <Container mb={5}>
        <Text
          fontSize="h2"
          fontWeight="bolder"
          fontFamily="Avenir Bold"
          textAlign="center"
          my={3}
        >
          {AppConfig.html(title1)}
        </Text>

        <Text textAlign="center" mb={2} fontSize="h5">
          {AppConfig.html(title2)}
        </Text>

        <Grid
          gridGap={2}
          gridTemplateColumns="24px 24px 24px 24px"
          justifyContent="center"
        >
          <LinkedinShareButton url={`${window.location.origin}/${url}`}>
            <Icon type="linkedin" size={24} />
          </LinkedinShareButton>
          <FacebookShareButton url={`${window.location.origin}/${url}`}>
            <Icon type="facebook" size={24} />
          </FacebookShareButton>
          <TwitterShareButton url={`${window.location.origin}/${url}`}>
            <Icon type="twitter" size={24} />
          </TwitterShareButton>
          <EmailShareButton url={`${window.location.origin}/${url}`}>
            <Icon type="mail" size={24} />
          </EmailShareButton>
        </Grid>
      </Container>

      <Container>
        <Text fontSize="h5" textAlign="center" mb={2}>
          {AppConfig.html(title3)}
        </Text>
        <Container margin="auto" maxWidth="417px" mb={2}>
          <Input
            transparent={false}
            icon="copy"
            value={url ? `${window.location.origin}/${url}` : ""}
            onIconClick={onCopyText}
          />
        </Container>

        {/* {copied && (
            <Container>
              <Text fontSize="h6" textAlign="center">
                Copied
              </Text>
            </Container>
          )} */}
      </Container>
    </Modal>
  );
};

const Modal = styled(Container)`
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BlurContainer = styled(Container)`
  backdrop-filter: blur(19px);
`;

export default ShareModal;
