import React, {useEffect} from "react";
import Style from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Place(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  });

  return (
    <div data-aos="fade-up" className={Style.nation}>
      <img src={props.image} alt="illustration" />
      <h3>{props.location}</h3>
      <button>See Location</button>
    </div>
  );
}
