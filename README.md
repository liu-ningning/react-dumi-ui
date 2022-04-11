# react-dumi-ui

### Create project

```bash
$ mkdir react-dumi-ui && cd react-dumi-ui
$ yarn create @umijs/dumi-lib --site
```

Install dependencies：

```bash
$ yarn
```

Start the dev server：

```bash
$ yarn start
```

Build documentation：

```bash
$ yarn docs:build
```

Run test：

```bash
$ yarn test
```

- If it fails, the package should be missing:

```bash
$ yarn add react-dom@17.0.1 --dev
```

Build library via `father-build`：

```bash
$ yarn build
```

### 本地访问

> http://localhost:5205

> 若端口号冲突，可在`.env`文件中修改本地端口号，并重启项目

### 自定义导航、分组和标题

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
```

## 序

```

```
