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
      <h1 className="div" contentEditable="true" spellCheck="false">
        My Fav Foods
      </h1>
      <div>
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.670xw:1.00xh;0.173xw,0&resize=480:*"
          alt="img"
          className="imgs"
        ></img>
        <img
          src="https://www.diabetes.co.uk/wp-content/uploads/2019/01/iStock-10131071761-1.jpg"
          alt="img2"
          className="imgs"
        ></img>
        <img
          src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=960,872"
          alt="img3"
          className="imgs"
        ></img>
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
