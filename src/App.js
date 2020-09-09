import React from "react";
import "./styles.css";
import Rating from "./Rating";

export default function App() {
  return (
    <div className="App">
      <div>
        <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" />
      </div>
    </div>
  );
}
