import React from "react";
import "./App.css";
import { Filter } from "./Filter";

function App() {
  const arrStrings = [
    "california",
    "everything",
    "aboveboard",
    "washington",
    "basketball",
    "weathering",
    "characters",
    "literature",
    "contraband",
    "appreciate",
  ];

  return <Filter arr={arrStrings} />;
}

export default App;
