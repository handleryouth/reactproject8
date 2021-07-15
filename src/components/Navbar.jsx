import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img src="/images/shared/desktop/logo-dark.png" alt="Logo" />
      </Link>

      <div className={styles.link}>
        <Link to="/About">Our Company</Link>
        <Link to="/Locations">Locations</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
}
