import React from "react";
import Styles from "./Home.module.css";

export default function Projects(props) {
  if (props.class === "web") {
    return (
      <div
        style={{
          backgroundImage:
            "url(/images/home/desktop/image-web-design-large.jpg)",
        }}
        className={Styles.web}
      >
        <h2>{props.title}</h2>

        <div className={Styles.viewcontainer}>
          <h4>View Projects</h4>
          <img src="/images/shared/desktop/icon-right-arrow.svg" alt="" />
        </div>
      </div>
    );
  } else if (props.class === "graphic") {
    return (
      <div
        style={{
          backgroundImage: "url(/images/home/desktop/image-app-design.jpg)",
        }}
        className={Styles.graphic}
      >
        <h2>{props.title}</h2>
        <div className={Styles.viewcontainer}>
          <h4>View Projects</h4>
          <img src="/images/shared/desktop/icon-right-arrow.svg" alt="" />
        </div>
      </div>
    );
  } else if (props.class === "app") {
    return (
      <div
        style={{
          backgroundImage: "url(/images/home/desktop/image-graphic-design.jpg)",
        }}
        className={Styles.app}
      >
        <h2>{props.title}</h2>
        <div className={Styles.viewcontainer}>
          <h4>View Projects</h4>
          <img src="/images/shared/desktop/icon-right-arrow.svg" alt="" />
        </div>
      </div>
    );
  }
}
