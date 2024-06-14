// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auftrag } from "./components/Auftrag/Auftrag";
import {Hose} from "./components/Hose/Hose"
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Auftrag" element={<Auftrag />} />
        <Route path="/hose" element = {<Hose />} />
      </Routes>
    </Router>
  );
}

export default App;