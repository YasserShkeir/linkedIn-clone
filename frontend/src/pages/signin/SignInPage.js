import signInImage from "../../assets/signin/signin.svg";
import classes from "./SignInPage.module.css";

const SignInPage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.col}>
        <div className={classes.colLabel}>
          Welcome to your professional community
        </div>
        <div>Test</div>
      </div>
      <img src={signInImage} alt="signin" />
    </div>
  );
};

export default SignInPage;
