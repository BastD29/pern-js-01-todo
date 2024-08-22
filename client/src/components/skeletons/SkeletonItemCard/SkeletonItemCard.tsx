import { FC } from "react";
import style from "./SkeletonItemCard.module.scss";

const SkeletonItemCard: FC = () => {
  return (
    <div className={style["skeleton-item-card"]}>
      <h3>Loading...</h3>
      <p>Category: Loading...</p>
      <p>Loading...</p>
      <p>Price: Loading...</p>
    </div>
  );
};

export default SkeletonItemCard;
