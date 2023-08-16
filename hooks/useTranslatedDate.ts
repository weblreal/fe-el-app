import { useRouter } from "next/router";
import AppConfig from "../logic/configs/AppConfig";

const useGetTranslatedDate = ({
  price,
}: {
  price?: {
    time: string;
    date: string;
  };
}) => {
  // Hooks
  const { locale } = useRouter();
  const date = new Date(`${price?.date} ${price?.time}`);
  const day = date.toLocaleDateString(locale || "en", { day: "numeric" });
  const month = date.toLocaleDateString(locale || "en", { month: "short" })?.slice(0, 3);
  const monthLong = date.toLocaleDateString(locale || "en", { month: "long" });
  const year = date.toLocaleDateString(locale || "en", { year: "numeric" });

  const time = date.toTimeString()?.split(" ")?.[0];
  const translatedDate = `${day || ""} ${month || ""} ${year || ""} - ${
    time || ""
  }`;

  // Functions
  const getTranslatedDates = (date: string) => {
    const newDate = new Date(`${date} 1`);

    return newDate.toLocaleDateString(locale || "en", { month: "long" });
  }

  return { fullDate: translatedDate, month: AppConfig.toCapitalizeString(month), monthLong, day, year, getTranslatedDates };
};

export default useGetTranslatedDate;
