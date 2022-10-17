import Button from "../../components/button/Button";
import classes from "./EmployeePage.module.css";
import axios from "axios";

const EmployeeGetJobs = ({ data }) => {
  const followEmployer = async (id) => {
    const data = {
      employerID: id,
    };

    const post = await axios.post(
      "http://127.0.0.1:3000/users/followEmployer",
      data,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );

    console.log(post.data);
  };

  if (data.data) {
    return (
      <>
        {data.data.jobs.map((job) => {
          return (
            <div key={job._id} className={classes.jobCard}>
              <div>
                <Button
                  text="Follow Employer"
                  style={{ fontSize: "18px" }}
                  onClick={async () => {
                    followEmployer(await job.employerID);
                  }}
                />
                <Button
                  text={job.easyApply ? "Easy Apply" : "Apply"}
                  style={{ fontSize: "18px" }}
                />
              </div>
              <div>
                <h3>
                  Title: {job.title} | Posted By: {job.employer}
                </h3>
                <h4>
                  Location: {job.location} | Due by: {job.date.substring(0, 10)}
                </h4>
                <h5>
                  <b>Requirements:</b>
                  <br />
                  <br />
                  {job.text}
                </h5>
              </div>
            </div>
          );
        })}
      </>
    );
  }
};

export default EmployeeGetJobs;
