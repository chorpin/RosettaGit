import classes from "./ChessGrid.module.css";
function ChessGrid(props) {
  return (
    <div className={classes.chessGrid}>
      <strong className={classes.el1}>王业</strong>
      <strong className={classes.el2}>不可</strong>
      <strong className={classes.el3}>偏安于蜀都</strong>
    </div>
  );
}
export default ChessGrid;
