// Modules
import useGetTranslatedDate from "../../../hooks/useTranslatedDate";
import AppConfig from "../../../logic/configs/AppConfig";
// Components
import Flex from "../../UI/Flex/Flex";
import LongText from "../../UI/LongText/LongText";

type IDateTimeProps = {
  date: string;
  subtitle: string;
  subtitle2: string;
  time: string;
};

const DateTime: React.FC<IDateTimeProps> = ({
  date,
  subtitle2,
  subtitle,
  time,
}) => {
  // Hooks
  // Variables
  const { stripHtml } = AppConfig;
  const { month, day, year } = useGetTranslatedDate({
    price: { date: date, time: "" },
  });

  const formattedDate = `${month} ${day} ${year}`;
  const textToRender = `${stripHtml(subtitle)} ${formattedDate} ${stripHtml(
    subtitle2
  )} ${time}`;

  // Functions
  // Effects

  return (
    <Flex mx={{ _: "0px", desktopS: "16px" }}>
      {date && (
        <LongText fontSize={{ _: "16px", desktopS: "18px" }}>
          {textToRender}
        </LongText>
      )}
    </Flex>
  );
};
export default DateTime;
