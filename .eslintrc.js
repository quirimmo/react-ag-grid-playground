module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'airbnb'
  ],
  plugins: ['@typescript-eslint', 'react', 'import', 'jsx-a11y'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/prefer-stateless-function': [0, { ignorePureComponents: true }],
    'react/sort-comp': [
      2,
      {
        order: ['static-methods', 'lifecycle', 'everything-else', '/^on.+$/', 'render'],
        groups: {
          lifecycle: ['defaultProps', 'state', 'contextTypes', 'context']
        }
      }
    ],
    'no-use-before-define': ['error', { functions: false }],
    'arrow-parens': ['error', 'as-needed'],
    semi: ['error', 'always'],
    'max-len': ['error', { code: 140 }],
    'no-param-reassign': 0,
    'spaced-comment': 0,
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'object-curly-newline': ['error', { multiline: true, minProperties: 4, consistent: false }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never'
      }
    ],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    'import/prefer-default-export': 0
  },
  overrides: [
    {
      files: ['setupTests.ts', '*.spec.*', '*.test.*'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/explicit-function-return-type': 0
      }
    },
    {
      files: ['*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 0
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/']
      },
      typescript: {}
    }
  }
};
