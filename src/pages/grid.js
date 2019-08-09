import React  from 'react';

import Alert  from '../components/alert';
import Code   from '../components/code';
import Layout from '../components/layout';
import SEO    from '../components/seo';

const title     = 'Grid system',
    description = 'The chassis.css grid system uses a powerful, mobile-first, and flexbox-based 12-column layout. With no breakpoints to memorize and simple adjustment classes, it\'s very easy to get started!';

const Summary = () => (
    <>
        <div className="header__summary">
            <div>
                <h1>{ title }</h1>
                <p>{ description }</p>
            </div>
        </div>
    </>
);

const IndexPage = () => (
    <Layout summary={ Summary }>
        <SEO
            title={ title }
            description={ description } />
        <h2>The basics</h2>
        <p>There's a few things to keep in mind when using the chassis.css grid system.</p>
        <ul>
            <li>Rows are meant to be inside a <code>.container</code>.</li>
            <li>Columns are meant to be inside a <code>.row</code>.</li>
            <li>Column widths can add up to 12 within a row.</li>
            <li>Columns will become 100% width and vertically stacked when the viewport is less than or equal to 768px wide.</li>
        </ul>
        <p>Makes sense, right? Let's dive deeper.</p>
        <h3>Fixed width columns</h3>
        <p>Columns with fixed widths always follow the <code>.col-*</code> class structure, where <code>*</code> can be any number between 1 and 12. Let's see this in action below:</p>
        <Code>{`<div class="container">
    <div class="row">
        <div class="col-4">.col-4</div>
        <div class="col-4">.col-4</div>
        <div class="col-4">.col-4</div>
    </div>
</div>`}</Code>
        <p>In the above example, we have three columns each taking up 4 of the available 12 column width; <code>3 x 4 = 12</code>.</p>
        <h3>Auto width columns</h3>
        <p>Columns don't require a fixed width, however. Auto width columns use the <code>.col</code> class, and will take up the remainder of horizontal space when next to set-width columns. A row of all auto width columns will divide the horizontal space up evenly. Let's redo the first example with auto-width columns:</p>
        <Code>{`<div class="container">
    <div class="row">
        <div class="col">.col</div>
        <div class="col">.col</div>
        <div class="col">.col</div>
    </div>
</div>`}</Code>
        <p>In the above example, we have three auto width columns sharing the horizontal space evenly, rendering an identical result to the first example; <code>12 / 3 = 4</code>, so the auto width columns will automatically take up 4 of the available 12 column width. As stated before, auto width columns can be paired with fixed width columns, taking up the remaining horizontal space:</p>
        <Code>{`<div class="container">
    <div class="row">
        <div class="col-3">.col-3</div>
        <div class="col">.col</div>
    </div>
</div>`}</Code>
        <p>In the above example, we have a fixed width column taking up 3 of the available 12 column width, and an auto width column taking up the remaining horizontal space; <code>12 - 3 = 9</code>, so the auto width column will take up 9 of the available 12 column width.</p>
        <h3>Row nesting</h3>
        <p>Rows of columns can be can be nested within other rows without affecting the left or right alignment of the content inside:</p>
        <Code>{`<div class="container">
    <div class="row">
        <div class="col">.col
            <div class="row">
                <div class="col-6">.col-6
                    <div class="row">
                        <div class="col-4">.col-4</div>
                        <div class="col-4">.col-4</div>
                        <div class="col-4">.col-4</div>
                    </div>
                </div>
                <div class="col-6">.col-6
                    <div class="row">
                        <div class="col-12">.col-12</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`}</Code>
        <p>In the above example, we have nested 3 layers of rows under various arangements or columns without affecting the left or right alignment of the text inside.</p>
        <h2>Column alignment</h2>
        <p>Columns can be vertically and horizontally aligned however you like! This can be done by adding modifier classes to the row itself, globally aligning the columns within it, or in some instances to individual columns, aligning the column independently of the rest.</p>
        <h3>Vertical column alignment</h3>
        <p>First, let's see how we can vertically align all columns within a row:</p>
        <Code>{`<div class="container">
    <div class="row ai-c" style="height: 200px;">
        <div class="col-4">.col-4</div>
        <div class="col-4">.col-4</div>
        <div class="col-4">.col-4</div>
    </div>
</div>`}</Code>
        <p>In the above example, we are aligning the columns in the center of a row that has been manually set to 200px tall using the "align items" modifier classes. This is added to the row and follows the <code>.ai-*</code> class structure, where <code>*</code> can be one of the following letters:</p>
        <ul>
            <li><code>s</code> means "start" and aligns columns to the top of the row.</li>
            <li><code>c</code> means "center" and aligns columns to the vertical-middle of the row.</li>
            <li><code>e</code> means "end" and aligns columns to the bottom of the row.</li>
        </ul>
        <p>There's also the "align self" modifier classes. These are added to a column, independently affecting its vertical alignment, and follow the <code>.as-*</code> class structure, where <code>*</code> can be one of the letters in the list above.</p>
        <Code>{`<div class="container">
    <div class="row" style="height: 200px;">
        <div class="col-4 as-s">.col-4.as-s</div>
        <div class="col-4 as-c">.col-4.as-c</div>
        <div class="col-4 as-e">.col-4.as-e</div>
    </div>
</div>`}</Code>
        <p>In the above example, the first column is aligned to the top of the row, the second column is aligned to the middle of the row, and the third column is aligned to the bottom of the row.</p>
        <Alert type="warning">
            <p>Due to how flexbox works, vertical column alignments will become horizontal column alignments when the viewport is less than or equal to 768px.</p>
        </Alert>
        <h3>Horizontal column alignment</h3>
        <p>Columns can also be vertically aligned using the "justify content" modifier classes. These are added to the row and follow the <code>.jc-*</code> class structure, where <code>*</code> is one of the following letters:</p>
        <ul>
            <li><code>s</code> means "start" and aligns columns to the left of the row.</li>
            <li><code>c</code> means "center" and aligns columns to the horizontal-middle of the row.</li>
            <li><code>e</code> means "end" and aligns columns to the right of the row.</li>
            <li><code>a</code> means "space around" and aligns columns with an even amount of horizontal space around them.</li>
            <li><code>b</code> means "space between" and aligns columns with an even amount of horizontal space between them.</li>
        </ul>
        <p>Let's check it out:</p>
        <Code>{`<div class="container">
    <div class="row jc-s">
        <div class="col-1">.col-1</div>
        <div class="col-1">.col-1</div>
        <div class="col-1">.col-1</div>
    </div>
    <div class="row jc-c">
        <div class="col-1">.col-1</div>
        <div class="col-1">.col-1</div>
        <div class="col-1">.col-1</div>
    </div>
    <div class="row jc-e">
        <div class="col-1">.col-1</div>
        <div class="col-1">.col-1</div>
        <div class="col-1">.col-1</div>
    </div>
    <div class="row jc-a">
        <div class="col-1">.col-1</div>
        <div class="col-1">.col-1</div>
        <div class="col-1">.col-1</div>
    </div>
    <div class="row jc-b">
        <div class="col-1">.col-1</div>
        <div class="col-1">.col-1</div>
        <div class="col-1">.col-1</div>
    </div>
</div>`}</Code>
        <p>In the above example, each row has one of the possible "justify content" modifer classes on it.</p>
        <Alert type="warning">
            <p>Due to how flexbox works, horizontal column alignments will become vertical column alignments when the viewport is less than or equal to 768px.</p>
        </Alert>
        <h2>Column offsets</h2>
        <p>Columns can be offset from the start of a row or from a column to the left of itself using the "offset" modifier classes. These are added to a column and follow the <code>.os-*</code> class structure, where <code>*</code> is one of the following:</p>
        <ul>
            <li><code>a</code> means "auto" and puts as much space as possible to the left of the column.</li>
            <li>Any number between 1 and 12 corresponding to a column width.</li>
        </ul>
        <p>When the viewport is less than or equal to 768px wide, these offsets will be removed. Let's see this in action:</p>
        <Code>{`<div class="container">
    <div class="row">
        <div class="col-4">.col-4</div>
        <div class="col-4 os-a">.col-4.os-a</div>
    </div>
    <div class="row">
        <div class="col-2">.col-2</div>
        <div class="col-2 os-3">.col-2.os-3</div>
        <div class="col-2 os-3">.col-2.os-3</div>
    </div>
</div>`}</Code>
        <p>In the above example, the first row has two columns each taking up 4 of the avilable 12 column width with the second column automatically offseting it from the first; <code>12 - (4 + 4) = 4</code>, so the offset is automatically taking up 4 of the available 12 column width. The second row has 3 columns each taking up 2 of the available 12 column width with the second and third offseting itself from the previous by 3 of the available 12 column width; <code>2 + 3 + 2 + 3 + 2 = 12</code>.</p>
        <h2>Column order</h2>
        <p>Columns can be ordered relatively from one another independently of the order they are placed in the row using the "order" modifier classes. These are added to a column and follow one of the following class structures where <code>*</code> is any number 1 and 12:</p>
        <ul>
            <li><code>.or-*</code> changes the order of a column on all size viewports.</li>
            <li><code>.or-r*</code> changes the order of a column but resets the order when the viewport is less than or equal to 768px wide. This is similar behavior to the previous "push/pull" modifier classes in previous versions of this framework.</li>
        </ul>
        <Code>{`<div class="container">
    <div class="row">
        <div class="col-4 or-3">.col-4.or-3</div>
        <div class="col-4 or-2">.col-4.or-2</div>
        <div class="col-4 or-1">.col-4.or-1</div>
    </div>
    <div class="row">
        <div class="col-4 or-r3">.col-4.or-r3</div>
        <div class="col-4 or-r2">.col-4.or-r2</div>
        <div class="col-4 or-r1">.col-4.or-r1</div>
    </div>
</div>`}</Code>
        <p>In the above example, the first row has columns that are rendered in reverse order despite the order they were placed. The second row is doing the same as the first row, except this reording will be reset when the viewport is less than or equal to 768px wide.</p>
        <h3>Row reversing</h3>
        <p>The first row from the above example can also be accomplished using the "reverse" modifier class. This is added to a row and uses the <code>.rev</code> class. This will not be reset when the viewport is less than or equal to 768px wide.</p>
        <Code>{`<div class="container">
    <div class="row rev">
        <div class="col-2">.col-2</div>
        <div class="col-3">.col-3</div>
        <div class="col-7">.col-7</div>
    </div>
</div>`}</Code>
        <p>In the above example, the row has columns that are rendered in reverse order despite the order they were placed.</p>
        <Alert>
            <p>If you're familiar with how CSS flexbox works, you can use the modifier classes listed above on any <code>display: flex</code> elements or its children, as these use the flexbox's alignment rules.</p>
        </Alert>
    </Layout>
);

export default IndexPage;
