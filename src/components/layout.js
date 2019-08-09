import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

import '../sass/components/layout.sass';

const Layout = ({ summary, children }) => {
    const data = useStaticQuery(graphql`
        query DataQuery {
            site {
                siteMetadata {
                    title,
                    version
                }
            },
            allSitePage(filter: {path: {regex: "/^((?!404).)*$/"}}) {
                edges {
                    node {
                        path
                    }
                }
            }
        }
    `);

    const { title, version } = data.site.siteMetadata,
        paths = data.allSitePage.edges
            .map(edge => edge.node.path)
            .filter(path => path !== '/')
            .map(path => {
                const name = path
                    .replace(/\//g, '')
                    .replace(/(?:^|\s)\S/g, char => char.toUpperCase());
                return { path, name };
            });

    return (
        <div className="site">
            <Header title={ title } version={ version } paths={ paths }>{ typeof summary === 'function' ? summary() : summary }</Header>
            <div className="site__content">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <main>{ children }</main>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
