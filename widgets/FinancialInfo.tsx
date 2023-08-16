// Modules
import AppConfig from "../logic/configs/AppConfig";
import Link from "next/link";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { IFinancialInfo } from "../models/widgets/IFinancialInfo";
import { IEvent } from "../models/components/IEvent";
// Components
import Flex from "../components/UI/Flex/Flex";
import Column from "../components/UI/Column/Column";
import Text from "../components/UI/Text/Text";
import Row from "../components/UI/Row/Row";
import Icon from "../components/UI/Icon/Icon";
import Button from "../components/UI/Button/Button";
import Container from "../components/UI/Container/Container";
import AddToCalendar from "../components/AddToCalendar/AddToCalendar";
import ReverseTheme from "../components/ReverseTheme/ReverseTheme";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";

const FinancialInfo = ({
  header1,
  header2,
  subtitle,
  events,
  cta,
  cta2,
}: IFinancialInfo) => {
  // Hooks
  const theme = useContext(ThemeContext);

  // Variables
  const border = `1px solid ${theme.colors.neutral["20"]}`;

  return (
    <Flex
      margin="auto"
      maxWidth="screen"
      overflow="hidden"
      backgroundColor="background"
      position="relative"
      flexDirection={{ _: "column", tablet: "row" }}
      width="full"
    >
      {/* Events */}
      {header1 || cta2 ? (
        <Column
          width="full"
          p={{ _: "40px 16px 0", tablet: "40px 64px" }}
          borderTop={border}
          borderRight={{ _: "none", tablet: border }}
        >
          {header1 && (
            <Text
              fontFamily="Avenir Bold"
              fontSize="h3"
              fontWeight="bolder"
              mb={{ _: 3, tablet: 2 }}
            >
              {AppConfig.html(header1)}
            </Text>
          )}

          <Column mb={4}>
            {events?.map((event: IEvent, key: number) => {
              return (
                <Column key={key} mb={key + 1 === events?.length ? 0 : 2}>
                  <Flex
                    mb={{ _: "8px", tablet: 1 }}
                    flexDirection={{ _: "column", tablet: "row" }}
                  >
                    {event.date && (
                      <Text
                        fontFamily={{
                          _: "Avenir Regular",
                          tablet: "Avenir Light",
                        }}
                        fontSize={{ _: "18px", tablet: "14px" }}
                        fontWeight={{ _: "normal", tablet: "light" }}
                        color="neutral.50"
                        pt={{ _: 0, tablet: "2px" }}
                        mr="16px"
                      >
                        {AppConfig.html(event.date)}
                      </Text>
                    )}
                    <Text
                      fontFamily="Avenir Light"
                      fontWeight="300"
                      fontSize={{ _: "22px", tablet: "regular" }}
                      mt={{ _: "10px", tablet: 0 }}
                      lineHeight={{ _: "1.182", desktopS: "unset" }}
                    >
                      {AppConfig.html(event.title)}
                    </Text>
                  </Flex>
                  {event?.date && event?.startDate && event?.endDate && (
                    <Row>
                      <AddToCalendar
                        event={{
                          description: "",
                          title: event?.title || "",
                          start: new Date(event.startDate || ""),
                          end: new Date(event.endDate || ""),
                          location: event?.location || "",
                          type: "apple",
                        }}
                      >
                        <LinkAngle
                          label={event.link?.label || ""}
                          color="accents.90"
                          fontSize="regular"
                          iconType="calendar"
                          gap={1}
                          iconVerticalAlign="bottom"
                          reverse
                          url="#"
                        />
                      </AddToCalendar>
                    </Row>
                  )}
                </Column>
              );
            })}
          </Column>

          {cta && (
            <Container width="fit-content">
              <Link href={cta?.url || "#"}>
                <Button variant="primary" height={48} padding="13px 16px">
                  <ReverseTheme>
                    <Text
                      fontFamily="Avenir Light"
                      fontWeight="light"
                      fontSize="18px"
                    >
                      {AppConfig.html(cta?.label || "")}
                    </Text>
                    <Flex ml={1}>
                      <Icon
                        type="angle-right"
                        size={24}
                        color={theme.colors.background}
                      />
                    </Flex>
                  </ReverseTheme>
                </Button>
              </Link>
            </Container>
          )}
        </Column>
      ) : null}

      {/* Email */}
      {header2 || subtitle || cta2 ? (
        <Column
          width="full"
          p={{ _: "48px 16px 32px", tablet: "40px 64px" }}
          borderTop={{ _: "none", tablet: border }}
          borderColor="neutral.20"
          alignItems={{ _: "left", tablet: "center" }}
        >
          <Column>
            <Text
              fontFamily="Avenir Bold"
              fontSize="h3"
              fontWeight="bolder"
              mb={{ _: "16px", tablet: "20px" }}
            >
              {AppConfig.html(header2)}
            </Text>

            <Text
              mb={{ _: "20px", tablet: 4 }}
              fontSize={{ _: "h5", tablet: "regular" }}
            >
              {AppConfig.html(subtitle)}
            </Text>

            {cta2 && (
              <Container width="fit-content">
                <Link href={cta2?.url || "#"}>
                  <Button variant="primary" height={48} padding="13px 16px">
                    <ReverseTheme>
                      <Text
                        fontFamily="Avenir Light"
                        fontWeight="light"
                        fontSize="18px"
                      >
                        {AppConfig.html(cta2?.label || "")}
                      </Text>
                      <Flex ml={1}>
                        <Icon
                          type="angle-right"
                          size={24}
                          color={theme.colors.background}
                        />
                      </Flex>
                    </ReverseTheme>
                  </Button>
                </Link>
              </Container>
            )}
          </Column>
        </Column>
      ) : null}
    </Flex>
  );
};

export default FinancialInfo;
