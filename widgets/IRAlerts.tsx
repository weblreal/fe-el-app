import AppConfig from "../logic/configs/AppConfig";
import { IIRAlerts } from "../models/widgets/IIRAlerts";
import IframeResizer from 'iframe-resizer-react'

// Components
import Accordion from "../components/Accordion/Accordion";
import Column from "../components/UI/Column/Column";
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import Hidden from "../components/UI/Hidden/Hidden";
import Text from "../components/UI/Text/Text";
import styled from "styled-components";

interface IContactsInfo {
  name?: string;
  role: string;
  email: string;
}
const { html } = AppConfig;

const ContactCards = ({ name, role, email }: IContactsInfo) => (
  <Column
    minWidth={{
      _: "auto",
      tablet: "383px",
    }}
    mt={{
      _: "21px",
      tablet: "8px",
    }}
    px={4}
    py={3}
    style={{
      border: "solid 1px #e6e7e8",
    }}
  >
    <Text fontFamily="Avenir Regular" fontSize="24px">
      {html(name)}
    </Text>
    <Text fontFamily="Avenir Regular" fontSize="16px" py="12px">
      {html(role)}
    </Text>
    <Text
      fontFamily="Avenir Regular"
      fontSize="16px"
      onClick={() => window.open(`mailto:${email}`)}
      color="accent"
      style={{
        cursor: "pointer",
        textDecoration: "underline",
      }}
    >
      {html(email)}
    </Text>
  </Column>
);

const IRAlerts = ({ contactHeader, contacts, forms, cta, src }: IIRAlerts) => {

  return (
    <>
      {/* CONTACTS FOR MOBILE VIEW */}
      <Hidden from="tablet">
        <Container mt={3}>
          <Accordion border header={contactHeader}>
            {contacts &&
              contacts?.map((contact: any, key: number) => (
                <ContactCards
                  key={key}
                  name={contact?.name}
                  role={contact?.role}
                  email={contact?.email}
                />
              ))}
          </Accordion>
        </Container>
      </Hidden>
      <Container
        pb={{
          _: "40px",
          tablet: "120px",
        }}
        pt={{
          _: "24px",
          tablet: "32px",
        }}
        px={{
          _: 2,
          tablet: 8,
        }}
      >
        <Flex
          flexDirection={{
            _: "column",
            tablet: "row",
          }}
          justifyContent={{ desktopXL: "center" }}
        >
          {/* CONTACTS FOR NON-MOBILE DEVICE*/}
          <Container>
            <Hidden till="tablet">
              {contacts &&
                contacts?.map((contact: any, key: number) => (
                  <ContactCards
                    email={contact?.email}
                    key={key}
                    name={contact?.name}
                    role={contact?.role}
                  />
                ))}
            </Hidden>
          </Container>
          {/* FORMS */}
          <Container
            overflow="hidden"
            maxWidth={{
              _: "100%",
              tablet: "712px",
              desktopS: "740px",
            }}
            mt={{
              tablet: "8px",
            }}
            pl={{
              _: 0,
              tablet: "44px",
            }}
          >
            <Text fontFamily="Avenir Bold" fontSize="24px" px={{ tablet: "28px" }}>
              {html(forms?.title)}
            </Text>
            <Text fontFamily="Avenir Regular" fontSize="18px" pb={1} pt={3} px={{ tablet: "28px" }}>
              {html(forms?.description)}
            </Text>

            {src &&
              <IframeResizer
                width="100%"
                height="925px"
                src={src}
                style={{
                  marginTop: "-35px",
                }}
            />}
          </Container>
        </Flex>
      </Container>
    </>
  );
};
const InputWrapper = styled.div`
  padding: 8px 0;
`;

export default IRAlerts;
