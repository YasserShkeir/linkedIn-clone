import EmployeeGetJobs from "./EmployeeGetJobs";
import { useState, useEffect } from "react";
import classes from "./EmployeePage.module.css";
import axios from "axios";

const EmployeePage = () => {
  const [selectState, setSelectState] = useState(true);
  const [selectData, setSelectData] = useState("");

  const getJobs = async () => {
    const get = await axios.get("http://127.0.0.1:3000/users/getEmpJobs", {
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

  return (
    <>
      <div>
        <div className={classes.flex}>
          <h1>Jobs List:</h1>
        </div>

        <EmployeeGetJobs option={selectState} data={selectData} />
      </div>
    </>
  );
};

export default EmployeePage;
