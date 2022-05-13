import React from 'react';
import { Title } from './Title';

import './Card.scss';

export function Card({ icon, title, children, ...props }) {
    return (
        <div className="card" {...props}>
            <Title icon={icon} title={title}/>
            <div className="card__description">{children}</div>
        </div>
    );
};

import PropTypes from 'prop-types';

Card.propTypes = {
    icon: Title.propTypes.icon,
    title: Title.propTypes.title,
    children: PropTypes.node.isRequired
};
