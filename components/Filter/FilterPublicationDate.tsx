import { useRouter } from "next/router";
import { useMemo } from "react";
import useFilterContext from "../../hooks/useFilterContext";
// Components
import Accordion from "../Accordion/Accordion";
import Dropdown from "../UI/Dropdown/Dropdown";
import Grid, { GridRow } from "../UI/Grid/Grid";

type Props = {
  header?: string;
  monthsLabel?: string;
  yearsLabel?: string;
  availableYears?: string[];
};

const FilterPublicationDate = ({
  header,
  monthsLabel,
  yearsLabel,
  availableYears,
}: Props) => {
  // Hooks
  const { dispatch, state } = useFilterContext();
  const { locale = "en" } = useRouter();

  // Variables
  const years = useMemo(() => {
    return availableYears?.map((year: string) => ({
      label: year,
      value: year,
    }));
  }, [availableYears]);

  const getTranslatedDate = (date: string, locale: string) => {
    const newDate = new Date(`${date} 1`);

    const newStr = newDate.toLocaleDateString(locale || "en", {
      month: "long",
    });
    return newStr.charAt(0).toUpperCase() + newStr.slice(1);
  };

  const months = [
    { label: monthsLabel || "", value: "All" },
    { label: getTranslatedDate("January", locale), value: "Jan" },
    { label: getTranslatedDate("February", locale), value: "Feb" },
    { label: getTranslatedDate("March", locale), value: "Mar" },
    { label: getTranslatedDate("April", locale), value: "Apr" },
    { label: getTranslatedDate("May", locale), value: "May" },
    { label: getTranslatedDate("June", locale), value: "Jun" },
    { label: getTranslatedDate("July", locale), value: "Jul" },
    { label: getTranslatedDate("August", locale), value: "Aug" },
    { label: getTranslatedDate("September", locale), value: "Sept" },
    { label: getTranslatedDate("October", locale), value: "Oct" },
    { label: getTranslatedDate("November", locale), value: "Nov" },
    { label: getTranslatedDate("December", locale), value: "Dec" },
  ];

  // Functions
  const monthHandler = (event: { target: { name: string; value: string } }) => {
    const { value } = event.target;

    if (dispatch) {
      dispatch({
        payload: {
          activeDates: {
            month: value,
            year: "",
          },
        },
        type: "UPDATE_ACTIVE_DATES",
      });
    }
  };

  const yearHandler = (event: { target: { name: string; value: string } }) => {
    const { value } = event.target;

    if (dispatch) {
      dispatch({
        payload: {
          activeDates: {
            year: value,
            month: "",
          },
        },
        type: "UPDATE_ACTIVE_DATES",
      });
    }
  };

  return (
    <GridRow>
      <Accordion
        border={false}
        header={header}
        initialState={true}
        spaceProps={{
          px: { _: 2, mobile: 4 },
          pb: { _: 1 },
          pt: { _: 1 },
        }}
      >
        <Grid
          pt={1}
          gridGap={2}
          gridTemplateColumns={monthsLabel ? "auto auto" : "auto"}
        >
          <GridRow>
            <Dropdown
              options={[
                {
                  label: yearsLabel || "",
                  value: "All",
                },
                ...(years || []),
              ]}
              onChange={yearHandler}
              initialLabel={state?.activeDates?.year === "All" ? yearsLabel : state?.activeDates?.year || yearsLabel}
              autoScroll
            />
          </GridRow>

          {monthsLabel && (
            <GridRow>
              <Dropdown
                options={months}
                initialLabel={state?.activeDates?.month || monthsLabel}
                onChange={monthHandler}
                autoScroll
              />
            </GridRow>
          )}
        </Grid>
      </Accordion>
    </GridRow>
  );
};

export default FilterPublicationDate;
