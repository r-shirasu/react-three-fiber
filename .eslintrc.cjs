module.exports = {
    "env": {
        "browser": true,
        "es2022": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        'prettier'
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": './tsconfig.json',
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'no-console': ['error', { allow : ['info'] }],
        '@typescript-eslint/no-non-null-assertion' : 'off'
    },
}
