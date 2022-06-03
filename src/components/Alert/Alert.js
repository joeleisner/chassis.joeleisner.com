import {
    faInfoCircle,
    faExclamationTriangle,
    faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

// Define a map of valid alert icons
export const icons = {
    info: faInfoCircle,
    warning: faExclamationTriangle,
    danger: faExclamationTriangle,
    success: faCheckCircle
};

import './Alert.scss';
import React from 'react';
import Icon from '~components/Icon';

// The alert component
export function Alert({ type, children }) {
    // Get an icon from the given type...
    const icon = <Icon icon={icons[type]} />;
    // ... and render the component
    return (
        <aside className="alert">
            <div className={`alert__icon alert__icon--${type}`}>
                {icon}
            </div>
            <div className="alert__content">{children}</div>
        </aside>
    );
}

import PropTypes from 'prop-types';

Alert.propTypes = {
    type: PropTypes.oneOf(Object.keys(icons)),
    children: PropTypes.node.isRequired
};

Alert.defaultProps = {
    type: 'info'
};
