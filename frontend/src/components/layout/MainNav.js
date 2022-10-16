import logo from "../../assets/LinkedIn-hori-transp.png";
import classes from "./Layout.module.css";

const MainNav = () => {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default MainNav;
