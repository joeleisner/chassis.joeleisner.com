import React from 'react';
import Icon from '../icon';

// The card title component
export function Title({ icon, title }) {
    // If an icon and title were not provided, return nothing
    if (!icon && !title) return;

    // Define the base card title class...
    let className = ['card__title'];
    // ... and add an icon only...
    if (icon && !title) className.push('card__title--only-icon');
    // ... or heading only modifier class conditionally
    if (!icon && title) className.push('card__title--only-heading');

    // Convert the title to a heading if provided
    if (title) title = <h2 className="card__heading">{title}</h2>;

    // Finally, render the component
    return (
        <div className={className.join(' ')}>
            <Icon icon={icon} className="card__icon"/>
            {title}
        </div>
    );
}

import './card.scss';

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
    icon: PropTypes.object,
    title: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Card;
