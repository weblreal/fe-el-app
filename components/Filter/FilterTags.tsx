import useFilterContext from "../../hooks/useFilterContext";
// Components
import Accordion from "../Accordion/Accordion";
import Checkbox from "../UI/Checkbox/Checkbox";
import Grid, { GridRow } from "../UI/Grid/Grid";

type Props = {
  filteredTags?: string[];
  getTagCount: (tag: string) => string | number;
  header?: string;
};

const FilterTags = ({ filteredTags = [], getTagCount, header }: Props) => {
  // Hooks
  const { state, dispatch } = useFilterContext();
  const formattedTags = filteredTags?.filter(
    (tag) => tag !== "Stories" && tag !== "Press-Release"
  );

  const checkHandler = (event: { name: string; value: boolean }) => {
    const tag = event.name;
    const add = event.value;

    if (!dispatch) return;
    dispatch({
      type: "UPDATE_ACTIVE_TAGS",
      payload: {
        newTag: {
          name: tag,
          value: add,
        },
      },
    });
  };

  return (
    <GridRow mt={3}>
      <Accordion
        border={false}
        header={header}
        spaceProps={{
          px: { _: 2, mobile: 4 },
          pb: { _: 1 },
          pt: { _: 1 },
        }}
        initialState={true}
      >
        <Grid pt={1} gridGap={2}>
          {formattedTags?.map((tag: string, key: number) => {
            return (
              <GridRow key={key}>
                <Checkbox
                  disabled={!getTagCount(tag)}
                  type="checkbox"
                  label={`${tag} (${getTagCount(tag)})`}
                  fonts={{
                    fontFamily: { _: "Avenir Roman" },
                    fontSize: { _: "regular" },
                  }}
                  name={tag}
                  onChange={checkHandler}
                  value={state?.activeTags?.includes(tag)}
                />
              </GridRow>
            );
          })}
        </Grid>
      </Accordion>
    </GridRow>
  );
};

export default FilterTags;
