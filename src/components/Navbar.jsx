import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Media from "react-media";

export default function Navbar() {
  const [check, setCheck] = useState(false);

  function ChangeIcon() {
    setCheck((prevstate) => !prevstate);
    console.log(check);
  }

  function CloseMenu() {
    setCheck(false);
  }

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img src="/images/shared/desktop/logo-dark.png" alt="Logo" />
      </Link>

      <Media query="(max-width: 600px)">
        {(matches) => {
          return matches ? (
            <div className={styles.mobilecontainer}>
              <button
                onClick={ChangeIcon}
                className={`${styles.hamburger} ${styles.hamburgerspring} ${
                  check ? `${styles.isactive}` : ""
                }`}
                type="button"
              >
                <span class={`${styles.hamburgerbox}`}>
                  <span class={`${styles.hamburgerinner}`}></span>
                </span>
              </button>

              <div
                className={`${styles.linkcontainer} ${
                  check ? styles.bounceintop : styles.slideouttop
                }`}
              >
                <Link onClick={CloseMenu} to="/About">
                  Our Company
                </Link>
                <Link onClick={CloseMenu} to="/Locations">
                  Locations
                </Link>
                <Link onClick={CloseMenu} to="/Contact">
                  Contact
                </Link>
              </div>
            </div>
          ) : (
            <div className={styles.link}>
              <Link to="/About">Our Company</Link>
              <Link to="/Locations">Locations</Link>
              <Link to="/Contact">Contact</Link>
            </div>
          );
        }}
      </Media>
    </div>
  );
}
