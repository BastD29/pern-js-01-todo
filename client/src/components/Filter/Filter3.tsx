// import { ChangeEvent, FC, useEffect, useState } from "react";
// import { CLEAR_FILTER, SET_FILTER } from "../../constants/actions";
// import { useFilterContext } from "../../hooks/useFilterContext";
// import style from "./Filter.module.scss";
// import useDebounce from "../../hooks/useDebounce";

// const Filter: FC = () => {
//   const {
//     dispatch,
//     state: { filters },
//   } = useFilterContext();

//   const [name, setName] = useState(filters.name || "");
//   const [minPrice, setMinPrice] = useState(filters.minPrice || "");
//   const [maxPrice, setMaxPrice] = useState(filters.maxPrice || "");

//   // Debounce the search and range inputs
//   const debouncedName = useDebounce(name, 500); // 500ms delay
//   const debouncedMinPrice = useDebounce(minPrice, 500); // 500ms delay
//   const debouncedMaxPrice = useDebounce(maxPrice, 500); // 500ms delay

//   useEffect(() => {
//     if (debouncedName !== filters.name) {
//       dispatch({
//         type: SET_FILTER,
//         payload: { name: "name", value: debouncedName },
//       });
//     }
//   }, [debouncedName]);

//   useEffect(() => {
//     if (debouncedMinPrice !== filters.price) {
//       dispatch({
//         type: SET_FILTER,
//         payload: { name: "minPrice", value: debouncedMinPrice },
//       });
//     }
//   }, [debouncedMinPrice]);

//   useEffect(() => {
//     if (debouncedMaxPrice !== filters.price) {
//       dispatch({
//         type: SET_FILTER,
//         payload: { name: "maxPrice", value: debouncedMaxPrice },
//       });
//     }
//   }, [debouncedMaxPrice]);

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
//       if (name === "name") {
//         setName(value); // Update local state for name
//       } else if (name === "minPrice") {
//         setMinPrice(value); // Update local state for minPrice
//       } else if (name === "maxPrice") {
//         setMaxPrice(value); // Update local state for maxPrice
//       } else {
//         dispatch({
//           type: SET_FILTER,
//           payload: { name, value },
//         });
//       }
//     }
//   };

//   const clearFilter = () => {
//     setName("");
//     setMinPrice("");
//     setMaxPrice("");
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
//           // value={filters.name || ""}
//           value={name}
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
//           // value={filters.minPrice || ""}
//           value={minPrice}
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
//           // value={filters.maxPrice || ""}
//           value={maxPrice}
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
