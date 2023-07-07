/* eslint-disable react/prop-types */
import style from "./button.module.css";

function Button({ submit, value, onchange }) {
  return (
    <div className={style["btn"]}>
      <button type={submit} onChange={onchange}>{value}</button>
    </div>
  );
}

export default Button;
