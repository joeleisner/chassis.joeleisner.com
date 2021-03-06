module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: 'eslint:recommended',
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: [
        'react'
    ],
    rules: {
        indent: 0,
        'linebreak-style': [
            'error',
            'unix'
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true
            }
        ],
        semi: [
            'error',
            'always'
        ]
    }
};