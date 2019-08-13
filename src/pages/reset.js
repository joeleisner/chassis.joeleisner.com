import React from 'react';

import Alert from '../components/alert';
import Code from '../components/code';
import Layout from '../components/layout';
import SEO from '../components/seo';

const title = 'Style resets',
    description =
        'The chassis.css style resets provide a minimalistic, versatile, and accessibility focused baseline for elements and typography. With little-to-no extra styling and practical sizes and spacing, it provides a solid foundation.';

const Summary = () => (
    <>
        <h1>{title}</h1>
        <p>{description}</p>
    </>
);

const IndexPage = () => (
    <Layout summary={Summary}>
        <SEO title={title} description={description} />
        <h2>The basics</h2>
        <p>
            The chassis.css style resets come with a handful of defaults to keep
            in mind.
        </p>
        <ul>
            <li>
                All elements and pseudo-elements are set to{' '}
                <code>box-sizing: border-box</code>.
            </li>
            <li>
                The root font size is <code>16px</code> with no font family
                applied out of the box and a line height of <code>1.15</code>.
            </li>
            <li>Font smoothing is applied to all elements.</li>
            <li>
                Top margins are removed from all elements in favor of just using
                bottom margins.
            </li>
        </ul>
        <p>Pretty practical, right? Let's check it out.</p>
        <h2>Headings</h2>
        <p>
            Heading styles are provided for <code>&lt;h1&gt;</code> through{' '}
            <code>&lt;h6&gt;</code>:
        </p>
        <Code>{`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`}</Code>
        <p>
            In the above example, headings <code>&lt;h1&gt;</code> through{' '}
            <code>&lt;h6&gt;</code> are displayed. Every heading has a bottom
            margin of <code>.5rem</code> with the following font sizes:
        </p>
        <ul>
            <li>
                <code>&lt;h1&gt;</code> has a font size of <code>2.5rem</code>.
            </li>
            <li>
                <code>&lt;h2&gt;</code> has a font size of <code>2rem</code>.
            </li>
            <li>
                <code>&lt;h3&gt;</code> has a font size of <code>1.75rem</code>.
            </li>
            <li>
                <code>&lt;h4&gt;</code> has a font size of <code>1.5rem</code>.
            </li>
            <li>
                <code>&lt;h5&gt;</code> has a font size of <code>1.25rem</code>.
            </li>
            <li>
                <code>&lt;h6&gt;</code> has a font size of <code>1rem</code>.
            </li>
        </ul>
        <h3>Heading classes</h3>
        <p>
            Sometimes you want to style elements to look like headings,
            especially in the event that an actual heading element does make
            sense logically or from an accessibility standpoint; That's where
            heading classes come in handy:
        </p>
        <Code>{`<p class="h1">Heading 1</p>
<p class="h2">Heading 2</p>
<p class="h3">Heading 3</p>
<p class="h4">Heading 4</p>
<p class="h5">Heading 5</p>
<p class="h6">Heading 6</p>`}</Code>
        <p>
            In the above example, there are 6 paragraph elements styled to look
            like <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>.
            Heading classes follow the <code>.h*</code> class structure, where{' '}
            <code>*</code> can be a number between 1 and 6.
        </p>
        <Alert>
            <p>
                While both headings and heading classes change the font size and
                and margins, headings do not have a font weight applied to them
                (using the browser default) while heading classes have{' '}
                <code>font-weight: bold</code> applied to them.
            </p>
        </Alert>
        <h2>Paragraphs &amp; lists</h2>
        <p>Paragraphs and lists have pretty simple styling applied to them:</p>
        <Code>{`<p>This is a paragraph</p>
<ul>
    <li>Unordered list item 1</li>
    <li>Unordered list item 1</li>
    <li>Unordered list item 1</li>
</ul>
<ol>
    <li>Ordered list item 1</li>
    <li>Ordered list item 1</li>
    <li>Ordered list item 1</li>
</ol>`}</Code>
        <p>
            In the above example, there's a paragraph, an unordered list, and an
            ordered list. All of these elements have a bottom margin of{' '}
            <code>1rem</code>.
        </p>
        <Alert>
            <p>
                While unordered and ordered lists have a bottom margin applied
                to them, this bottom margin will be removed when nested inside
                another unordered or ordered list; This is to retain proper line
                height.
            </p>
        </Alert>
        <h2>Other elements</h2>
        <p>More style resets have been applied to the following elements:</p>
        <ul>
            <li>
                <code>&lt;small&gt;</code> has a font size of <code>.5em</code>.
            </li>
            <li>
                <code>&lt;strong&gt;</code> and <code>&lt;dt&gt;</code> have a
                font weight of <code>bold</code>.
            </li>
            <li>
                <code>&lt;em&gt;</code> has a font style of <code>italic</code>.
            </li>
            <li>
                <code>&lt;dd&gt;</code> has a bottom margin of{' '}
                <code>.5rem</code>.
            </li>
            <li>
                <code>&lt;blockquote&gt;</code> has a margin of{' '}
                <code>0 0 1rem</code> and a font size of <code>1.25rem</code>.
            </li>
            <li>
                <code>&lt;fieldset&gt;</code> has a minimum width, margin,
                padding, and border of <code>0</code>.
            </li>
        </ul>
    </Layout>
);

export default IndexPage;
