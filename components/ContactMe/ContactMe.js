import styles from "./ContactMe.module.css";
import { ReactComponent as GitHubIcon } from "../../data/github.svg";
import { ReactComponent as LinkedInIcon } from "../../data/linkedin.svg";
import { ReactComponent as MailIcon } from "../../data/mail.svg";
import { useNav } from "../../hooks/useNav";

function ContactMe() {
  const contactMeRef = useNav("ContactMe");
  return (
    <div ref={contactMeRef} id="contactmeSection" className={styles.card}>
      <div className={styles.contactMeTitle}>Contact me</div>
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

export default ContactMe;
