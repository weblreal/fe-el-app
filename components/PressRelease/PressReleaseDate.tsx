// Modules
import { TypographyProps } from "styled-system";
import useGetTranslatedDate from "../../hooks/useTranslatedDate";
import AppConfig from "../../logic/configs/AppConfig";
// Components
import Flex from "../UI/Flex/Flex";
import Text from "../UI/Text/Text";

interface Props extends TypographyProps {
  date?: string;
  hideDay?: boolean;
}

const PressReleaseDate = ({ date, hideDay, ...styles }: Props) => {
  // Hooks
  const { day, month, year } = useGetTranslatedDate({
    price: { date: date || "", time: "" },
  });

  return (
    <>
      {/* Date */}
      {date && (
        <Flex pt={{ _: 0, tablet: "0.5em" }}>
          <Text
            verticalAlign="middle"
            color="neutral.40"
            fontSize="h5"
            {...styles}
          >
            {hideDay ?  "" : day} {AppConfig.toCapitalizeString(month)} {year}
          </Text>
        </Flex>
      )}
    </>
  );
};

export default PressReleaseDate;
