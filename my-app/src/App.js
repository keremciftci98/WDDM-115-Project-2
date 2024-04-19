import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import './App.css'
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
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/MoviePage">MoviePage</Link>
            </li>
            <li>
              <Link to="/RewardsPage">RewardsPage</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MoviePage" element={<MoviePage />} />
          <Route path="/RewardsPage" element={<RewardsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
