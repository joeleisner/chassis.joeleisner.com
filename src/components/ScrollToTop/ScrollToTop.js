import React, { useRef, useState, useEffect } from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Icon from '~components/Icon';

import './ScrollToTop.scss';

import { thresholds as scrollThresholds } from './scroll';

export function ScrollToTop() {
    const elementRef = useRef(null);

    const [ visibility, setVisibility ] = useState(false);

    const toggleVisibility = (state = !visibility) => setVisibility(state);

    const toggleVisibilityOnScroll = () => {
        const { top, bottom } = scrollThresholds();

        if (top && bottom) return toggleVisibility(true);

        return toggleVisibility(false);
    }

    useEffect(() => {
        window.addEventListener(
            'scroll',
            toggleVisibilityOnScroll,
            false
        );

        return () => window.removeEventListener(
            'scroll',
            toggleVisibilityOnScroll,
            false
        );
    })

    const onClick = () => {
        elementRef.current.blur();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const onFocus = () => toggleVisibility(true);

    const onBlur = () => toggleVisibility(false);

    const ariaHidden = !visibility;

    const tabIndex = visibility ? 0 : -1;

    return (
        <button
            className="scroll-to-top"
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            aria-hidden={ariaHidden}
            tabIndex={tabIndex}
            ref={elementRef}
        >
            <Icon
                icon={faChevronUp}
                text="Scroll back to the top of the page"
            />
        </button>
    );
}
