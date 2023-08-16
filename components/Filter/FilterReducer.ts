import { IFilterActions, IFilterPayload, IFilterState } from "./IFilter";

// Functions
const filterReducer = (
  state: IFilterState,
  action: IFilterActions<IFilterPayload>
): IFilterState => {
  switch (action.type) {
    case "SET_TAGS":
      if (!action?.payload?.tags)
        return {
          ...state,
        };

      return {
        ...state,
        tags: action.payload.tags,
      };
    case "UPDATE_ACTIVE_TAGS":
      if (!action.payload.newTag) return state;
      const { name, value } = action.payload.newTag;

      if (value) {
        if (state?.activeTags.includes(name)) return { ...state };

        const newActiveTags = [...state?.activeTags, name];

        return {
          ...state,
          tags: state?.tags,
          activeTags: newActiveTags,
        };
      } else {
        const newActiveTags = state?.activeTags?.filter(
          (tag: string) => tag !== name
        );

        return {
          ...state,
          tags: state?.tags,
          activeTags: newActiveTags,
        };
      }

    case "UPDATE_ACTIVE_DATES":
      if (action.payload.activeDates) {
        const { month, year } = action.payload.activeDates;

        if (month)
          return {
            ...state,
            activeDates: { ...state.activeDates, month },
          };

        if (year)
          return {
            ...state,
            activeDates: { ...state.activeDates, year },
          };
      }

      return { ...state };

    case "CLEAR_FILTER":
      return {
        activeTags: [],
        tags: [],
        activeDates: {
          month: "",
          year: "",
        },
      };

    default:
      return { ...state };
  }
};

export default filterReducer;
