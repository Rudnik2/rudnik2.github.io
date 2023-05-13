import styles from "./AboutMe.module.css";
import React from "react";
import Fade from "react-reveal/Fade";

import jsImage from "../../data/js.png";
import AngularImage from "../../data/Angular.png";
import cssImage from "../../data/css.png";
import htmlImage from "../../data/html.png";
import ReactImage from "../../data/React.png";
import dockerImage from "../../data/docker.png";
import springImage from "../../data/spring.png";
import nodejsImage from "../../data/nodejs.png";
import typescriptImage from "../../data/typescript.png";

import myImage from "../../data/zdjecie.jpg";
import { useNav } from "../../hooks/useNav";

function AboutMe() {
  const aboutMeRef = useNav("AboutMe");
  return (
    <div ref={aboutMeRef} id="aboutmeSection" className={styles.card}>
      <Fade bottom>
        <div className={styles.aboutMeContent}>
          <div className={styles.sectionTitle}>About me</div>
          <div className={styles.aboutMeDescription}>
            <p>
              Hi! My name is Piotr Łaguna. I am a Computer Science Bachelor of
              Engineering student at
              <span style={{ color: "#64ffda" }}>
                {" "}
                Politechnika Gdańska
              </span>{" "}
              with a keen interest in{" "}
              <span style={{ color: "#64ffda" }}>web development</span>. I have
              experience with web technologies such as HTML, CSS, JavaScript,
              TypeScript, Angular, and React, and have developed several
              projects to demonstrate my skills.
            </p>

            <p>
              Aside from my technical expertise, I am a{" "}
              <span style={{ color: "#64ffda" }}>highly motivated</span> and
              dedicated individual with excellent communication and
              interpersonal skills. I am eager to take on new challenges and
              expand my knowledge in the field of computer science.
            </p>
          </div>
          <div className={styles.technologiesUsed}>
            <p>Technologies I used</p>
            <div className={styles.slider}>
              <div className={styles.slideTrack}>
                <div className={styles.slide}>
                  <img
                    src={AngularImage}
                    alt="Angular"
                    height={75}
                    width={75}
                  ></img>
                </div>
                <div className={styles.slide}>
                  <img src={cssImage} alt="css" height={75} width={75}></img>
                </div>
                <div className={styles.slide}>
                  <img src={htmlImage} alt="html" height={75} width={75}></img>
                </div>
                <div className={styles.slide}>
                  <img
                    src={ReactImage}
                    alt="React"
                    height={75}
                    width={75}
                  ></img>
                </div>
                <div className={styles.slide}>
                  <img
                    src={jsImage}
                    alt="javascript"
                    height={75}
                    width={75}
                  ></img>
                </div>
                <div className={styles.slide}>
                  <img
                    src={dockerImage}
                    alt="docker"
                    height={75}
                    width={75}
                  ></img>
                </div>
                <div className={styles.slide}>
                  <img
                    src={springImage}
                    alt="spring"
                    height={75}
                    width={75}
                  ></img>
                </div>
                <div className={styles.slide}>
                  <img
                    src={nodejsImage}
                    alt="nodejs"
                    height={75}
                    width={75}
                  ></img>
                </div>
                <div className={styles.slide}>
                  <img
                    src={typescriptImage}
                    alt="typescript"
                    height={75}
                    width={75}
                  ></img>
                </div>

                <div className={styles.slide}>
                  <img
                    src={AngularImage}
                    alt="Angular"
                    height={75}
                    width={75}
                  ></img>
                </div>
                <div className={styles.slide}>
                  <img src={cssImage} alt="css" height={75} width={75}></img>
                </div>
                <div className={styles.slide}>
                  <img src={htmlImage} alt="html" height={75} width={75}></img>
                </div>
                <div className={styles.slide}>
                  <img
                    src={ReactImage}
                    alt="React"
                    height={75}
                    width={75}
                  ></img>
                </div>
                <div className={styles.slide}>
                  <img
                    src={jsImage}
                    alt="javascript"
                    height={75}
                    width={75}
                  ></img>
                </div>
                <div className={styles.slide}>
                  <img
                    src={dockerImage}
                    alt="docker"
                    height={75}
                    width={75}
                  ></img>
                </div>
                <div className={styles.slide}>
                  <img
                    src={springImage}
                    alt="spring"
                    height={75}
                    width={75}
                  ></img>
                </div>
                <div className={styles.slide}>
                  <img
                    src={nodejsImage}
                    alt="nodejs"
                    height={75}
                    width={75}
                  ></img>
                </div>
                <div className={styles.slide}>
                  <img
                    src={typescriptImage}
                    alt="typescript"
                    height={75}
                    width={75}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.myImage}>
          <img src={myImage} alt="myImage"></img>
        </div>
      </Fade>
    </div>
  );
}

export default AboutMe;
