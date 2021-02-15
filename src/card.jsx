import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.alt} />
      <p>{props.tele}</p>
      <p>{props.mail}</p>
    </div>
  );
}
