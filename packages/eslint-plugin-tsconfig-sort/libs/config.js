module.exports = {
  // 根属性排序规则
  ROOT_OPTIONS_ORDER: [
    'extends',
    'compilerOptions',
    'include',
    'exclude',
    'files',
    'references'
  ],
  // 定义compilerOptions的排序顺序
  COMPILER_OPTIONS_ORDER: [
  // 项目选项
    'incremental',
    'composite',
    'tsBuildInfoFile',
    'disableSourceOfProjectReferenceRedirect',
    'disableSolutionSearching',
    'disableReferencedProjectLoad',

    // 核心选项
    'target',
    'module',
    'lib',
    'moduleResolution',
    'noLib',
    'types',
    'typeRoots',
    'allowSyntheticDefaultImports',
    'esModuleInterop',
    'allowUmdGlobalAccess',
    'resolveJsonModule',
    'preserveSymlinks',
    'baseUrl',
    'paths',
    'plugins',

    // 严格检查
    'strict',
    'noImplicitAny',
    'strictNullChecks',
    'strictFunctionTypes',
    'strictBindCallApply',
    'strictPropertyInitialization',
    'noImplicitThis',
    'alwaysStrict',
    'useUnknownInCatchVariables',

    // 额外检查
    'noUnusedLocals',
    'noUnusedParameters',
    'noImplicitReturns',
    'noFallthroughCasesInSwitch',
    'allowUnusedLabels',
    'allowUnreachableCode',

    // 模块解析
    'rootDir',
    'rootDirs',
    'outDir',
    'declaration',
    'declarationDir',
    'emitDeclarationOnly',
    'sourceMap',
    'inlineSourceMap',
    'declarationMap',
    'outFile',
    'removeComments',
    'noEmit',
    'importHelpers',
    'downlevelIteration',
    'emitDecoratorMetadata',
    'experimentalDecorators',
    'allowJs',
    'checkJs',
    'preserveValueImports',

    // 输出选项
    'isolatedModules',
    'allowArbitraryExtensions',
    'verbatimModuleSyntax',
    'noEmitOnError',
    'jsx',
    'jsxFactory',
    'jsxFragmentFactory',
    'jsxImportSource',
    'reactNamespace',
    'noResolve',

    // 其他选项
    'charset',
    'locale',
    'newLine',
    'forceConsistentCasingInFileNames',
    'maxNodeModuleJsDepth',
    'preserveConstEnums',
    'pretty',
    'skipLibCheck',
    'skipDefaultLibCheck',
    'stripInternal',
    'traceResolution'
  ]
}
