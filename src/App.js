import React from "react";
import "./styles.css";

export default function App() {
  let number = 7,
    name = "nani",
    lname = "reddy";

  let d = new Date();
  let date = d.getFullYear();
  return (
    <div className="App">
      <div>
        <h1 className="div" contentEditable="true" spellCheck="false">
          My Fav Foods
        </h1>
        <ul>
          <li>biryani</li>
          <li>biryani</li>
          <li>biryani</li>
        </ul>
      </div>
      <h1>
        Hello {name} {lname}
      </h1>
      <h2>Your number is {number}</h2>

      <p>created by {name}</p>
      <p>copyright {date}</p>
    </div>
  );
}
