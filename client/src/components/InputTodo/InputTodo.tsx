import { FormEvent, useState } from "react";
import style from "./InputTodo.module.scss";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location.href = "/";
    } catch (err) {
      console.error((err as Error).message);
    }
  };

  return (
    <div className={style["input-todo"]}>
      <form className={style["input-todo__form"]} onSubmit={onSubmitForm}>
        <input
          type="text"
          className={style["input-todo__form-control"]}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className={style["input-todo__form-btn"]}>Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
