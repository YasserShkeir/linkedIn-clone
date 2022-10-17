const GetJobs = ({ option, data }) => {
  if (data.data) {
    return (
      <>
        {data.data.jobs.map((job) => {
          return (
            <div key={job._id}>
              <h4>{JSON.stringify(job, undefined, 4)}</h4>
            </div>
          );
        })}
      </>
    );
  }
};

export default GetJobs;
