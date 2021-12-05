import classes from "./Bookkeeping.module.css";

function Bookkeeping(props) {
  function handleSubmit(e) {
    console.log(e);
    console.log("Clicked!");
    e.preventDefault();
  }
  return (
    <form className={classes.expenseContainer} onSubmit={handleSubmit}>
      <label htmlFor="cost">Expense</label>
      <input type="number" id="cost" step="0.01" />

      <label htmlFor="date">Date</label>
      <input type="date" id="date" />

      <label htmlFor="reason">Reason</label>
      <input type="text" id="reason" />
      <input className="submitButton" type="submit" value="Submit" />
    </form>
  );
}
export default Bookkeeping;
