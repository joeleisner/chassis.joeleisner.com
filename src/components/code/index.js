import React, { useRef, useEffect, useState, useMemo } from 'react';
import './code.scss';

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

import { CopyToClipboard } from 'react-copy-to-clipboard';

// The code copy button component
export function Copy({ text }) {
    const copyRef = useRef(false);

    const [ copy, setCopy ] = useState(false);

    useEffect(() => {
        copyRef.current = copy;
    }, [copy]);

    const onCopy = () => {
        setCopy(true);
        setTimeout(() => setCopy(false), 2000);
    };

    const copyText = useMemo(() => copy ? 'Copied' : 'Copy');

    return (
        <CopyToClipboard
            text={text}
            onCopy={onCopy}
        >
            <button className="code__copy">
                { copyText }
            </button>
        </CopyToClipboard>
    );
}

import PropTypes from 'prop-types';

Copy.propTypes = {
    text: PropTypes.string.isRequired
};

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

Syntax.propTypes = {
    language: PropTypes.string,
    children: Copy.propTypes.text
};

Syntax.defaultProps = {
    language: 'xml'
};

export function Code({
    language,
    example,
    children,
    ...props
}) {
    if (example) example = <Example>{children}</Example>;

    return (
        <div className="code">
            { example }
            <div className="code__snippet">
                <Copy text={children}/>
                <Syntax language={language} {...props}>
                    {children}
                </Syntax>
            </div>
        </div>
    );
}

Code.propTypes = {
    language: Syntax.propTypes.language,
    example: PropTypes.bool,
    children: Copy.propTypes.text
};

Code.defaultProps = {
    example: true
};

export default Code;
