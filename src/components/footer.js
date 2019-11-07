import React from 'react';
import { faHeart, faHome, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import ExternalLink from './externallink';
import Icon from './icon';

import '../sass/components/footer.sass';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { theme: 'light' };

    setDocumentThemeAttribute(theme) {
        return document.documentElement.setAttribute('data-theme', theme);
    }

    changeTheme() {
        // Store the theme to change to (opposite of what's currently set)
        const theme = this.state.theme === 'light' ? 'dark' : 'light';

        // Set the theme state...
        this.setState({ theme });
        // ... and the document's theme attribute with the new theme
        this.setDocumentThemeAttribute(theme);
    }

    componentDidMount() {
        // Check to see if the user is using a system dark mode...
        const { matches: inDarkMode } = window.matchMedia('(prefers-color-scheme: dark)');
        // ... and if so, set the theme state to "dark"
        if (inDarkMode) {
            this.setState({
                theme: 'dark'
            });
        }

        // Finally, set the document's theme attribute to what's selected
        this.setDocumentThemeAttribute(inDarkMode ? 'dark' : 'light');
    }

    render() {
        const { theme }        = this.state,
            changeThemeMessage = `Current theme: ${ theme }. Click to change theme to ${ theme === 'light' ? 'dark' : 'light' }.`;
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer__content">
                            <p className="footer__copyright">
                                ©{new Date().getFullYear()} - Joel Eisner
                            </p>
                            <div className="footer__information">
                                Made with{' '}
                                <Icon
                                    icon={faHeart}
                                    style={{ width: '1rem' }}
                                    text="love"
                                />
                                {' using '}
                                <strong>chassis.css</strong>
                                {' and '}
                                <ExternalLink href="https://www.gatsbyjs.org">
                                    Gatsby
                                </ExternalLink>
                            </div>
                            <nav className="footer__links">
                                <button
                                    aria-label={changeThemeMessage}
                                    title={changeThemeMessage}
                                    onClick={this.changeTheme.bind(this)}
                                >
                                    <Icon
                                        icon={theme === 'light' ? faMoon : faSun }
                                        style={{ width: '1rem' }}
                                        text={changeThemeMessage}
                                    />
                                </button>
                                <ExternalLink
                                    href="http://www.joeleisner.com/"
                                    title="Joel Eisner's main website"
                                >
                                    <Icon
                                        icon={faHome}
                                        style={{ width: '1rem' }}
                                        text="Joel Eisner's main website"
                                    />
                                </ExternalLink>
                                <ExternalLink
                                    href="https://www.twitter.com/joeleisner"
                                    title="Joel Eisner's twitter page"
                                >
                                    <Icon
                                        icon={faTwitter}
                                        style={{ width: '1rem' }}
                                        text="Joel Eisner's twitter page"
                                    />
                                </ExternalLink>
                                <ExternalLink
                                    href="https://www.github.com/joeleisner"
                                    title="Joel Eisner's GitHub page"
                                >
                                    <Icon
                                        icon={faGithub}
                                        style={{ width: '1rem' }}
                                        text="Joel Eisner's GitHub page"
                                    />
                                </ExternalLink>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
