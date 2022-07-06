export const FilterReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORTBY":
      return { ...state, sortBy: payload };
    case "FILTERBY":
      if (state.filterBy?.includes(payload)) {
        let temp = state.filterBy?.filter((item) => item !== payload);
        return { ...state, filterBy: temp };
      } else {
        return { ...state, filterBy: [...state.filterBy, payload] };
      }
    case "CLEAR":
      return { ...state, sortBy: "", filterBy: "" };
    default:
      break;
  }
};
