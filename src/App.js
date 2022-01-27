//import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Alljobseekers from "./pages/Alljobseekers";
import UpdateJobseekerInfo from "./components/UpdateJobseekerInfo";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/allJobseekers" element={<Alljobseekers />} />
        <Route path="/updateJobseeker/:id" element={<UpdateJobseekerInfo />} />
      </Routes>
    </div>
  );
}

export default App;
