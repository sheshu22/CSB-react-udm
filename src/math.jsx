import React from "react";

function Add(a, b) {
  return a + b;
}
function Sub(a, b) {
  return a - b;
}
function Mul(a, b) {
  return a * b;
}

export default function Math() {
  return (
    <ul>
      <li>{Add(1, 2)}</li>
      <li>{Sub(1, 2)}</li>
      <li>{Mul(1, 2)}</li>
    </ul>
  );
}

export { Math, Add, Sub, Mul };
