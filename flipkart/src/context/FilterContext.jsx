import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { products } from "../db/products";
import { compose, filterBy, sortBy } from "./FilterCompose";
import { FilterReducer } from "./FilterReducer";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) => {
  const initialState = {
    sortBy: "",
    filterBy: [],
  };
  const [filterState, filterDispatch] = useReducer(FilterReducer, initialState);

  const filteredProducts = compose(filterState, sortBy, filterBy)(products);
  return (
    <FilterContext.Provider
      value={{ filterState, filterDispatch, filteredProducts }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
