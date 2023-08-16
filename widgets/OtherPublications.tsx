// Modules
import { IPressReleaseList } from "../models/widgets/IPressReleaseList";
import { IPressRelease } from "../components/PressRelease/IPressRelease";
import { useState } from "react";
// Components
import PressRelease from "../components/PressRelease/PressRelease";
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import Grid from "../components/UI/Grid/Grid";
import Text from "../components/UI/Text/Text";
import styled from "styled-components";
import Link from "next/link";

const OtherPublications = ({
  pressReleaseItem,
  header,
  cta,
}: IPressReleaseList) => {
  return (
    <Container
      m="auto"
      maxWidth="863px"
      width="full"
      pt={7}
      pb={9}
      px={{ _: 2, desktopS: 0 }}
    >
      {header && (
        <Text
          fontSize={{ _: "h3", desktopS: "h2" }}
          fontFamily={{ _: "Avenir Bold", desktopS: "Avenir Medium" }}
          fontWeight={{ _: "bolder", desktopS: "500" }}
          mb={{ _: 2, desktopS: 2 }}
        >
          {header}
        </Text>
      )}

      <Grid width="full" gridGap={2} mb={cta ? 5 : 0}>
        {pressReleaseItem?.map((item: IPressRelease, key: number) => (
          <PressRelease key={key} {...item} />
        ))}
      </Grid>

      {/* CTA */}
      {cta && (
        <Flex justifyContent="center">
          <CtaBlue href={cta.url}>
            <Text fontSize="h4" color="accent">
              {cta.label}
            </Text>
          </CtaBlue>
        </Flex>
      )}
    </Container>
  );
};

const CtaBlue = styled(Link)`
  color: ${(props: any) => props.theme.colors.accent};
  text-decoration: underline;
`;

export default OtherPublications;
