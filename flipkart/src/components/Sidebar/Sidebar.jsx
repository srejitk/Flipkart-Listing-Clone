import React from "react";
import { useFilter } from "../../context/FilterContext";
import { Brandoptions, Idealoptions, Sizeoptions } from "../../utils/Constants";
import { CategoryWrapper } from "../CategoryWrapper/CategoryWrapper";

export const Sidebar = () => {
  const { filterState, filterDispatch } = useFilter();
  return (
    <aside className="h-full lg:w-2/12 md:w-3/12 w-full flex flex-col bg-white shadow-sm mx-2">
      <div className="w-full flex justify-between px-4">
        <h1 className="font-medium">Filters</h1>
        <button
          className="text-blue-500 font-semibold text-sm"
          onClick={() => filterDispatch({ type: "CLEAR" })}
        >
          CLEAR ALL
        </button>
      </div>
      <CategoryWrapper
        title={"BRAND"}
        options={Brandoptions}
        state={filterState}
        dispatch={filterDispatch}
      />
      <CategoryWrapper
        title={"SIZE"}
        options={Sizeoptions}
        state={filterState}
        dispatch={filterDispatch}
      />
      <CategoryWrapper
        title={"IDEAL FOR"}
        options={Idealoptions}
        state={filterState}
        dispatch={filterDispatch}
      />
    </aside>
  );
};
