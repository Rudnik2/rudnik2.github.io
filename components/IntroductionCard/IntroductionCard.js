import styles from "./IntroductionCard.module.css";
import { Typewriter } from "react-simple-typewriter";
import { ReactComponent as GitHubIcon } from "../../data/github.svg";
import { ReactComponent as LinkedInIcon } from "../../data/linkedin.svg";
import { ReactComponent as MailIcon } from "../../data/mail.svg";
import { useNav } from "../../hooks/useNav";

function IntroductionCard() {
  const homeRef = useNav("Home");
  return (
    <div ref={homeRef} id="homeSection" className={styles.card}>
      <div className={styles.myNameIs}>Hi, my name is</div>
      <div id="myName" lang="pl" className={styles.name}>
        <Typewriter words={["Piotr Łaguna."]} typeSpeed={70} />
      </div>
      <div className={styles.whoIAm}>I'm a Fullstack developer.</div>
      <div className={styles.description}>
        I'm a software engineer passionate about web development and seeking a
        job opportunity in the IT industry.
      </div>
      <div className={styles.socialLinks}>
        <ul>
          <a
            href="https://www.linkedin.com/in/piotr-%C5%82aguna-74033a236/"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <LinkedInIcon className={styles.icon}></LinkedInIcon> LinkedIn
            </li>
          </a>
          <a href="https://github.com/Rudnik2" target="_blank" rel="noreferrer">
            <li>
              <GitHubIcon className={styles.icon}></GitHubIcon>
              GitHub
            </li>
          </a>
          <a
            href="mailto:piolaguna01@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <MailIcon className={styles.icon}></MailIcon>{" "}
              piolaguna01@gmail.com
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default IntroductionCard;
