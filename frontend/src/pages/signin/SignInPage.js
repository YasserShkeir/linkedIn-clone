import signInImage from "../../assets/signin/signin.svg";
import classes from "./SignInPage.module.css";
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

  // const res = await fetch("http://127.0.0.1:3000/auth/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify(task),
  // });

  console.log(post.data);

  // if (data.authorisation.token) {
  //   localStorage.setItem("currUser", JSON.stringify(data.user));
  //   localStorage.setItem("jwt", data.authorisation.token);
  // }
};

const SignInPage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.col}>
        <div className={classes.colLabel}>
          Welcome to your professional community
        </div>
        <DataInput type="email" label="Email" id="signInEmail" />
        <DataInput type="password" label="Password" id="signInPass" />
        <button onClick={callSignIn}>Sign In</button>
      </div>
      <img src={signInImage} alt="signin" />
    </div>
  );
};

export default SignInPage;
