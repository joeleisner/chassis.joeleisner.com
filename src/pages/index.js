import React from 'react';
import {
    faArrowCircleDown,
    faAsterisk,
    faBook,
    faExpand,
    faFeather
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './index.scss';

import Card from '~components/Card';
import Code from '~components/Code';
import ExternalLink from '~components/ExternalLink';
import Icon from '~components/Icon';
import Layout from '~components/Layout';
import SEO from '~components/SEO';

const title = 'Chassis.css',
    tagline = 'A minimalistic grid & typography CSS framework.',
    description =
        'Chassis.css provides easy-to-use and lightweight styling with practical defaults without being too opinionated.';

const Summary = () => (
    <>
        <h1>{tagline}</h1>
        <p>{description}</p>
        <div className="index__buttons">
            <ExternalLink
                href="https://github.com/joeleisner/chassis-css/releases"
                title="Download Chassis.css releases"
                className="index__button index__button--highlight"
            >
                <Icon icon={faArrowCircleDown} style={{ width: '1em' }} />
                Download
            </ExternalLink>
            <ExternalLink
                href="https://github.com/joeleisner/chassis-css"
                title="Chassis.css GitHub"
                className="index__button"
            >
                <Icon icon={faGithub} style={{ width: '1em' }} />
                GitHub
            </ExternalLink>
            <ExternalLink
                href="http://joeleisner.com/chassis"
                title="Chassis.css v3.0.2 documentation"
                className="index__button"
            >
                <Icon icon={faBook} style={{ width: '1em' }} />
                v3.0.2<span className="sr">documentation</span>
            </ExternalLink>
        </div>
    </>
);

const IndexPage = () => (
    <Layout summary={Summary}>
        <SEO title={title} description={[tagline, description].join(' ')} />
        <div className="row">
            <div className="col mb-f">
                <Card icon={faExpand} title="Expandable">
                    <p>
                        Chassis.css sets out to deliver web developers core
                        features, like a grid system and typography defaults,
                        without too much styling.
                    </p>
                </Card>
            </div>
            <div className="col mb-f">
                <Card icon={faFeather} title="Lightweight">
                    <p>
                        At just 1.6KB minified and gzipped, chassis.css has a
                        lot of room for you to add your own touch. No bloat or
                        extras; Just the bare necessities.
                    </p>
                </Card>
            </div>
            <div className="col mb-f">
                <Card icon={faAsterisk} title="Modern">
                    <p>
                        Built mobile-first using newer web technologies such as
                        CSS flexbox, chassis.css provides a modern framework for
                        your modern workflow.
                    </p>
                </Card>
            </div>
        </div>
        <h2>Installation</h2>
        <Code language="shell" example={false}>
            npm install chassis-css
        </Code>
        <h2>
            Latest release <small>v4.0.8</small>
        </h2>
        <p>
            This patch switches the package to ESM, drops IE support, updates all dependencies to their latest versions, and reorganizes the build system to be more maintainable.
        </p>
        <p>
            Check out the{' '}
            <ExternalLink
                href="https://github.com/joeleisner/chassis-css/blob/master/changelog.md"
                title="Chassis.css GitHub changelog"
            >
                changelog
            </ExternalLink>{' '}
            for previous release information.
        </p>
    </Layout>
);

export default IndexPage;
