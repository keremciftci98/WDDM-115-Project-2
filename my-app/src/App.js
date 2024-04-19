import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import TwentyFour from "./Pages/TwentyFour";
import TwentyThree from "./Pages/TwentyThree";
import TwentyTwo from "./Pages/TwentyTwo";
import TwentyOne from "./Pages/TwentyOne";
import Twenty from "./Pages/Twenty";
import Nineteen from "./Pages/Nineteen";
import NavBar from "./components/Navbar";
import MoviePage from "./Pages/MoviePage";

function App() {
  const currentPath = useLocation().pathname;
  const hideNavBar = currentPath.includes("/movie");

  return (
    <>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/twenty-four" element={<TwentyFour />} />
        <Route path="/twenty-three" element={<TwentyThree />} />
        <Route path="/archives/2022" element={<TwentyTwo />} />
        <Route path="/archives/2021" element={<TwentyOne />} />
        <Route path="/archives/2020" element={<Twenty />} />
        <Route path="/archives/2019" element={<Nineteen />} />

        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
