---
nav:
  title: Components
  path: /components
  order: 1

group:
  title: 反馈
  order: 3
---

## Loading 加载中

用于页面或者某个区域数据加载中状态。

<big>**何时使用**</big>

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 基本用法

```tsx
import React from 'react';
import { Loading } from 'react-dumi-ui';

export default () => {
  return <Loading />;
};
```

## 大小设置

通过设置 `size` 为 `large` `small` 分别设为大、小尺寸。若不设置 `size`，则尺寸为中。

```tsx
import React from 'react';
import { Space, Loading } from 'react-dumi-ui';

export default () => {
  return (
    <Space size="middle">
      <Loading size="large" />
      <Loading />
      <Loading size="small" />
    </Space>
  );
};
```

## 呈现方式

通过设置 `type` 为 `line` `spot` 分别设为线型、点型。若不设置 `type`，则尺寸为点型。

```tsx
import React from 'react';
import { Space, Loading } from 'react-dumi-ui';

export default () => {
  return (
    <Space size="middle">
      <Loading type="line" size="large" />
      <Loading type="line" />
      <Loading type="line" size="small" />
    </Space>
  );
};
```

## 自定义描述文案

```tsx
import React from 'react';
import { Space, Loading } from 'react-dumi-ui';

export default () => {
  return (
    <Space size="large">
      <Loading tip="Loading..." />
      <Loading tip="Waiting..." />
    </Space>
  );
};
```

## 可包裹内容

```tsx
import React from 'react';
import { Loading } from 'react-dumi-ui';

export default () => {
  return (
    <Loading>
      The more you learn, the more you know, The more you know, the more you forget. The more you
      forget, the less you know. So why bother to learn.
    </Loading>
  );
};
```

### API

| 参数 | 说明                                         | 类型      | 默认值    |
| ---- | -------------------------------------------- | --------- | --------- |
| size | 组件大小，可选值为 `small` `default` `large` | string    | `default` |
| tip  | 当作为包裹元素时，可以自定义描述文案         | ReactNode | -         |
| type | 组件类型，可选值为 `spot` `line`             | string    | `spot`    |
