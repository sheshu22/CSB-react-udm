import React from "react";

export default function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="lol" />
      <p>{props.tele}</p>
      <p>{props.mail}</p>
    </div>
  );
}
