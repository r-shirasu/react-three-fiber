module.exports = {
    "env": {
        "browser": true,
        "es2022": true
    },
    "extends": [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        "eslint:recommended",
        "plugin:react/recommended",
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
        'no-console': ['error'],
        'react/react-in-jsx-scope': 'off',
        "react/function-component-definition": [
            2,
            { "namedComponents": ['function-declaration', 'arrow-function'] }
        ],
        "import/prefer-default-export": "off",
        '@typescript-eslint/no-shadow': 'off',
    }
}
