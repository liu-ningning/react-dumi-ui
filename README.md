# react-dumi-ui

`react-dumi-ui` 是基于 React 的 UI 组件库，主要用于日常项目开发使用。

## 使用 npm 安装

```bash
npm i react-dumi-ui
```

## Button 示例

```tsx
import React, { useState } from 'react';
import { Button } from 'react-dumi-ui';

ReactDOM.render(
  <>
    <Button type="primary">Primary Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>,
  mountNode,
);
```

## Modal 示例

```tsx
import React, { useState } from 'react';
import { Button, Modal } from 'react-dumi-ui';

export default () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setIsVisible(true)}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isVisible}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
      >
        <p>1、This is contents...</p>
        <p>2、This is contents...</p>
      </Modal>
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

- [v1.2.0](http://49.232.221.71:5206/history#120)
- [v1.1.1](http://49.232.221.71:5206/history#111)
- [v1.1.0](http://49.232.221.71:5206/history#110)

## 如何创建

[create project](https://github.com/liu-ningning/react-dumi-ui/blob/main/create.md)，提供大家如何创建一个自己的 UI 组件库。

## 如何发布一个组件库

[How to publish a UI component library](https://github.com/liu-ningning/react-dumi-ui/blob/main/build.md)
