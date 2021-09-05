import React from 'react';
import { ExternalLink } from 'react-external-link';
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedin } from 'react-icons/fa';
import {FaStackOverflow} from 'react-icons/fa';

function Footer () {

    return (
        <footer>
            <div id="footer-icon-container">
                <ExternalLink href="https://github.com/JohnLanni619">
                    <span><GoMarkGithub/></span>
                </ExternalLink>
                <ExternalLink href="https://www.linkedin.com/in/john-lanni-45765711a/">
                    <span><FaLinkedin/></span>
                </ExternalLink>
                <ExternalLink href="https://stackoverflow.com/users/16836932/john-lanni?tab=profile">
                    <span><FaStackOverflow/></span>
                </ExternalLink>
            </div>
        </footer>
    )
}

export default Footer;