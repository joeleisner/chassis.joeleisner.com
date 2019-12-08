import React from 'react';
import {
    faArrowCircleDown,
    faAsterisk,
    faBook,
    faExpand,
    faFeather
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Code from '../components/code';
import ExternalLink from '../components/externallink';
import Icon from '../components/icon';
import Layout from '../components/layout';
import SEO from '../components/seo';

import '../sass/pages/index.sass';

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
                title="Chassis.css GitHub releases"
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
            <div className="col">
                <div className="index__perk">
                    <h2 className="index__perk-title">
                        <Icon icon={faExpand} style={{ width: '1.75rem' }} />
                        Expandable
                    </h2>
                    <p className="index__perk-description">
                        Chassis.css sets out to deliver web developers core
                        features, like a grid system and typography defaults,
                        without too much styling.
                    </p>
                </div>
            </div>
            <div className="col">
                <div className="index__perk">
                    <h2 className="index__perk-title">
                        <Icon icon={faFeather} style={{ width: '1.75rem' }} />
                        Lightweight
                    </h2>
                    <p className="index__perk-description">
                        At just 1.6KB minified and gzipped, chassis.css has a
                        lot of room for you to add your own touch. No bloat or
                        extras; Just the bare necessities.
                    </p>
                </div>
            </div>
            <div className="col">
                <div className="index__perk">
                    <h2 className="index__perk-title">
                        <Icon icon={faAsterisk} style={{ width: '1.75rem' }} />
                        Modern
                    </h2>
                    <p className="index__perk-description">
                        Built mobile-first using newer web technologies such as
                        CSS flexbox, chassis.css provides a modern framework for
                        your modern workflow.
                    </p>
                </div>
            </div>
        </div>
        <h2>Installation</h2>
        <Code language="shell" example={false}>
            npm install chassis-css
        </Code>
        <h2>Changelog</h2>
        <h3>4.0.2</h3>
        <p>This patch no longer explicitly sets the root font-size to 16px, leaving it up to the browser's default and respecting the user's preference if set. It also updates some packages to their latest version.</p>
        <h3>4.0.1</h3>
        <p>
            This patch brings some much needed stability to the framework after
            its big release. Here's what to expect:
        </p>
        <ul>
            <li>
                Rows no longer change their <code>flex-direction</code> between{' '}
                <code>column</code> on extra small viewports and{' '}
                <code>row</code> on small viewports and above.
                <ul>
                    <li>Rows now wrap columns to vertically stack them.</li>
                    <li>
                        Vertical and horizontal alignment modifier classes no
                        longer flip-flop functionality between extra small and
                        small viewports.
                    </li>
                    <li>
                        The reverse row modifier class, <code>.row.rev</code>,
                        has been changed.
                    </li>
                    <li>
                        The way columns fill the row's width on extra small
                        viewports has been changed.
                    </li>
                </ul>
            </li>
            <li>
                New align content modifier classes, <code>.ac-*</code>, have
                been added to provide more vertical alignment options.
            </li>
        </ul>
        <h3>4.0.0</h3>
        <p>
            Chassis.css has been overhauled from the ground up to support some
            killer new features. Here's what you can look forward to:
        </p>
        <ul>
            <li>
                The grid system now uses flexbox.
                <ul>
                    <li>
                        You can simply use the <code>.col</code> class to
                        automatically take up remaining space in a row.
                    </li>
                    <li>
                        <code>.row.rev</code> allows you to quickly reverse the
                        order of a row.
                    </li>
                    <li>
                        Gone are the days of push/pull - You can now order/space
                        your columns with <code>.or-*</code> (order),{' '}
                        <code>.or-r*</code> (order reset on mobile), and{' '}
                        <code>.os-*</code> (offset) classes.
                    </li>
                    <li>
                        You can now vertically/horizontally align columns with{' '}
                        <code>.ai-*</code> (align-items), <code>.as-*</code>{' '}
                        (align-self), and <code>.jc-*</code> (justify-content)
                        classes.
                    </li>
                </ul>
            </li>
            <li>
                The reset and typography defaults have been ironed out.
                <ul>
                    <li>
                        The reset only overrides necessary things and avoids
                        practices that can compromise accessibility.
                    </li>
                    <li>
                        Overall sizes and spacing between typography elements
                        have been simplified dramatically.
                    </li>
                    <li>
                        New heading <code>.h*</code> classes allow you to make
                        any typography element look like a heading.
                    </li>
                </ul>
            </li>
            <li>
                Utility classes, particularly for margins/padding, have become
                way more concise/versatile.
                <ul>
                    <li>
                        These classes are now constructable, allowing you to
                        target all/specific sides, add negative/positive
                        adjustments, and utilize 6 levels of adjustments.
                    </li>
                </ul>
            </li>
        </ul>
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
