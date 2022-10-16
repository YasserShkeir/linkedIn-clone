import signInImage from "../../assets/signin/signin.svg";
import classes from "./LandingPage.module.css";
import { useState } from "react";
import Button from "../../components/button/Button";
import LandingInput from "./LandingInput";

const LandingPage = () => {
  const [selectState, setSelectState] = useState(true);

  const oppositeState = () => {
    setSelectState(!selectState);
  };

  return (
    <div className={classes.main}>
      <div className={classes.col}>
        <LandingInput state={selectState} />
        <h3>
          {selectState ? (
            <>Don't Have an account?</>
          ) : (
            <>Already Have an account?</>
          )}{" "}
          <Button
            text={selectState ? <>Create account</> : <>Sign In</>}
            onClick={oppositeState}
            style={{
              fontSize: "14px",
              padding: "5px 15px",
              height: "fit-content",
              width: "fit-content",
            }}
          />
        </h3>
      </div>
      <img src={signInImage} alt="signin" />
    </div>
  );
};

export default LandingPage;
