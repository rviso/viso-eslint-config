module.exports = {
  plugins: ['@html-eslint'],
  overrides: [
    {
      files: ['**/package.json'],
      parser: 'jsonc-eslint-parser'
    }
  ],
  extends: ['plugin:jsonc/recommended-with-jsonc'],
  rules: {
    'jsonc/indent': [
      'error',
      2,
      {}
    ],
    'jsonc/sort-keys': [
      // 设置 package.json 的字段顺序
      'error',
      {
        pathPattern: '^$',
        order: [
          'publisher',
          'name',
          'displayName',
          'type',
          'version',
          'private',
          'packageManager',
          'description',
          'author',
          'license',
          'funding',
          'homepage',
          'repository',
          'bugs',
          'keywords',
          'categories',
          'sideEffects',
          'exports',
          'main',
          'module',
          'unpkg',
          'jsdelivr',
          'types',
          'typesVersions',
          'bin',
          'icon',
          'files',
          'engines',
          'activationEvents',
          'contributes',
          'scripts',
          'peerDependencies',
          'peerDependenciesMeta',
          'dependencies',
          'optionalDependencies',
          'devDependencies',
          'pnpm',
          'overrides',
          'resolutions',
          'husky',
          'simple-git-hooks',
          'lint-staged',
          'eslintConfig'
        ]
      },
      {
        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
        order: { type: 'asc' }
      },
      {
        pathPattern: '^exports.*$',
        order: [
          'types',
          'require',
          'import'
        ]
      }
    ]
  }
}
