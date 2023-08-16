import Link from "next/link";
import useGetTranslatedDate from "../../../hooks/useTranslatedDate";
import { useAppSelector } from "../../../redux/hooks";
import { useFetchFinanceDataQuery, useFetchFinancialCTAQuery } from "../../../redux/slices/Financial/FinancialAPI";
// Components
import { GridRow } from "../../UI/Grid/Grid";
import Span from "../../UI/Span/Span";
import Text from "../../UI/Text/Text";

const SuperHeaderMobile = ({}) => {
  // Hooks
  const { data: price } = useFetchFinanceDataQuery({});
  const { sharePriceText, target, targetTag } = useAppSelector((prev) => prev.FinancialSlice);

  // Get Financial CTA
  const link = target?.split("///")?.[1]?.split("]")?.[0];
  const id = link?.split("/")?.[2];
  const { data } = useFetchFinancialCTAQuery({ id });
  const { fullDate } = useGetTranslatedDate({ price: price });
  
  return (
    <GridRow
      justifyContent="start"
      backgroundColor="neutral.5"
      py={1}
      px={2}
      minHeight="36px"
    >
      {price && (
        <Link href={`${data}${targetTag}` || "/"}>
          <Text>
            {sharePriceText} €{price.value || 0}{" "}
            <Span color={price?.changes?.includes("-") ? "text" : "success"} fontWeight="bold">
              {price.changes || 0}%
            </Span>
            {price.date && price.time && (
              <>
                {" "}
                - {fullDate}
              </>
            )}
          </Text>
        </Link>
      )}
    </GridRow>
  );
};

export default SuperHeaderMobile;
