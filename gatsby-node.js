const path = require('path');

const { compilerOptions } = require('./jsconfig.json');

const { paths } = compilerOptions;

let alias = {};

for (const [key, value] of Object.entries(paths)) {
    const newKey = key.slice(0, -2);
    const newValue = path.resolve(__dirname, ...value).slice(0, -2);

    alias[newKey] = newValue;
}

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias
        }
    })
}
