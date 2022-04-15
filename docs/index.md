---
hero:
  title: react-dumi-ui
  desc: react-dumi-ui site components example
  actions:
    - text: 开始使用
      link: /components
footer: Open-source MIT Licensed | Copyright © 2022<br />Powered by [dumi](https://d.umijs.org)
---

`react-dumi-ui` 是基于 React 的 UI 组件库，主要用于日常项目开发使用。

## 使用 npm 安装

```bash
npm i react-dumi-ui
```

## 组件 Button 示例

```tsx
import React from 'react';
import { Button } from 'react-dumi-ui';

export default () => {
  return (
    <>
      <Button type="primary">Primary Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </>
  );
};
```

## 组件链接

- [Button](http://49.232.221.71:5206/components/button)
- [Space](http://49.232.221.71:5206/components/space)
- [Divider](http://49.232.221.71:5206/components/divider)
- [Tag](http://49.232.221.71:5206/components/tag)
- [Modal](http://49.232.221.71:5206/components/modal)
- [Animation](http://49.232.221.71:5206/components/animation)
- [Loading](http://49.232.221.71:5206/components/loading)

## 更新日志

- [v1.2.0](http://49.232.221.71:5206/history#115)

## 如何创建

[create project](https://github.com/liu-ningning/react-dumi-ui/blob/main/create.md)，提供大家如何创建一个自己的 UI 组件库。

## 如何发布一个组件库

[How to publish a UI component library](https://github.com/liu-ningning/react-dumi-ui/blob/main/build.md)
