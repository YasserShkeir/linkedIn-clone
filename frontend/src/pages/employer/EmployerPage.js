import axios from "axios";

const EmployerPage = () => {
  const getJobs = async () => {
    const get = await axios.get("http://127.0.0.1:3000/users/getJobs", {
      headers: {
        "content-type": "application/json; charset=utf-8",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    });

    console.log(get);
  };

  return (
    <>
      <h1>Hello</h1>
      <button onClick={getJobs}>Test</button>
    </>
  );
};

export default EmployerPage;
