/* eslint-disable react/prop-types */
import style from "./inputText.module.css";

function InputText({ label, inputId, value, onChange }) {
  return (
    <div>
      <div>
        <label className={style["label"]} htmlFor={inputId}>{label}</label>
      </div>
      <div>
        <input
          className={style["input"]}
          id={inputId}
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default InputText;
