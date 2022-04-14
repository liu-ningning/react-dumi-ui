---
nav:
  title: Components
  path: /components
  order: 1

group:
  title: 反馈
  order: 3
---

## Modal 对话框

模态对话框。

<big>**何时使用**</big>

需要处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

## 基本用法

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
        <p>3、This is contents...</p>
      </Modal>
    </>
  );
};
```

## 自定义页脚

可根据使用场景自定义页脚展示类型

自定义页脚字段 `footer`， 类型为 `React.ReactNode` | `false`，若是`React.ReactNode[]`，则每项元素需定义唯一`key`，否则不生效。

```tsx
import React, { useState } from 'react';
import { Button, Modal } from 'react-dumi-ui';

export default () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setIsVisible(true)}>
        Open Modal with custom footer
      </Button>
      <Modal
        title="Basic Modal"
        visible={isVisible}
        onOk={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
        footer={[
          <Button onClick={() => setIsVisible(false)}>No-key</Button>,
          <Button key="back" onClick={() => setIsVisible(false)}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={() => setIsVisible(false)}>
            Submit
          </Button>,
          <Button key="search" type="link" onClick={() => setIsVisible(false)}>
            Search
          </Button>,
        ]}
      >
        <p>1、This is contents...</p>
        <p>2、This is contents...</p>
        <p>3、This is contents...</p>
      </Modal>
    </>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | ReactNode | - |
| width | 宽度 | string \| number | 520 |
| visible | 对话框是否可见 | boolean | - |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |
| mask | 是否展示遮罩 | boolean | true |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |
| closable | 是否显示右上角的关闭按钮 | boolean | true |
| cancelText | 取消按钮文字 | ReactNode | `取 消` |
| okText | 确认按钮文字 | ReactNode | `确 定` |
| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |
| onOk | 点击确定回调 | function(e) | - |
| footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}` | ReactNode | (确定取消按钮) |
