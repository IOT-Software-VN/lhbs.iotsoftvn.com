import path from 'node:path'
import { fileURLToPath } from 'node:url'
import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const tsconfigPath = path.join(__dirname, 'tsconfig.json')
const tsconfigNodePath = path.join(__dirname, 'tsconfig.node.json')
const isProd = process.env.NODE_ENV === 'production'

export default [
  {
    ignores: ['dist', 'node_modules', 'src/components/ui']
  },

  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: [tsconfigPath, tsconfigNodePath]
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks
    },
    rules: {
      'no-console': [isProd ? 'error' : 'warn', { allow: isProd ? ['warn', 'error'] : ['warn', 'error', 'log'] }],
      'no-duplicate-imports': 'error',
      'no-unused-vars': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],

      '@typescript-eslint/no-explicit-any': 'off',

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
          disallowTypeAnnotations: false
        }
      ],

      ...reactHooks.configs.recommended.rules
    }
  },

  {
    // Declaration files frequently contain unused generics/types by design.
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-imports': 'off'
    }
  },

  {
    files: ['**/*.tsx'],
    plugins: {
      'react-refresh': reactRefresh
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  }
]
