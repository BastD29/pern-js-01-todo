// import { ChangeEvent, FC } from "react";
// import { CLEAR_FILTER, SET_FILTER } from "../../constants/actions";
// import { useFilterContext } from "../../hooks/useFilterContext";
// import style from "./Filter.module.scss";

// const Filter: FC = () => {
//   const {
//     dispatch,
//     state: { filters },
//   } = useFilterContext();

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
//       dispatch({
//         type: SET_FILTER,
//         payload: { name: name, value },
//       });
//     }
//   };

//   const clearFilter = () => {
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
//           value={filters.name || ""}
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
//           value={filters.minPrice || ""}
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
//           value={filters.maxPrice || ""}
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
