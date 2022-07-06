export const sortBy = ({ sortBy }, data) => {
  if (sortBy === "LTOH") {
    return [...data].sort((a, b) => a.price - b.price);
  } else if (sortBy === "HTOL") {
    return [...data].sort((a, b) => b.price - a.price);
  } else {
    return data;
  }
};

export const filterBy = (state, data) => {
  const { filterBy } = state;

  console.log(data?.find((item) => (item.size?.includes("M") ? item : null)));

  if (filterBy?.length === 0) {
    return data;
  } else {
    return data?.filter(
      (item) =>
        filterBy?.includes(item.brand) ||
        filterBy?.find((filter) =>
          item?.size?.includes(filter) ? item : null
        ) ||
        filterBy?.includes(item.idealFor)
    );
  }
};

export const compose =
  (state, ...args) =>
  (array) => {
    return args.reduce((acc, curr) => {
      return curr(state, acc);
    }, array);
  };
