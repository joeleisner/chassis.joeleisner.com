import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header';
import Footer from '../footer';
import ScrollToTop from '../scrolltotop';

import './layout.scss';

export function Layout({ summary, children }) {
    const { site } = useStaticQuery(graphql`
        query DataQuery {
            site {
                siteMetadata {
                    title
                    version
                    navigation {
                        name
                        path
                    }
                }
            }
        }
    `);

    const {
        title,
        version,
        navigation
    } = site.siteMetadata;

    return (
        <div className="site">
            <Header title={title} version={version} navigation={navigation}>
                {typeof summary === 'function' ? summary() : summary}
            </Header>
            <div className="site__content">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <main>
                                {children}
                                <ScrollToTop />
                            </main>
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
