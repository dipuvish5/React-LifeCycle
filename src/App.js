import React from "react";
import Parent from "./Parent";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Parent working="yes,working" />
    </div>
  );
}
