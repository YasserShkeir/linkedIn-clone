import GetJobs from "./GetJobs";
import axios from "axios";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import classes from "./EmployerPage.module.css";

const EmployerPage = () => {
  const [selectState, setSelectState] = useState(true);
  const [selectData, setSelectData] = useState("");
  let navigate = useNavigate();

  const getJobs = async () => {
    const get = await axios.get("http://127.0.0.1:3000/users/getJobs", {
      headers: {
        "content-type": "application/json; charset=utf-8",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    });

    const res = get;
    setSelectData(res);
    setSelectState(false);
  };

  useEffect(() => {
    getJobs();
  }, []);

  const toCreateJob = () => {
    navigate("/employer/createJob");
    <Navigate replace to="/employer/createJob" />;
  };

  return (
    <>
      <div>
        <div className={classes.flex}>
          <h1>Jobs List:</h1>
          <Button text="Create Job" onClick={toCreateJob} />
        </div>

        <GetJobs option={selectState} data={selectData} />
      </div>
    </>
  );
};

export default EmployerPage;
