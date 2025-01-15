import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import nodePlugin from 'eslint-plugin-node'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  ...compat.extends('eslint:recommended', 'plugin:@typescript-eslint/recommended'),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
      node: nodePlugin,
    },
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'node/no-process-env': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
