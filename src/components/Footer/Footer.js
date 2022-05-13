import React, { useState, useRef, useEffect } from 'react';
import {
    faHeart,
    faHome,
    faMoon,
    faSun
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import ExternalLink from '../ExternalLink';
import Icon from '../Icon';
import {
    getSystem as getSystemThemePreference,
    getLocal as getLocalThemePreference,
    setLocal as setLocalThemePreference,
    removeLocal as removeLocalThemePreference
} from './theme';

import './Footer.scss';

export function Footer() {
    const [ system, setSystem ] = useState('light');

    const [ local, setLocal ] = useState('light');

    const oppositeLocal = local === 'light' ? 'dark' : 'light';

    const toggleLocal = () => setLocal(oppositeLocal);

    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            const system = getSystemThemePreference();

            const local = getLocalThemePreference() || system;

            setSystem(system);

            setLocal(local);

            firstRender.current = false;

            return;
        }

        return system === local ?
            removeLocalThemePreference() :
            setLocalThemePreference(local);
    }, [ system, local ]);

    const changeThemeMessage = `Current theme: ${local}. Click to change theme to ${oppositeLocal}.`

    const icon = local === 'light' ? faMoon : faSun;

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
                                onClick={toggleLocal}
                            >
                                <Icon
                                    icon={icon}
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
