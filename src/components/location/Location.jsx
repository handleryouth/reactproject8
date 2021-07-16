import React, { useEffect } from "react";
import Style from "./Locations.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Location(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  });

  
  const reverse = {
    flexDirection: "row-reverse",
  };

  const rightmargin = {
    marginRight: "5vw",
  };

  return (
    <div
      data-aos="fade-up"
      style={props.title === "AUSTRALIA" ? reverse : null}
      className={Style.location}
    >
      <img src={props.image} alt="Illustration" />
      <div
        style={props.title === "AUSTRALIA" ? rightmargin : null}
        className={Style.description}
      >
        <h2>{props.title}</h2>

        <div className={Style.contact}>
          <div className={Style.contact1}>
            <p>{props.address1}</p>
            <p>{props.address2}</p>
            <p>{props.address3}</p>
          </div>

          <div className={Style.contact2}>
            <p>Contact</p>
            <p>{props.contact1}</p>
            <p>{props.contact2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
