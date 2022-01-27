//import logo from "./logo.svg";
import classes from "./Home.module.css";
import JobseekerInfo from "../components/JobseekerInfo";
import ChessGrid from "../components/ChessGrid";

function Home() {
  function SubmitInfoHandler(submitData) {
    fetch("https://ptolemy-whisper.herokuapp.com/api/v1/jobseeker", {
      method: "POST",
      body: JSON.stringify(submitData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className={classes.outsideContainer}>
      <header className={classes.AppHeader}>Job Seeker</header>
      <ChessGrid></ChessGrid>
      <JobseekerInfo onSubmitInfo={SubmitInfoHandler}></JobseekerInfo>
    </div>
  );
}

export default Home;
