import { FC } from "react";
import style from "./SkeletonLoader.module.scss";
import SkeletonItemCard from "../SkeletonItemCard/SkeletonItemCard";

const SkeletonLoader: FC = () => {
  return (
    <div className={style["skeleton-loader"]}>
      {[1, 2, 3, 4, 5].map((n) => (
        <SkeletonItemCard key={n} />
      ))}
    </div>
  );
};

export default SkeletonLoader;
