import React from "react";
import "./styles.css";

export default function App() {
  let number = 7,
    name = "nani";
  return (
    <div className="App">
      <div className="div">
        <h1>My Fav Foods</h1>
        <ul>
          <li>biryani</li>
          <li>biryani</li>
          <li>biryani</li>
        </ul>
      </div>
      <h1>Hello {name}</h1>
      <h2>Your number is {number}</h2>
    </div>
  );
}
