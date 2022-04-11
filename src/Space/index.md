---
nav:
  title: Components
  path: /components
  order: 1

group:
  title: Space
---

## Space

设置组件之间的间距。

<big>**何时使用**</big>

避免组件紧贴在一起，拉开统一的空间，产生间距。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。

## 基本用法

```tsx
import React from 'react';
import { Button, Space } from 'react-dumi-ui';

export default () => {
  return (
    <>
      <Space>
        <Button>Button</Button>
        <Button type="primary">Button</Button>
        <Button type="dashed">Button</Button>
      </Space>
    </>
  );
};
```

## 间距大小

间距预设大、中、小三种大小。

通过设置 `size` 为 `small` `middle` `large` 分别把间距设为小、中、大间距。若不设置 `size`，则默认为`small`。

```tsx
import React from 'react';
import { Button, Space } from 'react-dumi-ui';

export default () => {
  return (
    <>
      <Space size="small">
        <Button>Button</Button>
        <Button type="primary">Button</Button>
        <Button type="dashed">Button</Button>
      </Space>
      <br />
      <br />
      <Space size="middle">
        <Button>Button</Button>
        <Button type="primary">Button</Button>
        <Button type="dashed">Button</Button>
      </Space>
      <br />
      <br />
      <Space size="large">
        <Button>Button</Button>
        <Button type="primary">Button</Button>
        <Button type="dashed">Button</Button>
      </Space>
    </>
  );
};
```

也可以自定义间距大小。

通过设置 `size` 为一个 `number` 类型的数字，来控制间距大小。

```tsx
import React from 'react';
import { Button, Space } from 'react-dumi-ui';

export default () => {
  return (
    <>
      <Space size={10}>
        <Button>Button</Button>
        <Button type="primary">Button</Button>
        <Button type="dashed">Button</Button>
      </Space>
      <br />
      <br />
      <Space size={20}>
        <Button>Button</Button>
        <Button type="primary">Button</Button>
        <Button type="dashed">Button</Button>
      </Space>
    </>
  );
};
```

## 间距方向

```tsx
import React from 'react';
import { Button, Space } from 'react-dumi-ui';

export default () => {
  return (
    <Space direction="vertical" size="middle">
      <Button>Button</Button>
      <Button type="primary">Button</Button>
      <Button type="dashed">Button</Button>
    </Space>
  );
};
```

## 自动换行

```tsx
import React from 'react';
import { Button, Space } from 'react-dumi-ui';

export default () => {
  return (
    <Space wrap>
      {new Array(20).fill(null).map((_, index) => (
        <Button key={index}>Button</Button>
      ))}
    </Space>
  );
};
```

## 对齐模式

```tsx
import React from 'react';
import { Button, Space } from 'react-dumi-ui';

export default () => {
  return (
    <div style={{ display: 'flex' }}>
      {['start', 'center', 'end', 'baseline'].map((algin, index) => (
        <div
          key={index}
          style={{ border: '1px solid #1890ff', marginRight: '20px', padding: '5px' }}
        >
          <Space align={algin}>
            <span>{algin}</span>
            <Button type="primary">Button</Button>
            <span style={{ height: '60px', background: '#ccc' }}>Block</span>
          </Space>
        </div>
      ))}
    </div>
  );
};
```

### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 对齐方式 | `start` \| `end` \|`center` \|`baseline` |  |
| direction | 间距方向 | `vertical` \| `horizontal` | `horizontal` |
| size | 间距大小 | `small` \| `middle` \| `large` \| number | `small` |
| wrap | 是否自动换行，仅在 `horizontal` 时有效 | boolean | false |
