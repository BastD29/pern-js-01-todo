import { FC } from "react";
import InputTodo from "../../components/InputTodo/InputTodo";
import style from "./Store.module.scss";
import ListTodos from "../../components/ListTodos/ListTodos";

const Store: FC = () => {
  return (
    <div className={style["store"]}>
      <InputTodo />
      <ListTodos />
    </div>
  );
};

export default Store;
