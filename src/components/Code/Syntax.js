import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// The code syntax component
export function Syntax({ language, children, ...props }) {
    return (
        <SyntaxHighlighter
            className="code__syntax"
            language={language}
            style={a11yDark}
            customStyle={{ padding: '1rem' }}
            {...props}
        >
            {children}
        </SyntaxHighlighter>
    )
}

import PropTypes from 'prop-types';

Syntax.propTypes = {
    language: PropTypes.string,
    children: PropTypes.string.isRequired
};

Syntax.defaultProps = {
    language: 'xml'
};
