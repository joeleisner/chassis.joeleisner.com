import React, { useRef, useState, useEffect } from 'react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon';

import './scrolltotop.scss';

export function scrollThresholds() {
    const {
        innerHeight: windowHeight,
        pageYOffset: scrollOffset
    } = window;
    const {
        body,
        documentElement: html
    } = document;
    const pageHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );
    const top = scrollOffset > 400;
    const bottom = windowHeight + scrollOffset < pageHeight - 100;

    return { top, bottom };
};

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

    return (
        <button
            className="scroll-to-top"
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            aria-hidden={!visibility}
            ref={elementRef}
        >
            <Icon
                icon={faChevronUp}
                text="Scroll back to the top of the page"
            />
        </button>
    );
}

export default ScrollToTop;
