import React from 'react';

export function ExternalLink({ href, children, ...props }) {
    props['aria-label'] = props['aria-label'] || props.title;
    props.title = props.title || props['aria-label'];

    return (
        <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            {...props}
        >
            {children}
        </a>
    );
};

import PropTypes from 'prop-types';

ExternalLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default ExternalLink;
