/**
 * *******************************************************************************************
 * @file                          config.js
 * @description                  配置模块，定义 AST 排序规则（根属性和 compilerOptions 的顺序）和中文描述
 * @copyright                    lingann
 * *******************************************************************************************
 */

// ========================================================
// #region 根属性排序规则
// ========================================================

/** 根属性排序规则 */
const ROOT_OPTIONS_ORDER = [
  'extends',
  'compilerOptions',
  'include',
  'exclude',
  'files',
  'references'
]

// #endregion
// ========================================================

// ========================================================
// #region compilerOptions 排序规则
// ========================================================

// ========================================================
// #region compilerOptions 分组和排序规则
// ========================================================

/**
 * compilerOptions 分组和排序规则
 * 按功能分组，便于维护和理解
 */
const COMPILER_OPTIONS_GROUP = {
  // 项目选项
  项目选项: [
    'incremental',
    'composite',
    'tsBuildInfoFile',
    'disableSourceOfProjectReferenceRedirect',
    'disableSolutionSearching',
    'disableReferencedProjectLoad'
  ],

  // 核心选项
  核心选项: [
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
    'plugins'
  ],

  // 严格检查
  严格检查: [
    'strict',
    'noImplicitAny',
    'strictNullChecks',
    'strictFunctionTypes',
    'strictBindCallApply',
    'strictPropertyInitialization',
    'noImplicitThis',
    'alwaysStrict',
    'useUnknownInCatchVariables'
  ],

  // 额外检查
  额外检查: [
    'noUnusedLocals',
    'noUnusedParameters',
    'noImplicitReturns',
    'noFallthroughCasesInSwitch',
    'allowUnusedLabels',
    'allowUnreachableCode'
  ],

  // 模块解析
  模块解析: [
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
    'preserveValueImports'
  ],

  // 输出选项
  输出选项: [
    'isolatedModules',
    'allowArbitraryExtensions',
    'verbatimModuleSyntax',
    'noEmitOnError',
    'jsx',
    'jsxFactory',
    'jsxFragmentFactory',
    'jsxImportSource',
    'reactNamespace',
    'noResolve'
  ],

  // 其他选项
  其他选项: [
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

/**
 * compilerOptions 排序规则
 */
const COMPILER_OPTIONS_ORDER = [
  ...COMPILER_OPTIONS_GROUP.项目选项,
  ...COMPILER_OPTIONS_GROUP.核心选项,
  ...COMPILER_OPTIONS_GROUP.严格检查,
  ...COMPILER_OPTIONS_GROUP.额外检查,
  ...COMPILER_OPTIONS_GROUP.模块解析,
  ...COMPILER_OPTIONS_GROUP.输出选项,
  ...COMPILER_OPTIONS_GROUP.其他选项
]

// #endregion
// ========================================================

// ========================================================
// #region compilerOptions 中文描述映射
// ========================================================

/**
 * compilerOptions 中文描述映射
 * 为每个选项添加详细的中文描述
 */
const COMPILER_OPTIONS_DESCRIPTION = {
  target: '指定 ECMAScript 目标版本，例如 "es5" 或 "es6"',
  module: '指定模块代码生成策略，例如 "commonjs" 或 "esnext"',
  lib: '指定要包含在编译中的库文件',
  moduleResolution: '指定模块解析策略，例如 "node" 或 "classic"',
  noLib: '禁用默认库文件（lib.d.ts）',
  types: '指定要包含的类型定义文件',
  typeRoots: '指定类型定义文件的根目录',
  allowSyntheticDefaultImports: '允许合成默认导入（即使模块没有默认导出）',
  esModuleInterop: '启用 ES 模块的互操作性支持',
  allowUmdGlobalAccess: '允许从 UMD 模块访问全局变量',
  resolveJsonModule: '允许导入 JSON 模块',
  preserveSymlinks: '保留符号链接路径',
  baseUrl: '指定模块解析的基目录',
  paths: '指定模块路径的映射关系',
  plugins: '指定要使用的 TypeScript 插件',
  strict: '启用所有严格类型检查选项',
  noImplicitAny: '禁止隐式的 any 类型',
  strictNullChecks: '启用严格的 null 和 undefined 检查',
  strictFunctionTypes: '启用严格的函数类型检查',
  strictBindCallApply: '启用严格的 bind、call 和 apply 检查',
  strictPropertyInitialization: '确保类的属性已初始化',
  noImplicitThis: '禁止隐式的 this 类型',
  alwaysStrict: '在解析的每个文件中使用严格模式',
  useUnknownInCatchVariables: '将 catch 子句中的变量类型设为 unknown',
  noUnusedLocals: '检查未使用的局部变量',
  noUnusedParameters: '检查未使用的函数参数',
  noImplicitReturns: '确保函数中的所有路径都返回一个值',
  noFallthroughCasesInSwitch: '检查 switch 语句中的 fallthrough 情况',
  allowUnusedLabels: '允许未使用的标签',
  allowUnreachableCode: '允许不可达代码',
  rootDir: '指定源文件的根目录',
  rootDirs: '指定多个源文件的根目录',
  outDir: '指定输出目录',
  declaration: '生成对应的 .d.ts 文件',
  declarationDir: '指定声明文件的输出目录',
  emitDeclarationOnly: '仅生成声明文件，不生成 JavaScript 文件',
  sourceMap: '生成 source map 文件',
  inlineSourceMap: '将 source map 嵌入到生成的 JavaScript 文件中',
  declarationMap: '为声明文件生成 source map',
  outFile: '将所有输出文件合并为一个文件',
  removeComments: '删除注释',
  noEmit: '不生成输出文件',
  importHelpers: '从 tslib 导入辅助函数',
  downlevelIteration: '针对 ES5/ES3 启用完整的迭代支持',
  emitDecoratorMetadata: '为装饰器生成元数据',
  experimentalDecorators: '启用实验性装饰器支持',
  allowJs: '允许编译 JavaScript 文件',
  checkJs: '在 JavaScript 文件中执行类型检查',
  preserveValueImports: '保留未使用的值导入',
  isolatedModules: '将每个文件视为独立的模块',
  allowArbitraryExtensions: '允许导入任意扩展名的文件',
  verbatimModuleSyntax: '保留模块语法',
  noEmitOnError: '在出现错误时不生成输出文件',
  jsx: '指定 JSX 代码生成策略',
  jsxFactory: '指定 JSX 工厂函数',
  jsxFragmentFactory: '指定 JSX Fragment 工厂函数',
  jsxImportSource: '指定 JSX 导入的模块',
  reactNamespace: '指定 React 命名空间',
  noResolve: '禁用模块路径解析',
  charset: '指定输入文件的字符编码',
  locale: '指定诊断信息的语言',
  newLine: '指定换行符类型',
  forceConsistentCasingInFileNames: '强制文件名大小写一致',
  maxNodeModuleJsDepth: '指定 node_modules 的解析深度',
  preserveConstEnums: '保留 const 枚举值',
  pretty: '格式化诊断输出',
  skipLibCheck: '跳过库文件的类型检查',
  skipDefaultLibCheck: '跳过默认库文件的类型检查',
  stripInternal: '移除 @internal 标记的代码',
  traceResolution: '输出模块解析的详细信息'
}

// #endregion
// ========================================================

module.exports = {
  ROOT_OPTIONS_ORDER,
  COMPILER_OPTIONS_GROUP,
  COMPILER_OPTIONS_ORDER,
  COMPILER_OPTIONS_DESCRIPTION
}
