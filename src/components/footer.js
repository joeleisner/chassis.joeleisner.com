import React                   from 'react';
import { faHeart, faHome }     from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import ExternalLink from './externallink';
import Icon         from './icon';

import '../sass/components/footer.sass';

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer__content">
                    <p className="footer__copyright">©{ new Date().getFullYear() } - Joel Eisner</p>
                    <div className="footer__information">
                        Made with
                        { ' ' }
                        <Icon icon={ faHeart } style={{ width: '1rem' }} text="love" />
                        { ' using ' }
                        <strong>chassis.css</strong>
                        { ' and ' }
                        <ExternalLink href="https://www.gatsbyjs.org">Gatsby</ExternalLink>
                    </div>
                    <nav className="footer__links">
                        <ExternalLink href="http://www.joeleisner.com/" title="Joel Eisner's main website">
                            <Icon icon={ faHome } text="Joel Eisner's main website" />
                        </ExternalLink>
                        <ExternalLink href="https://www.twitter.com/joeleisner" title="Joel Eisner's twitter page">
                            <Icon icon={ faTwitter } text="Joel Eisner's twitter page" />
                        </ExternalLink>
                        <ExternalLink href="https://www.github.com/joeleisner" title="Joel Eisner's GitHub page">
                            <Icon icon={ faGithub } text="Joel Eisner's GitHub page" />
                        </ExternalLink>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;