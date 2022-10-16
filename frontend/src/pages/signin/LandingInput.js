import classes from "./LandingPage.module.css";
import DataInput from "../../components/layout/dataInput/DataInput";
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

const LandingInput = () => {
  return (
    <>
      <div className={classes.colLabel}>
        Welcome to your professional community
      </div>
      <DataInput type="email" label="Email" id="signInEmail" />
      <DataInput type="password" label="Password" id="signInPass" />
      <button onClick={callSignIn}>Sign In</button>
    </>
  );
};

export default LandingInput;
