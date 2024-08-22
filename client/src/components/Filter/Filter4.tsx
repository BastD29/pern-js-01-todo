// import { ChangeEvent, FC, useEffect, useState } from "react";
// import { CLEAR_FILTER, SET_FILTER } from "../../constants/actions";
// import { useFilterContext } from "../../hooks/useFilterContext";
// import useDebounce from "../../hooks/useDebounce";
// import style from "./Filter.module.scss";

// const Filter: FC = () => {
//   const {
//     dispatch,
//     state: { filters },
//   } = useFilterContext();

//   const inputsToDebounce = {
//     name: filters.name || "",
//     minPrice: filters.minPrice || "",
//     maxPrice: filters.maxPrice || "",
//   };
//   const [inputs, setInputs] = useState(inputsToDebounce);

//   const debouncedInputs = useDebounce(inputs, 500);

//   useEffect(() => {
//     Object.entries(debouncedInputs).forEach(([key, value]) => {
//       if (value !== filters[key]) {
//         dispatch({
//           type: SET_FILTER,
//           payload: { name: key, value: value.toString() },
//         });
//       }
//     });
//   }, [debouncedInputs, filters]);

//   const handleFilter = (
//     event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = event.target;

//     if (type === "checkbox") {
//       const target = event.target as HTMLInputElement;

//       dispatch({
//         type: SET_FILTER,
//         payload: { name: name, value: target.checked.toString() },
//       });
//     } else {
//       setInputs((prevInputs) => ({
//         ...prevInputs,
//         [name]: value,
//       }));
//     }
//   };

//   const clearFilter = () => {
//     setInputs({ name: "", minPrice: "", maxPrice: "" });
//     dispatch({ type: CLEAR_FILTER });
//   };

//   return (
//     <div className={style["filter"]}>
//       <div className={style["filter__filter"]}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="search"
//           name="name"
//           placeholder="Name"
//           onChange={handleFilter}
//           value={inputs.name}
//         />
//       </div>
//       <div className={style["filter__filter"]}>
//         <label htmlFor="inStock">In stock</label>
//         <input
//           type="checkbox"
//           name="inStock"
//           onChange={handleFilter}
//           checked={filters.inStock === "true"}
//         />
//       </div>
//       <div className={style["filter__filter"]}>
//         <label htmlFor="minPrice">Min Price</label>
//         <input
//           type="range"
//           name="minPrice"
//           min="0"
//           max="1200"
//           onChange={handleFilter}
//           value={inputs.minPrice}
//         />
//         <span>{filters.minPrice || ""}</span>
//       </div>
//       <div className={style["filter__filter"]}>
//         <label htmlFor="maxPrice">Max Price</label>
//         <input
//           type="range"
//           name="maxPrice"
//           min="0"
//           max="1200"
//           onChange={handleFilter}
//           value={inputs.maxPrice}
//         />
//         <span>{filters.maxPrice || ""}</span>
//       </div>
//       <div className={style["filter__filter"]}>
//         <label htmlFor="category">Category</label>
//         <select
//           name="category"
//           onChange={handleFilter}
//           value={filters.category || ""}
//         >
//           <option value="">All Categories</option>
//           <option value="Electronics">Electronics</option>
//           <option value="Literature">Literature</option>
//           <option value="Transportation">Transportation</option>
//           <option value="Accessories">Accessories</option>
//           <option value="Kitchenware">Kitchenware</option>
//         </select>
//       </div>
//       <button className={style["clear-filter-btn"]} onClick={clearFilter}>
//         Clear all filters
//       </button>
//     </div>
//   );
// };

// export default Filter;
