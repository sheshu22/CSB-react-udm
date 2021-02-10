import React from "react";
import "./styles.css";
import Heading from "./Heading";
import Images from "./Images";
import Wishes from "./Wishes";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <Images />
      <Wishes />
    </div>
  );
}
