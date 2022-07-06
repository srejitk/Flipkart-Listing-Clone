import React from "react";
import { useFilter } from "../../context/FilterContext";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from "react";

export const CategoryWrapper = ({ title, options, state, dispatch }) => {
  const { filterDispatch } = useFilter();
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="category-wrapper w-full flex flex-col my-2 border-t-2 py-1">
      <div className="w-full flex justify-between items-center px-4">
        <p className="mr-auto pb-4">{title}</p>
        <button onClick={() => setShowOptions((prev) => !prev)}>
          {showOptions ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>
      {options?.map(
        (option) =>
          showOptions && (
            <div
              key={option.title}
              className="w-full justify-start px-3 gap-4 items-center flex"
            >
              {" "}
              <input
                type="checkbox"
                name="brand"
                id={option.title}
                value={option.title}
                checked={
                  state?.filterBy?.includes(option?.title) ? true : false
                }
                onChange={(e) =>
                  filterDispatch({ type: "FILTERBY", payload: e.target.value })
                }
              />
              <label htmlFor={option.title}>{option.title}</label>
            </div>
          )
      )}
    </div>
  );
};
