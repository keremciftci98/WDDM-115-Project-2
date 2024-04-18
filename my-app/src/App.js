import logo from "./logo.svg";
import "./App.css";
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import HomePage from "./HomePage";
import MoviePage from "./MoviePage";
import RewardsPage from "./RewardsPage";

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