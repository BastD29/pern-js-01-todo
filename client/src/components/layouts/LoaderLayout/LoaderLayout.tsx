import { FC } from "react";
import style from "./LoaderLayout.module.scss";

const LoaderLayout: FC = () => {
  return (
    <div className={style["loader-layout"]}>
      <header className={style["loader-layout__header"]}>Loading...</header>
      <main className={style["loader-layout__main"]}>
        <h2>Loading...</h2>
      </main>
    </div>
  );
};

export default LoaderLayout;
