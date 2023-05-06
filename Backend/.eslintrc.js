module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: 'airbnb-base',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        "no-console": "off",
        'class-methods-use-this': "off",
        "import/first": "off"
    },
};
