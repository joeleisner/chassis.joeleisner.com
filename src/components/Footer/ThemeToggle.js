import React, { useState, useRef, useEffect } from 'react';
import {
    getSystem as getSystemThemePreference,
    getLocal as getLocalThemePreference,
    setLocal as setLocalThemePreference,
    removeLocal as removeLocalThemePreference
} from './theme';
import {
    faMoon,
    faSun
} from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon';

export function ThemeToggle() {
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
    );
}