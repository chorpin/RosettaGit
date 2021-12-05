//import logo from "./logo.svg";
import "./App.css";
import Bookkeeping from "./components/Bookkeeping";
import Entrylist from "./components/Entrylist";
import ChessGrid from "./components/ChessGrid";

function App() {
  /*
  Config: 
   */
  const namesList = ["Saber", "Archer", "Lancer"];
  const des = [
    "To get the main info",
    "Fetch some info from Web",
    "Request a specific API",
  ];
  var nameMap = namesList.map((e, i) => [e, des[i]]);
  console.log(nameMap);

  return (
    <div className="outsideContainer">
      <header className="App-header">ROSETTA STONE</header>
      <Bookkeeping></Bookkeeping>
      <Entrylist entryPairs={nameMap}></Entrylist>
      <ChessGrid></ChessGrid>
    </div>
  );
}

export default App;
