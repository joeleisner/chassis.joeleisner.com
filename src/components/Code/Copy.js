import React, { useRef, useState, useEffect } from 'react';
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

    const copyText = copy ? 'Copied' : 'Copy';

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
