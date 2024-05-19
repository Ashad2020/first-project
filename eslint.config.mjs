import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
// https://github.com/ShafiaChy/Eslint-Config-Setup/blob/main/package.json
export default [
  {
    languageOptions: { globals: globals.browser },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
    },
    ignores: ['**/node_modules/', '.dist/'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]
