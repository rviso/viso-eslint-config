# 更新日志

本文档记录了 Viso ESLint Config 项目的所有重要变更。

## [Unreleased]

### Changed
- chore: 更新 pnpm 版本至 8.15.9；优化 ESLint 配置格式
- chore: 添加 @viso/eslint-config-standard 依赖，更新标准配置版本至 0.4.2
- chore: 更新多个包的作者信息，提升一致性；更新标准配置版本至0.5.0，添加对未使用导入的支持

## [0.4.2] - 2025-02-14

### Added
- ✨ feat: 更新 tsconfig-sort-keys.js，关闭 tsconfig 排序规则
- ✨ feat: 更新 fix-generator.js，优化 AST 打印和注释处理，调整 tsconfig.json 配置

### Fixed
- fix: 更新eslint配置，添加对隐藏配置文件的支持

## [0.4.1] - 2025-02-12

### Added
- ✨ feat: 优化tsconfig自动化格式配置，加入注释和分组，修复路径转义问题

## [0.4.0] - 2025-01-24

### Added
- feat: 添加 eslint-plugin-tsconfig-sort 插件文档，提供安装和使用说明
- feat: 添加 tsconfig-sort 插件以支持 tsconfig.json 属性排序

## [0.3.8] - 2025-01-24

发布版本，包含 tsconfig 排序插件相关功能。

## [0.3.7] - 2025-01-24

### Added
- feat: 更新 ESLint 配置以支持 JSX 文件，调整规则以优化代码风格

## [0.3.6] - 2024-10-29

### Changed
- refactor: disable import/order rule in es-import-extends.js

## [0.3.5] - 2024-10-26

### Documentation
- 📃 docs: 更新文档说明

## [0.3.4] - 2024-10-26

### Changed
- refactor: 移除无用的工作区配置
- refactor: 更新eslint配置以支持最新版本的eslint和typescript
- refactor: 更新eslint配置以支持typescript文件

### Documentation
- 📃 docs: 更新文档说明

## [0.3.3] - 2024-10-26

### Changed
- refactor: 移除无用的工作区配置
- refactor: 更新eslint配置以支持typescript文件

## [0.3.2] - 2024-10-26

### Changed
- refactor: 更新eslint配置以支持typescript文件

## [0.3.1] - 2024-10-26

### Changed
- refactor: 重命名包名为viso-eslint-config
- 🦄 refactor: 重构eslint
- refactor: 重构eslint配置

### Fixed
- 🐞 fix: 修复末尾分号报错

## [0.3.0] - 2024-10-26

### Changed
- ✨ feat: 重构所有eslint规则

这是一个重大重构版本，重新设计了所有 ESLint 规则配置。

## [0.2.5] - 2024-10-26

### Changed
- chore: update endOfLine configuration in standard package

## [0.2.4] - 2024-10-26

### Added
- feat: 添加 .mts 文件扩展名到 TypeScript 配置

## [0.2.3] - 2024-10-26

### Changed
- ✨ feat: 关掉一个typescript规则
- ✨ feat: 减少忽略类型
- ✨ feat: 调整ignorePatterns
- ✨ feat: 改进eslint配置规则

### Styled
- 🌈 style: 代码格式化

## [0.2.2] - 2024-10-26

### Changed
- ✨ feat: 调整import/no-unresolved 规则
- ✨ feat: 更新依赖版本

### Fixed
- 🐞 fix: 修复eslint解析报错

### Documentation
- ✨ feat: 更新文档

### Changed
- ✨ feat: 更新eslint格式化配置，修复配置问题

## [0.2.1] - 2024-10-26

### Changed
- chore: Update eslint configuration to disable prettier for *.vue files

## [0.2.0] - 2024-10-26

### Changed
- chore: Update npm dependency tags to "latest" in package.json files

## [0.1.9] - 2024-10-26

### Changed
- chore: Disable prettier for *.vue files in eslint configuration

## [0.1.8] - 2024-10-26

### Changed
- chore: Disable prettier for toml files in eslint configuration

## [0.1.7] - 2024-10-26

### Added
- chore: Add toml-eslint-parser as a dependency and enable plugin:toml/standard for *.toml files

## [0.1.6] - 2024-10-26

### Changed
- chore: Update no-debugger and no-console rules to warn level

## [0.1.5] - 2024-10-26

### Changed
- chore: Update printWidth to 120 in eslint configuration

## [0.1.4] - 2024-10-26

### Changed
- chore: Update prettier and vue configuration

## [0.1.3] - 2024-10-26

### Changed
- chore: Update prettier configuration
- ✨ feat: 优化eslint基础配置

## [0.1.2] - 2024-10-26

### Added
- ✨ feat: 允许强制发布所有包

### Removed
- ✨ feat: 移除eslint-plugin-rust

### Changed
- chore: Update package name to use 'eslint-plugin-rust' instead of '@rviso/eslint-plugin-rust'

## [0.1.1] - 2024-10-26

### Added
- ✨ feat: 新增eslint-plugin-rust配置

## [0.1.0] - 2024-10-26

### Added
- ✨ feat: 新增@rviso/eslint-config包，用于集成所有配置

### Changed
- chore: Update package and project names to use 'rviso' instead of 'blanc-nova'

### Initial
- 第一次提交
- add eslint config

---

## 包结构

项目包含以下核心包：

- **@viso/eslint-config** (主配置包) - v0.4.2
- **@viso/eslint-config-standard** (标准配置) - v0.4.2  
- **@viso/eslint-config-typescript** (TypeScript配置) - v0.4.2
- **@viso/eslint-config-vue** (Vue配置) - v0.4.2
- **eslint-plugin-tsconfig-sort** (TSConfig排序插件) - v0.4.2

## 技术要求

- Node.js >= 18.0.0
- ESLint >= 8.57.0
- TypeScript >= 4.9.5 (TypeScript 配置)
- Prettier >= 3.0.0 (部分配置)

## 贡献指南

本项目使用 Lerna 进行 monorepo 管理，使用 pnpm 作为包管理器。遵循语义化版本规范进行版本管理。
