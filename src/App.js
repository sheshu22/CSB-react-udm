import React from "react";
import "./styles.css";
import Card from "./card";

export default function App() {
  return (
    <div className="App">
      <h1>My Contacts</h1>
      <Card
        name="Jhonny"
        img="https://i.zoomtventertainment.com/story/my_1.jpg?tr=w-1200,h-900"
        alt="image"
        tele="9878987890"
        mail="jhonny@.com"
      />
      <Card
        name="Sundar"
        img="https://media.wired.com/photos/5dd3081844aad10009406a30/1:1/w_2400,c_limit/Biz-Sundar-h_20.93146994.jpg"
        tele="6758598467"
        mail="sundar@g.com"
      />
      <Card
        name="Don"
        img="https://www.filmibeat.com/img/2021/01/xkrack-1609484922.jpg.pagespeed.ic.6kNCpE2rRF.jpg"
        tele="8753713467"
        mail="kracK@g.com"
      />
    </div>
  );
}
