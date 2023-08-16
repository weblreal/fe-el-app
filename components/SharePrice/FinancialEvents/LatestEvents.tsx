// Modules
import useGetTranslatedDate from "../../../hooks/useTranslatedDate";
import { ILatestEvents } from "../../../models/widgets/ISharePrice";

// Components
import Column from "../../UI/Column/Column";
import Container from "../../UI/Container/Container";
import LongText from "../../UI/LongText/LongText";
import Text from "../../UI/Text/Text";

const LatestEvents: React.FC<ILatestEvents> = ({
  date,
  event,
  title,
}: ILatestEvents) => {
  // Hooks
  const { month, day, year } = useGetTranslatedDate({
    price: { date: date, time: "" },
  });

  // Variables
  // Functions
  // Effects

  return (
    <Container
      py={{ _: "40px", desktopS: "40px" }}
      maxWidth={{ _: "full", desktopS: "512px" }}
      width="full"
      height="100%"
      pr={{ desktopS: 4 }}
    >
      <Text
        fontSize="24px"
        fontFamily="Avenir Bold"
        fontWeight="600"
        width="full"
        mb="32px"
      >
        {title}
      </Text>
      <Column>
        <Text fontSize="24px" mb="8px">
          {month} {day} {year}
        </Text>
        <LongText fontSize="18px">{event}</LongText>
      </Column>
    </Container>
  );
};
export default LatestEvents;
