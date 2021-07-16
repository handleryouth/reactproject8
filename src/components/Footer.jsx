import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import styles from "./Footer.module.css"
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  });


  return (
    <div data-aos="fade-up" className={styles.footer}>
      <div className={styles.talkabout}>
        <div>
          <h1>Let’s talk about your project</h1>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>

      <span className={`${styles.circle1} ${styles.circle}`}></span>
      <span className={`${styles.circle2} ${styles.circle}`}></span>
      <span className={`${styles.circle3} ${styles.circle}`}></span>
      <span className={`${styles.circle4} ${styles.circle}`}></span>
      <span className={`${styles.circle5} ${styles.circle}`}></span>

        <button>GET IN TOUCH</button>
      </div>

      <div className={styles.footerlink}>
        <Link to="/"><img src="/images/shared/desktop/logo-light.png" alt="Logo" /> </Link>

        <div className={styles.linklist}>
          <Link to="/About">Our Company</Link>
          <Link to="/Locations">Locations</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>

      <div className={styles.address}>
        <div>
          <p>Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>

        <div>
          <p>Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>

        <div className={styles.socialicon}>
          <img
            src="/images/shared/desktop/icon-facebook.svg"
            alt="social-icon"
          />
          <img
            src="/images/shared/desktop/icon-youtube.svg"
            alt="social-icon"
          />
          <img
            src="/images/shared/desktop/icon-twitter.svg"
            alt="social-icon"
          />
          <img
            src="/images/shared/desktop/icon-pinterest.svg"
            alt="social-icon"
          />
          <img
            src="/images/shared/desktop/icon-instagram.svg"
            alt="social-icon"
          />
        </div>
      </div>
    </div>
  );
}
