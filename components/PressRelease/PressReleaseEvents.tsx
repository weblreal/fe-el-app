// Components
import AddToCalendar from "../AddToCalendar/AddToCalendar";
import LinkAngle from "../UI/LinkAngle/LinkAngle";
import { GridRow } from "../UI/Grid/Grid";
import { IEvent } from "../../models/components/IEvent";

type Props = { event?: IEvent };

const PressReleaseEvents = ({ event }: Props) => {
  return (
    <>
      {/* Events */}
      {event && event.startDate && event.endDate && (
        <GridRow width="fit-content">
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
              iconType="calendar"
              gap={1}
              color="#1890ff"
              label={event?.link?.label || ""}
              url="#"
              reverse
              iconVerticalAlign="sub"
            />
          </AddToCalendar>
        </GridRow>
      )}
    </>
  );
};

export default PressReleaseEvents;
