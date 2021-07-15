import React from "react";
import Styles from "./About.module.css";

export default function FlexContainer(props) {
  if (props.class === "rightorange") {
    return (
      <div className={Styles.rightorange}>
        <div className={Styles.description}>
          <h1>{props.title}</h1>
          <p>{props.description1}</p>
          <p>{props.description2}</p>
        </div>

        <img src={props.image} alt="illustration" />
      </div>
    );
  } else if (props.class === "leftwhite") {
    return (
      <div className={Styles.leftwhite}>
        <div className={Styles.description}>
          <h1>{props.title}</h1>
          <p>{props.description1}</p>
          <p>{props.description2}</p>
        </div>

        <img src={props.image} alt="illustration" />
      </div>
    );
  } else if (props.class === "rightwhite") {
    return (
      <div className={Styles.rightwhite}>
        <div className={Styles.description}>
          <h1>{props.title}</h1>
          <p>{props.description1}</p>
          <p>{props.description2}</p>
        </div>

        <img src={props.image} alt="illustration" />
      </div>
    );
  }
}
