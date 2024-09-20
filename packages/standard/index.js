module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module', // 启用ES模块
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: [
          '.js',
          '.mjs',
          '.cjs',
          '.ts',
          '.d.ts',
          '.json',
          '.node',
          '.yml',
          '.yaml',
          '.toml',
          '.vue',
          '.jsx',
          '.tsx'
        ]
      }
    }
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'dist',
    'LICENSE*',
    'output',
    'coverage',
    'public',
    'temp',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    '!.github',
    '!.vitepress',
    '!.vscode'
  ],
  overrides: [
    {
      files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
      extends: ['./libs/stylistic-standard', './libs/es-default-standard', './libs/es-import-standard', './libs/es-unicorn-standard'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        sourceType: 'module',
        requireConfigFile: false
      }
    },
    {
      files: ['**/*.jsx'],
      extends: ['./libs/stylistic-standard', './libs/es-default-standard', './libs/es-import-standard', './libs/es-unicorn-standard'],
      rules: {
        '@stylistic/js/no-extra-parens': 'off'
      }
    },
    {
      files: ['**/*.vue'],
      extends: ['./libs/stylistic-standard', './libs/es-default-standard', './libs/es-import-standard', './libs/es-unicorn-standard']
    },
    {
      files: ['scripts/**/*.*', 'cli.*'],
      rules: {
        'no-console': 'off' // 脚本中可以使用 console
      }
    },
    {
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off' // 测试文件中可以使用 expect
      }
    },
    {
      files: ['**/*.html', '**/*.htm'],
      parser: '@html-eslint/parser',
      extends: ['./libs/html-standard']
    },
    {
      files: ['**/package.json'],
      parser: 'jsonc-eslint-parser',
      extends: ['./libs/package-json-standard']
    },
    {
      files: ['**/*.json', '**/*.json5', '**/*.jsonc', '**/*.eslintrc', '**/*.babelrc', '**/*.stylelintrc', '**/*.prettierrc'],
      parser: 'jsonc-eslint-parser',
      extends: ['./libs/json-standard']
    },
    {
      files: ['**/*.yaml', '**/*.yml'],
      parser: 'yaml-eslint-parser',
      extends: ['./libs/yml-standard']
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'import/no-duplicates': 'off' // 有时候会有重复的 import
      }
    },
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
      extends: ['./libs/md-standard']
    }
  ]
}
