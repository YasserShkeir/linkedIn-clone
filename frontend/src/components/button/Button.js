import classes from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button className={classes.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
