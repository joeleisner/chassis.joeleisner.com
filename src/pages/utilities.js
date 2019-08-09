import React from 'react';

import Layout from '../components/layout';
import SEO    from '../components/seo';

const Summary = () => (
    <>
        <div className="header__summary">
            <div>
                <h1>Utilities</h1>
                <p>Utilities page.</p>
            </div>
        </div>
    </>
);

const IndexPage = () => (
    <Layout summary={ Summary }>
        <SEO title="Utilities" />
        <h2>Utilities</h2>
        <p>Utilities page.</p>
    </Layout>
);

export default IndexPage;
