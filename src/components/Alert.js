import classes from "./Alert.module.css";

function Alert(props) {
  function cancelAlert() {
    props.onContinue();
  }

  return (
    <div className={classes.alert}>
      <p>Submitted !</p>
      <button className={classes.btn} onClick={cancelAlert}>
        Continue
      </button>
    </div>
  );
}

export default Alert;
