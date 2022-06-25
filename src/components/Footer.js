import { ExternalLink } from "react-external-link";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <a id="contact" href="mailto:johnlanni619@gmail.com">johnlanni619@gmail.com</a>
      <div id="footer-icon-container">
        <ExternalLink href="https://github.com/JohnLanni619">
          <GoMarkGithub className="icon" />
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/john-lanni-45765711a/">
          <FaLinkedin className="icon" />
        </ExternalLink>
      </div>
    </footer>
  );
}
