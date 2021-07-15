import React from "react";
import Style from "./About.module.css";

export default function Place(props) {
  return (
    <div className={Style.nation}>
      <img src={props.image} alt="illustration" />
      <h3>{props.location}</h3>
      <button>See Location</button>
    </div>
  );
}
