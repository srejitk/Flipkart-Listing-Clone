import React from "react";
import { useFilter } from "../../context/FilterContext";

export const SortWrapper = () => {
  const { filterState, filterDispatch } = useFilter();
  return (
    <div className="sort w-full h-10 text-ellipsis flex items-center justify-start gap-10 px-5 pl-10 flex-nowrap">
      <p className="font-medium text-ellipsis whitespace-nowrap break-all">
        Sort By
      </p>
      <button
        className={`text-ellipsis whitespace-nowrap break-all ${
          filterState?.sortBy === "LTOH"
            ? "border-b-2 border-b-blue-400 font-medium text-blue-500"
            : ""
        }`}
        onClick={() =>
          filterState?.sortBy === "LTOH"
            ? filterDispatch({ type: "CLEAR" })
            : filterDispatch({ type: "SORTBY", payload: "LTOH" })
        }
      >
        Price - Low to High
      </button>
      <button
        className={`text-ellipsis whitespace-nowrap break-all ${
          filterState?.sortBy === "HTOL"
            ? "border-b-2 border-b-blue-400 font-medium text-blue-500"
            : ""
        }`}
        onClick={() =>
          filterState?.sortBy === "HTOL"
            ? filterDispatch({ type: "CLEAR" })
            : filterDispatch({ type: "SORTBY", payload: "HTOL" })
        }
      >
        Price - High to Low
      </button>
    </div>
  );
};
