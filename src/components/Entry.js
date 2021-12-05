import classes from "./Entry.module.css";

function Entry(props) {
  //console.log(props.name);
  //console.log("Hi");

  return (
    <div className={classes.Entry}>
      <button className="EntryName">{props.name}</button>
      <p className="EntryDescription">{props.description}</p>
    </div>
  );
}

export default Entry;
