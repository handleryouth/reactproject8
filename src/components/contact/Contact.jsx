import React, {useEffect} from "react";
import Place from "../about/Place";
import Style from "./Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  });

  return (
    <div className={Style.contactcontainer}>
      <div data-aos="fade-up" className={Style.formcontainer}>
        <div className={Style.contactdescription}>
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>

        <div className={Style.forms}>
          <div className={Style.formlist}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email Address"/>
            <input type="text" placeholder="Phone" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          </div>

          <div className={Style.buttoncontainer}>
            <button>Submit</button>
          </div>
        </div>
      </div>

      <div className={Style.place}>
        <Place
          image="/images/shared/desktop/illustration-canada.svg"
          location="CANADA"
        />
        <Place
          image="/images/shared/desktop/illustration-australia.svg"
          location="AUSTRALIA"
        />

        <Place
          image="/images/shared/desktop/illustration-united-kingdom.svg"
          location="United Kingdom"
        />
      </div>
    </div>
  );
}
