// Modules
import useGetTranslatedDate from "../../../hooks/useTranslatedDate";
import { INextEvents } from "../../../models/widgets/ISharePrice";
// Components
import AddToCalendar from "../../AddToCalendar/AddToCalendar";
import Column from "../../UI/Column/Column";
import Container from "../../UI/Container/Container";
import Flex from "../../UI/Flex/Flex";
import LinkAngle from "../../UI/LinkAngle/LinkAngle";
import LongText from "../../UI/LongText/LongText";
import Text from "../../UI/Text/Text";

const NextEvents: React.FC<INextEvents> = ({ events, title }) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Container
      py="40px"
      pl={{ _: 0, desktopS: 10 }}
      maxWidth={{ _: "full", desktopS: "928px" }}
      width="full"
      height="100%"
      borderLeft={{ _: "none", desktopS: "1px solid rgba(0, 0, 0, 0.1)" }}
      borderTop={{ _: "1px solid rgba(0, 0, 0, 0.1)", desktopS: "none" }}
    >
      {/* Title */}
      <Text
        fontSize="24px"
        fontFamily="Avenir Bold"
        fontWeight="600"
        width="full"
        mb="32px"
      >
        {title}
      </Text>

      {/* Events */}
      <Flex flexWrap={{ _: "wrap", desktopS: "initial" }}>
        {events?.map((event: any, key: number) => (
          <Column
            width={{ _: "full", desktopS: "328px" }}
            key={key}
            mb={{ _: (events || []).length - 1 !== key ? 4 : 0, desktopS: 0 }}
            mr={{ _: 0, desktopS: key === 0 ? 10 : 0 }}
          >
            {event.date && <EventDate date={event.date} />}
            <LongText fontSize="18px" mb={4}>
              {event?.event}
            </LongText>
            <Flex alignItems="center" mt="auto">
              <AddToCalendar
                event={{
                  description: "",
                  title: event?.event || "",
                  start: event?.addToCalendar?.startDate
                    ? new Date(event.addToCalendar.startDate || "")
                    : undefined,
                  end: event?.addToCalendar?.endDate
                    ? new Date(event.addToCalendar.endDate || "")
                    : undefined,
                  location: "",
                  type: "apple",
                }}
              >
                <LinkAngle
                  label={event?.addToCalendar?.label || ""}
                  color="accents.90"
                  fontSize="regular"
                  iconType="calendar"
                  gap={1}
                  iconVerticalAlign="bottom"
                  reverse
                  url="#"
                />
              </AddToCalendar>
            </Flex>
          </Column>
        ))}
      </Flex>
    </Container>
  );
};

const EventDate = ({ date }: { date: string }) => {
  // Hooks
  const { month, day, year } = useGetTranslatedDate({
    price: { date: date, time: "" },
  });

  return (
    <Text fontSize="24px" mb="8px">
      {month} {day} {year}
    </Text>
  );
};
export default NextEvents;
