import { useState, useEffect } from "react";
import JobseekerList from "../components/jobseekerlist/JobseekerList";
import { useNavigate } from "react-router-dom";
function Alljobseekers() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedJobseekers, setLoadedJobseekers] = useState([]);
  function backToMain() {
    navigate("/");
  }
  useEffect(() => {
    setIsLoading(true);
    fetch("https://ptolemy-whisper.herokuapp.com/api/v1/jobseeker")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const jobseekers = data.Jobseekers;

        setIsLoading(false);

        setLoadedJobseekers(jobseekers);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1 onClick={backToMain}>All Jobseekers</h1>

      <JobseekerList jobseekers={loadedJobseekers}></JobseekerList>
    </section>
  );
}
export default Alljobseekers;
