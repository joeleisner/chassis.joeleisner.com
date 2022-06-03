import Cookies from 'js-cookie';

export function getSystem() {
    const { matches } = window.matchMedia(
        '(prefers-color-scheme: dark)'
    );

    return matches ? 'dark' : 'light';
}

export function getLocal() {
    return Cookies.get('chassis-theme');
}

export function setLocal(theme) {
    // Add the theme to the document element's theme data,...
    document.documentElement.setAttribute('data-theme', theme);
    // ... set a cookie expiration date of 1 year,...
    const expires = 365;
    // ... and store the theme override cookie
    Cookies.set('chassis-theme', theme, { expires });
}

export function removeLocal() {
    // Remove the document element's theme data...
    document.documentElement.removeAttribute('data-theme');
    // ... and remove any theme override cookies
    Cookies.remove('chassis-theme');
}
