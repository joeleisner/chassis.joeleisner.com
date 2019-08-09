import React from 'react';

import Layout from '../components/layout';
import SEO    from '../components/seo';

const Summary = () => (
    <>
        <div className="header__summary">
            <div>
                <h1>Reset</h1>
                <p>Reset page.</p>
            </div>
        </div>
    </>
);

const IndexPage = () => (
    <Layout summary={ Summary }>
        <SEO title="Reset" />
        <h2>Reset</h2>
        <p>Reset page.</p>
    </Layout>
);

export default IndexPage;
