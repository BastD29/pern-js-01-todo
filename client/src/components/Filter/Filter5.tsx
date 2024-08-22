import { ChangeEvent, FC, useEffect, useState } from "react";
import { CLEAR_FILTER, SET_FILTER } from "../../constants/actions";
import { useFilterContext } from "../../hooks/useFilterContext";
import { useSearchParams } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import style from "./Filter.module.scss";

const Filter: FC = () => {
  const {
    dispatch,
    state: { filters },
  } = useFilterContext();

  const [searchParams, setSearchParams] = useSearchParams();

  const inputsToDebounce = {
    name: searchParams.get("name") || filters.name || "",
    minPrice: searchParams.get("minPrice") || filters.minPrice || "",
    maxPrice: searchParams.get("maxPrice") || filters.maxPrice || "",
    category: searchParams.get("category") || filters.category || "",
  };

  const [inputs, setInputs] = useState(inputsToDebounce);

  const debouncedInputs = useDebounce(inputs, 500);

  useEffect(() => {
    // Sync the filters with the debounced inputs
    Object.entries(debouncedInputs).forEach(([key, value]) => {
      if (value !== filters[key]) {
        dispatch({
          type: SET_FILTER,
          payload: { name: key, value: value.toString() },
        });
      }
    });

    // Update search params in the URL
    const newParams = new URLSearchParams(searchParams);
    Object.entries(debouncedInputs).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value.toString());
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams);
  }, [debouncedInputs, filters]);

  useEffect(() => {
    // Sync the filters with URL params on component mount
    const name = searchParams.get("name");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const category = searchParams.get("category");
    const inStock = searchParams.get("inStock");

    if (name)
      dispatch({ type: SET_FILTER, payload: { name: "name", value: name } });
    if (minPrice)
      dispatch({
        type: SET_FILTER,
        payload: { name: "minPrice", value: minPrice },
      });
    if (maxPrice)
      dispatch({
        type: SET_FILTER,
        payload: { name: "maxPrice", value: maxPrice },
      });
    if (category)
      dispatch({
        type: SET_FILTER,
        payload: { name: "category", value: category },
      });
    if (inStock)
      dispatch({
        type: SET_FILTER,
        payload: { name: "inStock", value: inStock },
      });
  }, [searchParams]);

  const handleFilter = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const target = event.target as HTMLInputElement;

      dispatch({
        type: SET_FILTER,
        payload: { name: name, value: target.checked.toString() },
      });
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    }
  };

  const clearFilter = () => {
    setInputs({ name: "", minPrice: "", maxPrice: "", category: "" });
    dispatch({ type: CLEAR_FILTER });
    setSearchParams({}); // Clear the URL parameters when filters are cleared
  };

  return (
    <div className={style["filter"]}>
      <div className={style["filter__filter"]}>
        <label htmlFor="name">Name</label>
        <input
          type="search"
          name="name"
          placeholder="Name"
          onChange={handleFilter}
          value={inputs.name}
        />
      </div>
      <div className={style["filter__filter"]}>
        <label htmlFor="inStock">In stock</label>
        <input
          type="checkbox"
          name="inStock"
          onChange={handleFilter}
          checked={filters.inStock === "true"}
        />
      </div>
      <div className={style["filter__filter"]}>
        <label htmlFor="minPrice">Min Price</label>
        <input
          type="range"
          name="minPrice"
          min="0"
          max="1200"
          onChange={handleFilter}
          value={inputs.minPrice}
        />
        <span>{filters.minPrice || ""}</span>
      </div>
      <div className={style["filter__filter"]}>
        <label htmlFor="maxPrice">Max Price</label>
        <input
          type="range"
          name="maxPrice"
          min="0"
          max="1200"
          onChange={handleFilter}
          value={inputs.maxPrice}
        />
        <span>{filters.maxPrice || ""}</span>
      </div>
      <div className={style["filter__filter"]}>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          onChange={handleFilter}
          value={filters.category || ""}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Literature">Literature</option>
          <option value="Transportation">Transportation</option>
          <option value="Accessories">Accessories</option>
          <option value="Kitchenware">Kitchenware</option>
        </select>
      </div>
      <button className={style["clear-filter-btn"]} onClick={clearFilter}>
        Clear all filters
      </button>
    </div>
  );
};

export default Filter;
