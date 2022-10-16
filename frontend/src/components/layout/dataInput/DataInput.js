import { useState } from "react";
import classes from "./DataInput.module.css";

const DataInput = ({ type = "text", label, id, res }) => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className={classes.inputContainer}>
      <input type={type} value={value} onChange={handleChange} id={id} />
      <label className={value && classes.filled}>{label.toString()}</label>
    </div>
  );
};

export default DataInput;
