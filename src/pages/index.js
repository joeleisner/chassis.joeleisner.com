import React                 from 'react';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub }          from '@fortawesome/free-brands-svg-icons';

import Code         from '../components/code';
import ExternalLink from '../components/externallink';
import Icon         from '../components/icon';
import Layout       from '../components/layout';
import SEO          from '../components/seo';

import '../sass/pages/index.sass';

const Summary = () => (
    <>
        <h1>A minimalistic grid & typography CSS framework.</h1>
        <p>Chassis.css provides easy-to-use and lightweight styling with practical defaults without being too opinionated.</p>
        <div className="index__buttons">
            <ExternalLink href="https://github.com/joeleisner/chassis-css/releases" className="index__download-button"><Icon icon={ faArrowCircleDown } />Download</ExternalLink>
            <ExternalLink href="https://github.com/joeleisner/chassis-css" className="index__github-button"><Icon icon={ faGithub } />GitHub</ExternalLink>
        </div>
    </>
);

const IndexPage = () => (
    <Layout summary={ Summary }>
        <SEO title="Chassis.css" />
        <h2>Changelog</h2>
        <p>Chassis.css has been overhauled from the ground up to support some killer new features. Here's what you can look forward to:</p>
        <ul>
            <li>The grid system now uses Flexbox!
                <ul>
                    <li>You can simply use the <code>.col</code> class to automatically take up remaining space in a row.</li>
                    <li><code>.row.rev</code> allows you to quickly reverse the order of a row.</li>
                    <li>Gone are the days of push/pull - You can now order/space your columns with <code>.or-*</code> (order), <code>.or-r*</code> (order reset on mobile), and <code>.os-*</code> (offset) classes.</li>
                    <li>You can now vertically/horizontally align columns with <code>.ai-*</code> (align-items), <code>.as-*</code> (align-self), and <code>.jc-*</code> (justify-content) classes.</li>
                </ul>
            </li>
            <li>The reset and typography defaults have been ironed out.
                <ul>
                    <li>The reset only overrides necessary things and avoids practices that can compromise accessibility.</li>
                    <li>Overall sizes and spacing between typography elements have been simplified dramatically.</li>
                    <li>New heading <code>.h*</code> classes allow you to make any typography element look like a heading.</li>
                </ul>
            </li>
            <li>Utility classes, particularly for margins/padding, have become way more concise/versatile.
                <ul>
                    <li>These classes are now constructable, allowing you to target all/specfic sides, add negative/positive adjustments, and utilize 6 levels of adjustments.</li>
                </ul>
            </li>
        </ul>
        <h2>Installation</h2>
        <Code language="shell" example={ false }>npm install chassis-css</Code>
    </Layout>
);

export default IndexPage;
