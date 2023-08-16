// Modules
import { ICalendarEvents } from "../models/widgets/ICalendarEvents";
import { IEvent } from "../models/components/IEvent";
import { useState } from "react";
import AppConfig from "../logic/configs/AppConfig";
// Container
import Container from "../components/UI/Container/Container";
import PressRelease from "../components/PressRelease/PressRelease";
import Text from "../components/UI/Text/Text";

const CalendarEvents = ({ events, title }: ICalendarEvents) => {
  const [active, setActive] = useState(1);

  // Variables
  const itemPerSlide = 100;
  const eventsPerPage = events?.slice(0, active * itemPerSlide);

  return (
    <Container px={2}>
      {eventsPerPage || title ? (
        <>
          <Container
            maxWidth="863px"
            width="full"
            m="auto"
            py={7}
          >
            <Text
              fontFamily="Avenir Regular"
              fontSize="h2"
              fontWeight="600"
              mb={{ _: 2, desktopS: 2 }}
            >
              {AppConfig.html(title)}
            </Text>

            {/* Events */}
            {eventsPerPage?.map((event: IEvent, key: number) => (
              <Container
                pb={key + 1 === eventsPerPage?.length ? 0 : 2}
                key={key}
              >
                <PressRelease
                  title={event?.title}
                  date={event?.date}
                  event={event}
                  oneColumnDownloads
                />
              </Container>
            ))}
          </Container>

          {/* <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            pb={{ _: 2, desktopS: 4 }}
          >
            <Text mb={2} fontWeight="bold">
              Showing {eventsPerPage?.length} of {events?.length} (To Translate)
            </Text>

            {eventsPerPage?.length !== events?.length && (
              <Button
                variant="secondary"
                onClick={() => setActive((prev) => prev + 1)}
              >
                Load more
              </Button>
            )}
          </Flex> */}
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default CalendarEvents;
