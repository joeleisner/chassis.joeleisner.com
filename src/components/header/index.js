import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Icon from '../icon';

import Logo from '../../images/logo.svg';
import Wave from '../../images/wave.svg';

import './header.scss';

export function Header({
    title,
    version,
    navigation,
    children
}) {
    const [ open, setOpen ] = useState(false);

    const toggleOpen = () => setOpen(!open);

    const icon = open ? faTimes : faBars;

    let navClasses = [ 'header__nav' ]

    if (open) navClasses.push('open');

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header__level-wrapper">
                            <div className="header__level">
                                <div className="header__brand">
                                    <Logo
                                        className="header__logo"
                                        role="presentation"
                                    />
                                    <div className="header__title-version">
                                        <Link to="/">{title}</Link>
                                        <p>v{version}</p>
                                    </div>
                                    <button
                                        className="header__nav-toggle"
                                        aria-controls="header__nav"
                                        aria-expanded={open}
                                        aria-label="Toggle navigation"
                                        onClick={toggleOpen}
                                    >
                                        <Icon icon={icon} />
                                    </button>
                                </div>
                                <nav
                                    id="header__nav"
                                    className={navClasses.join(' ')}
                                >
                                    {navigation.map(({ path, name }) => (
                                        <Link
                                            to={path}
                                            className="header__nav-link"
                                            activeClassName="header__nav-link--active"
                                            partiallyActive={true}
                                            key={path}
                                        >
                                            {name}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 header__summary">{children}</div>
                </div>
            </div>
            <Wave className="header__wave" role="presentation" />
        </header>
    );
}

Header.propTypes = {
    children: PropTypes.node.isRequired,
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ''
};

export default Header;
