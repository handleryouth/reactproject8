import React from "react";
import Projects from "./Projects";
import Objective from "./Objective";
import Styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={Styles.container}>
        <div>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button>LEARN MORE</button>
        </div>

        <div className={Styles.imagecontainer}>
          <img
            src="/images/home/desktop/image-hero-phone.png"
            alt="illustration"
          />
        </div>
      </div>

      <div className={Styles.projectcontainer}>
        <Projects
          class="web"
          title="WEB DESIGN"
          background="/images/home/desktop/image-web-design-large.jpg"
        />
        <Projects
          class="app"
          title="APP DESIGN"
          background="/images/home/desktop/image-web-design-large.jpg"
        />

        <Projects
          class="graphic"
          title="GRAPHIC DESIGN"
          background="/images/home/desktop/image-web-design-large.jpg"
        />
      </div>

      <div className={Styles.objective}>
        <Objective
          image="/images/home/desktop/illustration-passionate.svg"
          title="PASSIONATE"
          description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        />

        <Objective
          image="/images/home/desktop/illustration-resourceful.svg"
          title="RESOURCEFUL"
          description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        />

        <Objective
          image="/images/home/desktop/illustration-friendly.svg"
          title="FRIENDLY"
          description=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        />
      </div>
    </div>
  );
}
