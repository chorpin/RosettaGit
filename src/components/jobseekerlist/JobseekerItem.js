import Card from "../ui/Card";
import { useState } from "react";
import classes from "./JobseekerItem.module.css";
import { useNavigate } from "react-router-dom";

function JobseekerItem(props) {
  const navigate = useNavigate();

  //updateJobseeker
  function navigateToUpdateJobseekerForm() {
    navigate(`/updateJobseeker/${props.id}`);
  }

  function deleteJobseekerHandler() {
    fetch(
      `https://ptolemy-whisper.herokuapp.com/api/v1/jobseeker/${props.id}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        console.log("Deleted!");

        navigate("/allJobseekers");
      })
      .then(() => {
        window.location.reload(false);
      });
  }
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.content}>
          <h1>
            {props.name}, DoB:{props.date}
          </h1>
          <p>Tel: {props.phone}</p>
          <p>E-mail: {props.email}</p>
        </div>
        <div className={classes.content}>
          <h3>{props.addressState}</h3>
          <address>{props.addressStreet}</address>
          <p>{props.addressZipcode}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={deleteJobseekerHandler}>Delete</button>
          <button onClick={navigateToUpdateJobseekerForm}>Update</button>
        </div>
      </li>
    </Card>
  );
}

export default JobseekerItem;
