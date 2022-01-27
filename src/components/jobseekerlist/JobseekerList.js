import JobseekerItem from "./JobseekerItem";

import classes from "./JobseekerList.module.css";

function JobseekerList(props) {
  return (
    <ul className={classes.list}>
      {props.jobseekers.map((m) => (
        <JobseekerItem
          key={m._id}
          id={m._id}
          name={m.name}
          date={m.date}
          phone={m.phone}
          email={m.email}
          addressStreet={m.addressStreet}
          addressState={m.addressState}
          addressZipcode={m.addressZipcode}
        ></JobseekerItem>
      ))}
    </ul>
  );
}

export default JobseekerList;
