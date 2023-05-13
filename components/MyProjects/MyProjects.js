import React from "react";
import Fade from "react-reveal/Fade";

import styles from "./MyProjects.module.css";
import todoImage from "../../data/todoImage.png";
import formbuilderImage from "../../data/formbuilder.png";
import { ReactComponent as GitHubIcon } from "../../data/github.svg";
import { useNav } from "../../hooks/useNav";

function MyProjects() {
  const myProjectsRef = useNav("MyProjects");
  return (
    <div ref={myProjectsRef} id="myprojectsSection" className={styles.card}>
      <div className={styles.sectionTitle}>My Projects</div>
      <Fade bottom>
        <div className={styles.myProject}>
          <div className={styles.myProjectContent}>
            <div className={styles.myProjectTitle}>
              <span style={{ color: "#64ffda" }}>1. </span>Social media to-do
              application
            </div>
            <div className={styles.myProjectDescription}>
              To-do application where you can{" "}
              <span style={{ color: "#64ffda" }}>define and track</span> your
              goals, follow your friends and see how they're doing in terms of
              achieving their <span style={{ color: "#64ffda" }}>dreams.</span>
            </div>
            <div className={styles.myProjectTechnologies}>
              <span>Technologies used:</span> <br />
              <ul>
                <li>Angular</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>AWS Elastic Beanstalk</li>
              </ul>
            </div>
            <div className={styles.references}>
              <a
                href="https://github.com/Rudnik2/meanStackApplication"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className={styles.icon}></GitHubIcon>
              </a>
              <a
                href="http://rudnik2-to-do-app.s3-website.eu-north-1.amazonaws.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button>View live demo</button>
              </a>
            </div>
          </div>
          <div className={styles.myProjectImage}>
            <img src={todoImage} alt="Logo" width="400" height="250" />
          </div>
        </div>

        <div className={styles.myProject}>
          <div className={styles.myProjectContent}>
            <div className={styles.myProjectTitle}>
              <span style={{ color: "#64ffda" }}>2. </span>Form builder
            </div>
            <div className={styles.myProjectDescription}>
              Application where you can create{" "}
              <span style={{ color: "#64ffda" }}>never-ending forms</span>. Each
              input can have many subinputs with question categories
            </div>
            <div className={styles.myProjectTechnologies}>
              <span>Technologies used:</span> <br />
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Jest</li>
              </ul>
            </div>
            <div className={styles.references}>
              <a
                href="https://github.com/Rudnik2/Form-Builder"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className={styles.icon}></GitHubIcon>
              </a>
              <a
                href="https://rudnik2.github.io/Form-Builder"
                target="_blank"
                rel="noreferrer"
              >
                <button>View live demo</button>
              </a>
            </div>
          </div>
          <div className={styles.myProjectImage}>
            <img src={formbuilderImage} alt="Logo" width="400" height="250" />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default MyProjects;
