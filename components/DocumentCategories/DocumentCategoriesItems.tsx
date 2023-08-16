import { useRouter } from "next/router";
import { IPressRelease } from "../PressRelease/IPressRelease";
import AppConfig from "../../logic/configs/AppConfig";
import useFilterContext from "../../hooks/useFilterContext";
// Components
import PressRelease from "../PressRelease/PressRelease";
import Container from "../UI/Container/Container";
import Grid from "../UI/Grid/Grid";
import { AnimatePresence } from "framer-motion";

type Props = { pressRelease: IPressRelease[]; paginationCount: number };

const DocumentCategoriesItems = ({ pressRelease }: Props) => {
  // Hooks
  const { state } = useFilterContext();
  const { locale = "" } = useRouter();

  // Handlers
  const showPressRelease = (item: IPressRelease) => {
    const splittedDate = item.date?.split(" ");

    const selectedMonth = state?.activeDates?.month;
    const selectedYear = state?.activeDates?.year;
    const publicationMonth = splittedDate?.[1];
    const publicationYear = splittedDate?.[2];

    const showYear = selectedMonth === publicationMonth;
    const showMonth = selectedYear === publicationYear;

    const filteredTags = item?.tags
      ?.map((tag: any) => tag?.[locale])
      ?.filter((tag: string) => tag !== null);

    const show = filteredTags?.some((tag: string) =>
      state?.activeTags.includes(tag)
    );

    return state?.activeTags?.length === 0 || show || (showYear && showMonth);
  };

  return (
    <Grid width="full" mb={5}>
      {pressRelease?.map((item: IPressRelease, key: number) => {
        return (
          <AnimatePresence key={key}>
            {showPressRelease(item) && (
              <Container
                variants={AppConfig.setAnimationVariant(
                  "EXPAND_VARIANT_NO_DELAY"
                )}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, delay: key * 1 }}
                overflow="hidden"
              >
                <PressRelease {...item} />

                {key + 1 !== pressRelease.length && (
                  <Container height="16px"></Container>
                )}
              </Container>
            )}
          </AnimatePresence>
        );
      })}
    </Grid>
  );
};

export default DocumentCategoriesItems;
