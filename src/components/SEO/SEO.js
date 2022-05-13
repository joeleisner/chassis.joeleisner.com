import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export function SEO({ description, lang, meta, title, image }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                        defaultImage
                    }
                }
            }
        `
    );

    const {
        description: siteDescription,
        title: siteTitle,
        siteUrl,
        defaultImage,
        author
    } = site.siteMetadata;

    description = description || siteDescription;

    const titleTemplate = title === siteTitle ?
        `${title} - ${description}` :
        `%s - ${siteTitle}`;

    image = `${siteUrl}${image || defaultImage}`;

    meta = [
        {
            name: 'description',
            content: description
        },
        {
            property: 'og:title',
            content: title
        },
        {
            property: 'og:description',
            content: description
        },
        {
            property: 'og:image',
            content: image
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            name: 'twitter:card',
            content: 'summary'
        },
        {
            name: 'twitter:creator',
            content: author
        },
        {
            name: 'twitter:title',
            content: title
        },
        {
            name: 'twitter:description',
            content: description
        },
        ...meta
    ];

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={titleTemplate}
            meta={meta}
        />
    );
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
};

SEO.defaultProps = {
    lang: 'en',
    meta: [],
    description: ''
};
