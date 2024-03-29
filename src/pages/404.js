import React from 'react';
import { Link } from 'gatsby';
import { faSpellCheck } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Card from '~components/Card';
import Layout from '~components/Layout';
import SEO from '~components/SEO';

const Summary = () => (
    <>
        <h1>Page not found.</h1>
        <p>The page you requested doesn&rsquo;t seem to exist.</p>
    </>
);

const PageNotFound = () => (
    <Layout summary={Summary}>
        <SEO title="Page Not found" />
        <h2>Things you can do.</h2>
        <p>Here&rsquo;s some tips to help you find your way.</p>
        <div className="row">
            <div className="col mb-f">
                <Card icon={faSpellCheck}>
                    <p>
                        Double check the URL for any misspellings or accidental
                        characters.
                    </p>
                </Card>
            </div>
            <div className="col mb-f">
                <Card icon={faSitemap}>
                    <p>
                        Checkout the <Link to="/sitemap.xml">sitemap</Link> for
                        pages that are similar to what you&rsquo;re looking for.
                    </p>
                </Card>
            </div>
            <div className="col mb-f">
                <Card icon={faEnvelope}>
                    <p>
                        If you continue to reach this page, please contact{' '}
                        <a href="mailto:jeisner93@gmail.com">me</a> so I can fix
                        the mistake.
                    </p>
                </Card>
            </div>
        </div>
    </Layout>
);

export default PageNotFound;
