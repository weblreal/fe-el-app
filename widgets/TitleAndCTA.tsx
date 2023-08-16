import React from "react";
import Column from "../components/UI/Column/Column";
import Text from "../components/UI/Text/Text";
import Row from "../components/UI/Row/Row";
import { ITitleAndCTA } from "../models/widgets/ITitleAndCTA";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import AppConfig from "../logic/configs/AppConfig";

const TitleAndCTA = ({ title, cta, longText, center = true }: ITitleAndCTA) => {
  return (
    <Column
      maxWidth="screen3"
      width="full"
      margin="auto"
      justifyContent="center"
      alignItems={center ? "center" : "flex-start"}
      py={{ _: "40px", tablet: "80px" }}
      px={{ _: 2, tablet: 0 }}
      overflow="hidden"
    >
      <Text
        fontWeight="600"
        fontSize={{ _: "32px", tablet: "48px" }}
        mb={{ _: "16px", tablet: "40px" }}
        textAlign={center ? "center" : "left"}
      >
        {title}
      </Text>

      {longText && (
        <Text
          fontSize={{ _: "regular", desktopS: "21px" }}
          mb={{ _: "16px", tablet: "40px" }}
          textAlign={center ? "center" : "left"}
          width="full"
        >
          {AppConfig.html(longText)}
        </Text>
      )}

      {cta && (
        <Row>
          <LinkAngle
            label={cta.label}
            url={cta.url}
            fontSize={{ _: "16px", tablet: "24px" }}
            gap="0"
          />
        </Row>
      )}
    </Column>
  );
};

export default TitleAndCTA;
