import classes from "./LandingPage.module.css";
import DataInput from "../../components/dataInput/DataInput";
import Button from "../../components/button/Button";
import axios from "axios";

const callSignIn = async () => {
  let email = document.getElementById("signInEmail");
  let password = document.getElementById("signInPass");
  let task = {
    email: email.value,
    password: password.value,
  };

  const post = await axios.post("http://127.0.0.1:3000/auth/login", task, {
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });

  console.log(post.data);

  if (post.data) {
    localStorage.setItem("jwt", post.data);
  }
};

const callSignUp = async () => {};

const LandingInput = ({ state }) => {
  if (!state) {
    return (
      <>
        <div className={classes.colLabel}>Join our professional community</div>
        <DataInput type="text" label="Name" id="signUpName" />
        <DataInput type="email" label="Email" id="signUpEmail" />
        <DataInput type="tel" label="Phone Number" id="signUpPhone" />
        <select>
          <option>Looking for Jobs</option>
          <option>Looking for Employees</option>
        </select>
        <DataInput type="password" label="Password" id="signUpPass" />
        <Button text="Create Account" onClick={callSignUp} />
      </>
    );
  } else {
    return (
      <>
        <div className={classes.colLabel}>
          Welcome to your professional community
        </div>
        <DataInput type="email" label="Email" id="signInEmail" />
        <DataInput type="password" label="Password" id="signInPass" />
        <Button text="Sign In" onClick={callSignIn} />
      </>
    );
  }
};

export default LandingInput;
