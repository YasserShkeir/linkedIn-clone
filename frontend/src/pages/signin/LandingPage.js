import signInImage from "../../assets/signin/signin.svg";
import classes from "./LandingPage.module.css";
import { useState } from "react";

import LandingInput from "./LandingInput";

const LandingPage = () => {
  const [selectState, setSelectState] = useState(false);
  return (
    <div className={classes.main}>
      <div className={classes.col}>
        <LandingInput state={selectState} />
      </div>
      <img src={signInImage} alt="signin" />
    </div>
  );
};

export default LandingPage;
