import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    ignores: ['dist', 'tailwind.config.js', 'postcss.config.js', 'vite.config.js', 'coverage', '__tests__', 'src/test'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': 'off',
      // This project doesn't use PropTypes; don't require them.
      'react/prop-types': 'off',
      // Allow simple apostrophes/quotes in JSX text content.
      'react/no-unescaped-entities': 'off',
      // Don't error on the unused automatic React import, but keep other unused-var checks.
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^React$|^_',
          args: 'after-used',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
]
