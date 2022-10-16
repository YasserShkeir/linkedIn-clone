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

const callSignUp = async () => {
  let name = document.getElementById("signUpName");
  let email = document.getElementById("signUpEmail");
  let phone = document.getElementById("signUpPhone");
  let userType = document.getElementById("signUpType");
  let password = document.getElementById("signUpPass");

  let task = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    userType: parseInt(userType.value),
    password: password.value,
  };

  const post = await axios.post("http://127.0.0.1:3000/auth/signup", task, {
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });

  console.log(post);

  if (post.status === 200) {
    alert("Account Created, Please Log In");
  } else {
    alert("Error");
  }
};

const LandingInput = ({ state }) => {
  if (!state) {
    return (
      <>
        <div className={classes.colLabel}>Join our professional community</div>
        <DataInput type="text" label="Name" id="signUpName" />
        <DataInput type="email" label="Email" id="signUpEmail" />
        <DataInput type="tel" label="Phone Number" id="signUpPhone" />
        <select id="signUpType">
          <option value={3}>Looking for Jobs</option>
          <option value={2}>Looking for Employees</option>
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
