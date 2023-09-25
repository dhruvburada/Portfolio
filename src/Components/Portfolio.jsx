/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpg";

const imageAltText = "Person using Leptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "IOT based LPG gas Leakage Detection",
    description:
      "our team participated in the RK University exhibition. Our project was about detecting and switching off LPG gas leaks. Servo motors, MQ2 gas sensors, and buzzers were used in this project",
    url: "https://www.linkedin.com/posts/dhruv-burada_opportunity-university-rku-activity-7007672045907927040-ajDE?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "Software Engineering Virtual Experience",
    description:
      "Throughout this program, I had the incredible opportunity to explore the fascinating world of database management. From creating efficient data structures to optimizing queries, I delved into the inner workings of databases, gaining invaluable skills and knowledge along the way.",
    url: "https://www.linkedin.com/posts/dhruv-burada_wellsfargo-virtualexperienceprogram-databasemanagement-activity-7065537518171037696-roSP?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "My Portfolio",
    description:
      "Created from MLSA Template pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Microsoft Learn Student Ambassador",
    description:
      "The opportunity to be a part of such an exceptional Microsoft community is truly inspiring",
    url: "https://lnkd.in/d2za6gvs",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
