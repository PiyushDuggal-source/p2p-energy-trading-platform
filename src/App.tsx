import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dash from "./components/Dash";
import Fixtrading from "./components/Fixtrading";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Options from "./components/Options";
import Preferential from "./components/Preferential";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dash />} />
        <Route path="/options" element={<Options />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pereferential" element={<Preferential />} />
        <Route path="/fixtrading" element={<Fixtrading />} />
      </Routes>
    </div>
  );
}

export default App;
