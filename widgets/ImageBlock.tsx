// Modules
import React from "react";
import { IImageBlock } from "../models/widgets/IImageBlock";
// Components
import Flex from "../components/UI/Flex/Flex";
import Picture from "../components/UI/Picture/Picture";
import Hidden from "../components/UI/Hidden/Hidden";
import Text from "../components/UI/Text/Text";
import AppConfig from "../logic/configs/AppConfig";

const ImageBlock = ({ backgroundImage, objectFit, longText }: IImageBlock) => {
  // Hooks

  return (
    <>
      <Flex
        maxWidth="screen"
        width="full"
        height={{
          _: objectFit?.mobile === "contain" ? "unset" : "400px",
          tablet: objectFit?.desktop === "contain" ? "unset" : "580px",
        }}
        overflow="hidden"
        margin="auto"
      >
        <Hidden till="tablet">
          {backgroundImage?.desktop && (
            <Picture
              alt="sample"
              src={backgroundImage?.desktop || ""}
              objectFit={objectFit?.desktop}
            ></Picture>
          )}
        </Hidden>
        <Hidden from="tablet">
          {backgroundImage?.mobile && (
            <Picture
              alt="sample"
              src={backgroundImage?.mobile || ""}
              objectFit={objectFit?.mobile}
            ></Picture>
          )}
        </Hidden>
      </Flex>

      {longText && (
        <Text
          fontSize={{ _: 16, tablet: 21 }}
          my={{ _: 5, tablet: 10 }}
          px={{ _: 2, desktopS: 0 }}
          mx="auto"
          textAlign="center"
          maxWidth={{ desktopS: "screen3", desktopXL: "screen2" }}
        >
          {AppConfig.html(longText || "")}
        </Text>
      )}
    </>
  );
};

export default ImageBlock;
