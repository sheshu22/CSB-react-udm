import React from "react";
import "./styles.css";
import Heading from "./Heading";

export default function App() {
  let name = "nani",
    lname = "reddy";

  let d = new Date();
  let hour = d.getHours();
  let x;

  if (hour >= 0 && hour <= 12) {
    x = "Good Morning";
  } else if (hour > 12 && hour <= 6) {
    x = "Good Afternoon";
  } else {
    x = "Good evening";
  }

  const h1Color = {
    color: "red"
  };

  if (x === "Good Afternoon") {
    h1Color.color = "green";
  } else if (x === "Good Morning") {
    h1Color.color = "red";
  } else {
    h1Color.color = "blue";
  }

  return (
    <div className="App">
      <Heading />
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
      <h1 className="heading" style={h1Color}>
        {x}
      </h1>
    </div>
  );
}
