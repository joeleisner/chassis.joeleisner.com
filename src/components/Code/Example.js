import React, { useRef, useEffect } from 'react';

// The code example component
export function Example({ children }) {
    const exampleRef = useRef(null);

    useEffect(() => {
        exampleRef.current.innerHTML = children;
    });

    return (
        <div className="code__example" ref={exampleRef}>
        </div>
    );
}

import PropTypes from 'prop-types';

Example.propTypes = {
    children: PropTypes.string.isRequired
};
