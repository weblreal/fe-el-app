import Link from "next/link";
import React, { ReactNode } from "react";
import AppConfig from "../../logic/configs/AppConfig";

interface Event {
  title: string;
  start?: Date;
  end?: Date;
  location: string;
  description: string;
  type: "google" | "outlook" | "apple" | "yahoo";
  label?: string;
}

const AddToCalendar: React.FC<{ event: Event; children?: ReactNode }> = ({
  event,
  children,
}) => {
  const {
    title,
    start,
    end,
    location,
    description,
    type = "google",
    label,
  } = event;

  // Convert date objects to string formats for different calendars
  const startStr: any = !start ? "" : start?.toISOString()?.replace(/-|:|\.\d+/g, "");
  const endStr: any = !end ? "" : end?.toISOString()?.replace(/-|:|\.\d+/g, "");

  // Generate URL for Google Calendar
  const googleUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startStr}/${endStr}&location=${location}&details=${description}`;

  // Generate URL for Outlook Calendar
  const outlookUrl = `https://outlook.office.com/owa/?path=/calendar/action/compose&rru=addevent&subject=${title}&startdt=${startStr}&enddt=${endStr}&location=${location}&body=${description}`;

  // Generate URL for Yahoo Calendar
  const yahooUrl = `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${title}&st=${startStr}&dur=${
    endStr - startStr
  }&desc=${description}&in_loc=${location}`;

  // Generate URL for Apple Calendar
  const appleUrl = `data:text/calendar;charset=utf-8,${encodeURIComponent(
    `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${startStr}\nDTEND:${endStr}\nLOCATION:${location}\nSUMMARY:${title}\nDESCRIPTION:${description}\nEND:VEVENT\nEND:VCALENDAR`
  )}`;

  return (
    <div>
      {type === "google" && (
        <Link href={googleUrl} target="_blank" rel="noopener noreferrer">
          {children}
          {AppConfig.html(label) || "Add to Google Calendar"}
        </Link>
      )}

      {type === "outlook" && (
        <Link href={outlookUrl} target="_blank" rel="noopener noreferrer">
          {children}
          {AppConfig.html(label) || "Add to Outlook Calendar"}
        </Link>
      )}

      {type === "yahoo" && (
        <Link href={yahooUrl} target="_blank" rel="noopener noreferrer">
          {children}
          {AppConfig.html(label) || "Add to Yahoo Calendar"}
        </Link>
      )}

      {type === "apple" && (
        <Link href={appleUrl} download={`${title}.ics`}>
          {children}
          {AppConfig.html(label) || "Add to Apple Calendar"}
        </Link>
      )}
    </div>
  );
};

export default AddToCalendar;
