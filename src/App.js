import React from "react";
import "./styles.css";
import Card from "./card";
// import Heading from "./Heading";
// import Images from "./Images";
// import Wishes from "./Wishes";
// import Math from "./math";

export default function App() {
  return (
    <div className="App">
      {/* <Heading />
      <Images />
      <Wishes />
      <Math /> */}
      <h1>My Contacts</h1>
      <Card
        name="Jhonny"
        img="https://i.zoomtventertainment.com/story/my_1.jpg?tr=w-1200,h-900"
        tele="9878987890"
        mail="jhonny@.com"
      />
    </div>
  );
}
