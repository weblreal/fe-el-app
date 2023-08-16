// Modules
import {
  ILatestEvents,
  INextEvents,
} from "../../../models/widgets/ISharePrice";
// Components
import Container from "../../UI/Container/Container";
import Flex from "../../UI/Flex/Flex";
import LatestEvents from "./LatestEvents";
import NextEvents from "./NextEvents";

type IFinancialEventsProps = {
  latestEvent: ILatestEvents;
  nextEvents: INextEvents;
};

const FinancialEvents: React.FC<IFinancialEventsProps> = ({
  latestEvent,
  nextEvents,
}) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Container px={{ _: "16px", desktopS: "64px" }}>
      <Container maxWidth="1312px" width="full" m="auto">
        <Flex
          width="full"
          height="full"
          flexWrap={{ _: "wrap", desktopS: "initial" }}
        >
          <LatestEvents {...latestEvent} />
          <NextEvents {...nextEvents} />
        </Flex>
      </Container>
    </Container>
  );
};
export default FinancialEvents;
