import signInImage from "../../assets/signin/signin.svg";
import classes from "./SignInPage.module.css";
import DataInput from "../../components/layout/dataInput/DataInput";

const SignInPage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.col}>
        <div className={classes.colLabel}>
          Welcome to your professional community
        </div>
        <DataInput type="email" label="Email" id="signInEmail" />
      </div>
      <img src={signInImage} alt="signin" />
    </div>
  );
};

export default SignInPage;
