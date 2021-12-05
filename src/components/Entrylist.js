import Entry from "./Entry";
import classes from "./EntryList.module.css";

function Entrylist(props) {
  return (
    <div className={classes.entryContainer}>
      {props.entryPairs.map((e, i) => {
        return <Entry name={e[0]} description={e[1]} key={i}></Entry>;
      })}
    </div>
  );
}

export default Entrylist;
