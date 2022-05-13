import React from 'react';
import { Example } from './Example';
import { Copy } from './Copy';
import { Syntax } from './Syntax';

import './Code.scss';

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

import PropTypes from 'prop-types';

Code.propTypes = {
    language: Syntax.propTypes.language,
    example: PropTypes.bool,
    children: Copy.propTypes.text
};

Code.defaultProps = {
    example: true
};
