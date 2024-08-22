import { FC } from "react";
import InputTodo from "../../components/InputTodo/InputTodo";
import style from "./Store.module.scss";

const Store: FC = () => {
  return (
    <div className={style["store"]}>
      <InputTodo />
    </div>
  );
};

export default Store;
