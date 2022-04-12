# 从 0 到 1 搭建自己的 UI 组件库

> 本文记录自己搭建 React UI 组件库并发布的全过程，可帮你实现自己的 UI 组件库搭建。

> 本文所涉及的知识有 `react`、`dumi`、`father-build`等

通过本篇文章，你大概能了解到以下的内容：

- [dumi](https://d.umijs.org/zh-CN/config) 创建组件库
- [prettier](https://prettier.io/docs/en/index.html) 检测代码风格
- [father-build](https://github.com/umijs/father) 构建工具

## dumi 创建组件库

1、创建一个 `react-dumi-ui` 文件并用 VScode 编辑器打开

```bash
$ mkdir react-dumi-ui && cd react-dumi-ui
```

2、用 dumi 脚手架创建组件库项目

```bash
$ yarn create @umijs/dumi-lib --site
```

3、安装依赖并运行

```bash
$ yarn
$ yarn start
```

正常运行效果如下所示：

![运行效果截图](/statics/init-start.png)

默认启动 `8000` 端口，当然你可以修改你想启动的接口，通过添加`/.env`文件来自定义端口

```
PORT=5200
BROWSER=none
ESLINT=1
```

> 更多配置项请移步 [umi 环境变量](https://umijs.org/zh-CN/docs/env-variables) 查看

## 编写组件及文档

1、编写一个`分割线`组件

- 在文件 `/src` 下创建目录 `Divider`，目录结构：

```
  ├── src/Divider
    ├── index.less      // 组件样式
    ├── index.md        // 组件文档
    ├── index.test.tsx  // 组件测试
    └── index.tsx       // 组件代码
```

详细代码请查看 [gitHub](https://github.com/liu-ningning/react-dumi-ui/tree/main/src/Divider)

2、编写完成组件后，修改 `/src/index.ts` 文件，添加组件：

```ts
export { default as Divider } from './Divider';
```

3、执行命令验证组件是否可用

```bash
$ yarn test
```

If it fails, the package should be missing:

```bash
$ yarn add react-dom@17.0.1 --dev
```

## 基于 dumi 构建组件文档

1、每个组件中的 `index.md` 对应每个组件的使用文档，md 文件头部编写规则如下：

```
---
title: 自定义页面名称
nav:
  path: /自定义导航路由
  title: 自定义导航名称
  order: 控制导航顺序，数字越小越靠前，默认以路径长度和字典序排序

group:
  path: /自定义分组路由，注意，分组路由 = 导航路由 + 自己
  title: 自定义分组名称
  order: 控制分组顺序，数字越小越靠前，默认以路径长度和字典序排序
---

## 组件API
...
```

2、打包组件文档

```bash
$ yarn docs:build
```

> 打包后，将会在目录中生成 `docs-dist` 文件

组件文档运行效果如下所示：

![运行效果截图](/statics/divider.png)

## 基于 father-build 构建

[father-build](https://github.com/umijs/father) 是 `dumi` 的打包工具，在 dumi 初始化项目时已经安装。

是一款基于 [rollup](https://www.rollupjs.com/) 和 [babel](https://www.babeljs.cn/docs/) 的组件打包工具，具体使用方式详见文档。 我们只基于 babel 打包

1、修改 /.fatherrc.ts

```ts
export default {
  esm: 'babel',
};
```

若你是引入`less`编写组件风格，则需要将 less 转 css，否则发布后的 UI 库样式可能不生效，你只需要在 `/.fatherrc.ts` 配置：

```ts
export default {
  esm: 'babel',
  lessInBabelMode: true,
};
```

2、修改 /package.json

```
{
  ...
  "module": "es/index.js",
  "typings": "es/index.d.ts",
  "files": [
    "es"
  ]
}
```

3、前两步配置完成后，执行打包命令：

```bash
$ yarn build
```

> 打包后，将会在目录中生成 `es` 文件

## 发布到 NPM

1、登录 npm，依次输入相关信息：

```bash
npm login --registry https://registry.npmjs.org
```

- Username: xxxxxx
- Password: xxxxxx
- Email: (this IS public): xxx@163.com

2、发布到 npm

```bash
npm publish --registry https://registry.npmjs.org
```

- 注意每次发包前，确定`package.json`中的`version`是否更新，可通过命令设置 npm 包版本

```bash
npm version 1.1.0
```

- 为了不污染 npm 环境，测试包尽量 72 小时内删除项目~

3、删除 npm 包，或者删除某个版本

```bash
npm unpublish --registry https://registry.npmjs.org xxx@1.1.1 --force
```

## 项目完整目录结构

```
.
├── docs                 // 通用组件
├── docs-build           // 组件文档打包后
├── es                   // 组件打包后文件
├── node_modules         // 依赖包
├── src
    ├── .umi             // 项目启动零时文件
    ├── Divider          // 组件 Divider
    └── index.ts         // 组件入口文件
├── .editorconfig        // IDE 配置
├── .env                 // 项目启动环境配置
├── .fatherrc.ts         // 项目构建配置
├── .gitignore           // Git 忽略配置
├── .prettierignore      // Prettier 忽略配置
├── .prettierrc.js       // Prettier 配置
├── .umirc.ts            // 项目配置
├── LICENSE              // 版权说明
├── README.md            // 说明文档
├── package.json         // yarn 配置
├── yarn.lock            // yarn 依赖版本锁定
└── tsconfig.json        // ts 配置
```

- [react-dumi-ui](https://github.com/liu-ningning/react-dumi-ui)
- [react-dumi-ui 文档](http://49.232.221.71:5206)
- [react-dumi-ui npm](https://www.npmjs.com/package/react-dumi-ui)
