import classes from "./Button.module.css";

const Button = ({ text, onClick, style }) => {
  return (
    <button className={classes.btn} onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
