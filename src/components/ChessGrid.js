import classes from "./ChessGrid.module.css";
import { useNavigate } from "react-router-dom";
function ChessGrid(props) {
  const navigate = useNavigate();
  function viewAllSeekersHandler() {
    console.log("clicked viewAllSeekersHandler");
    navigate("/allJobseekers");
  }
  return (
    <div className={classes.chessGrid}>
      <strong className={classes.el1}>
        <label className={classes.label}>View All Seekers</label>

        <button
          className={classes.btn}
          onClick={viewAllSeekersHandler}
        ></button>
      </strong>
    </div>
  );
}
export default ChessGrid;
