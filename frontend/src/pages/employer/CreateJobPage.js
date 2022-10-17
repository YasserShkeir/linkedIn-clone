import DataInput from "../../components/dataInput/DataInput";
import Button from "../../components/button/Button";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./EmployerPage.module.css";

const CreateJobPage = () => {
  let navigate = useNavigate();

  const createJob = async () => {
    const title = document.getElementById("CJTitle");
    const location = document.getElementById("CJLocation");
    const remote = document.getElementById("CJRemote");
    const easyApply = document.getElementById("CJEasy");
    const text = document.getElementById("CJDesc");
    const date = document.getElementById("CJDate");
    const data = {
      title: title.value,
      location: location.value,
      remote: remote.value,
      easyApply: easyApply.value,
      text: text.value,
      date: date.value,
    };

    const post = await axios.post(
      "http://127.0.0.1:3000/users/createJob",
      data,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );

    if (post.status === 200) {
      alert("Job Created");
    } else {
      alert("Error");
    }
  };

  const toHome = () => {
    navigate("/employer");
    <Navigate replace to="/employer" />;
  };

  return (
    <>
      <div className={classes.flexCol}>
        <div className={classes.flex}>
          <Button
            text="Go Back"
            onClick={toHome}
            style={{
              fontSize: "14px",
              padding: "5px 15px",
              height: "fit-content",
              width: "fit-content",
            }}
          />
          <h3>Create Job Post</h3>
        </div>

        <DataInput type="text" label="Title" id="CJTitle" />
        <DataInput type="text" label="Location" id="CJLocation" />
        <select id="CJRemote">
          <option value={true}>Job is Remote</option>
          <option value={false}>Job is not Remote</option>
        </select>
        <select id="CJEasy">
          <option value={true}>EasyApply Allowed</option>
          <option value={false}>EasyApply Not Allowed</option>
        </select>
        <textarea placeholder="Job Description" id="CJDesc"></textarea>
        <DataInput type="date" id="CJDate" />

        <Button text="Create Job" onClick={createJob} />
      </div>
    </>
  );
};

export default CreateJobPage;
