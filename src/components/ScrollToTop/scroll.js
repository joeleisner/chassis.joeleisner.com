export function thresholds() {
    const {
        innerHeight: windowHeight,
        pageYOffset: scrollOffset
    } = window;
    const {
        body,
        documentElement: html
    } = document;
    const pageHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );
    const top = scrollOffset > 400;
    const bottom = windowHeight + scrollOffset < pageHeight - 100;

    return { top, bottom };
}
