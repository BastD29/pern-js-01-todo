import { FC } from "react";
import { ItemType } from "../../types/item";
import style from "./ItemCard.module.scss";

type ItemCardPropsType = {
  item: ItemType;
};

const ItemCard: FC<ItemCardPropsType> = ({ item }) => {
  const { category, inStock, name, price } = item;
  return (
    <div className={style["item-card"]}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>{inStock ? "In Stock" : "Out of stock"}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default ItemCard;
