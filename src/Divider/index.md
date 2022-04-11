---
nav:
  title: Components
  path: /components
  order: 1

group:
  title: Divider
---

## Divider

`分割线`

对文本段落进行分割展示。

- 对不同的段落进行分割。
- 对行内文字进行分割，例如`span`标签、表格的操作列等。

## 基本用法

默认为水平分割线

```tsx
import React from 'react';
import { Divider } from 'react-dumi-ui';

export default () => {
  return (
    <>
      <p>
        The more you learn, the more you know, The more you know, the more you forget. The more you
        forget, the less you know. So why bother to learn.
      </p>
      <Divider />
      <p>
        The more you learn, the more you know, The more you know, the more you forget. The more you
        forget, the less you know. So why bother to learn.
      </p>
    </>
  );
};
```

## 分割线标题

分割线标题的位置预设居左、居中、居右。

通过设置 `orientation` 为 `left` `center` `right` 分别把间距设为居左、居中、居右。若不设置则默认为`center`。

也可以使用 `plain` 可以设置为更轻量的分割文字样式。

当 `orientation` 为 `left` `right` 时，也可以通过设置 `orientationMargin` 来设置居左/居右边框之间的距离。

```tsx
import React from 'react';
import { Divider } from 'react-dumi-ui';

export default () => {
  return (
    <>
      <p>
        The more you learn, the more you know, The more you know, the more you forget. The more you
        forget, the less you know. So why bother to learn.
      </p>
      <Divider orientation="left">Left Text</Divider>
      <Divider orientation="left" plain>
        Left Text
      </Divider>
      <Divider orientation="left" orientationMargin={0}>
        Left Text
      </Divider>
      <Divider dashed>Center Text</Divider>
      <Divider plain>Center Text</Divider>
      <Divider orientation="right">Right Text</Divider>
      <Divider orientation="right" plain>
        Right Text
      </Divider>
      <Divider orientation="right" orientationMargin={0}>
        Right Text
      </Divider>
      <p>
        The more you learn, the more you know, The more you know, the more you forget. The more you
        forget, the less you know. So why bother to learn.
      </p>
    </>
  );
};
```

## 垂直分割线

使用 `type="vertical"` 设置为行内的垂直分割线。

```tsx
import React from 'react';
import { Divider, Button } from 'react-dumi-ui';

export default () => {
  return (
    <>
      Text
      <Divider type="vertical" />
      Button
      <Divider type="vertical" />
      Link
    </>
  );
};
```

### API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| children | 标题 | ReactNode | - |
| orientation | 分割线标题的位置 | `left` \| `right` \| `center` | `center` |
| orientationMargin | 标题和最近 left/right 边框之间的距离，同时 `orientation` 必须为 `left` 或 `right` 生效 | string \| number | - |
| dashed | 是否虚线 | boolean |  |
| plain | 文字是否显示为普通正文样式 | boolean | false |
| type | 水平还是垂直类型 | `horizontal` \| `vertical` | `horizontal` |
