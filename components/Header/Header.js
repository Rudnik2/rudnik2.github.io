import styles from "./Header.module.css";
import { ReactComponent as HomeSVG } from "../../data/home.svg";
import ResumePDF from "../../data/CV - Piotr Łaguna.pdf";
import { useContext, useState } from "react";
import { NavContext } from "../../context/NavContext";

function Header() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  const combinedClasses = `${styles.navigation} ${
    isActive ? styles.activated : ""
  }`;
  const { activeLinkId } = useContext(NavContext);

  const handleClickNav = (name) => {
    const scrollToId = `${name}Section`;
    const element = document.getElementById(scrollToId);
    let offset = 80;
    if (window.innerWidth < 700) {
      offset = 230;
    }
    let y;
    name === "home"
      ? (y = 0)
      : (y = element.getBoundingClientRect().top + window.pageYOffset - offset);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className={styles.header}>
      <HomeSVG
        onClick={() => handleClickNav("home")}
        className={styles.homeIcon}
      ></HomeSVG>
      <button
        href="ww"
        className={styles.toggleButton}
        onClick={toggleClass}
        alt="toggleButton"
      >
        <span class={styles.bar}></span>
        <span class={styles.bar}></span>
        <span class={styles.bar}></span>
      </button>
      <ul className={combinedClasses}>
        <li
          id="homeNav"
          className={styles.li}
          onClick={() => handleClickNav("home")}
        >
          <button className={activeLinkId === "Home" ? styles.activeClass : ""}>
            Home
          </button>
        </li>
        <li className={styles.li} onClick={() => handleClickNav("aboutme")}>
          <button
            className={activeLinkId === "AboutMe" ? styles.activeClass : ""}
          >
            About Me
          </button>
        </li>
        <li className={styles.li} onClick={() => handleClickNav("myprojects")}>
          <button
            className={activeLinkId === "MyProjects" ? styles.activeClass : ""}
          >
            My Projects
          </button>
        </li>
        <li className={styles.li} onClick={() => handleClickNav("contactme")}>
          <button
            className={activeLinkId === "ContactMe" ? styles.activeClass : ""}
          >
            Contact Me
          </button>
        </li>
        <a
          href={ResumePDF}
          download="Piotr Łaguna Resume"
          target="_blank"
          rel="noreferrer"
        >
          <li className={styles.li}>Download Resume</li>
        </a>
      </ul>
    </div>
  );
}

export default Header;
