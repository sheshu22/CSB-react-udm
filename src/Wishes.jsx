import React from "react";

let d = new Date();
let hour = d.getHours();
let x;

const h1Color = {
  color: "red"
};

if (hour >= 0 && hour <= 12) {
  x = "Good Morning";
  h1Color.color = "green";
} else if (hour > 12 && hour <= 6) {
  x = "Good Afternoon";
  h1Color.color = "red";
} else {
  x = "Good evening";
  h1Color.color = "blue";
}

export default function Wishes() {
  return (
    <h1 className="heading" style={h1Color}>
      {x}
    </h1>
  );
}
