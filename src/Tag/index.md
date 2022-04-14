---
nav:
  title: Components
  path: /components
  order: 1

group:
  title: 展示
  order: 4
---

## Tag 标签

进行标记和分类的小标签

<big>**何时使用**</big>

- 标记事物的属性和状态等。
- 元素分类。

## 基本用法

添加了多种默认色彩的标签样式，用作不同场景使用。

```tsx
import React from 'react';
import { Space, Divider, Tag } from 'react-dumi-ui';

export default () => {
  const PresetColorTypes = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
    'yellow',
  ];
  const PresetStatusColorTypes = ['success', 'processing', 'error', 'default', 'warning'];

  return (
    <>
      <Divider orientation="left">Presets-color</Divider>
      <Space wrap>
        {PresetColorTypes.map((item, index) => (
          <Tag key={index} color={item}>
            {item}
          </Tag>
        ))}
      </Space>

      <Divider orientation="left">Presets-status</Divider>
      <Space wrap>
        {PresetStatusColorTypes.map((item, index) => (
          <Tag key={index} color={item}>
            {item}
          </Tag>
        ))}
      </Space>
    </>
  );
};
```

## 自定义色彩

如果默认值不能满足你的需求，可以设置为具体的色值。

```tsx
import React from 'react';
import { Space, Divider, Tag } from 'react-dumi-ui';

export default () => {
  const PresetColorValue = ['#ef4452', '#4a90e2', '#87d068'];

  return (
    <Space wrap>
      {PresetColorValue.map((item, index) => (
        <Tag key={index} color={item}>
          {item}
        </Tag>
      ))}
    </Space>
  );
};
```

### API

| 参数  | 说明   | 类型   | 默认值 |
| ----- | ------ | ------ | ------ |
| color | 标签色 | string | -      |
