import React, { useEffect } from "react";
import Styles from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FlexContainer(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  });

  if (props.class === "rightorange") {
    return (
      <div data-aos="fade-up" className={Styles.rightorange}>
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
      <div data-aos="fade-up" className={Styles.leftwhite}>
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
      <div data-aos="fade-up" className={Styles.rightwhite}>
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
