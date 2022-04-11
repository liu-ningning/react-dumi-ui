---
nav:
  title: Components
  path: /components
  order: 1

group:
  title: Button
---

## Button

### 按钮类型

按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。

```tsx
import React from 'react';
import { Button } from 'react-dumi-ui';

export default () => {
  return (
    <>
      <Button>Default Button</Button>
      <Button type="primary">Primary Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </>
  );
};
```

### 按钮尺寸

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

```tsx
import React from 'react';
import { Button } from 'react-dumi-ui';

export default () => {
  return (
    <>
      <Button size="large">Large</Button>
      <Button>Default</Button>
      <Button size="small">Small</Button>
      <br />
      <Button size="large" type="primary">
        Large
      </Button>
      <Button type="primary">Default</Button>
      <Button size="small" type="primary">
        Small
      </Button>
      <br />
      <Button size="large" type="dashed">
        Large
      </Button>
      <Button type="dashed">Default</Button>
      <Button size="small" type="dashed">
        Small
      </Button>
    </>
  );
};
```

### 危险按钮

```tsx
import React from 'react';
import { Button } from 'react-dumi-ui';

export default () => {
  return (
    <>
      <Button danger>Default</Button>
      <Button type="primary" danger>
        Primary
      </Button>
      <Button type="dashed" danger>
        Dashed
      </Button>
      <Button type="text" danger>
        Text
      </Button>
      <Button type="link" danger>
        Link
      </Button>
    </>
  );
};
```

### 不可用状态

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

```tsx
import React from 'react';
import { Button } from 'react-dumi-ui';

export default () => {
  return (
    <>
      <Button>Default</Button>
      <Button disabled>Default disabled</Button>
      <br />
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary disabled
      </Button>
      <br />
      <Button type="primary" danger>
        Primary
      </Button>
      <Button type="primary" danger disabled>
        Primary disabled
      </Button>
      <br />
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>
        Dashed disabled
      </Button>
      <br />
      <Button type="dashed" danger>
        Dashed
      </Button>
      <Button type="dashed" danger disabled>
        Dashed disabled
      </Button>
      <br />
      <Button type="link">Link</Button>
      <Button type="link" disabled>
        Link disabled
      </Button>
      <br />
      <Button type="link" danger>
        Link
      </Button>
      <Button type="link" danger disabled>
        Link disabled
      </Button>
      <br />
      <Button type="text">Text</Button>
      <Button type="text" disabled>
        Text disabled
      </Button>
      <br />
    </>
  );
};
```

### API

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 按钮失效状态 | boolean | false |
| danger | 设置危险按钮 | boolean | false |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle` |
| type | 设置按钮类型 | `primary` \| `ghost` \| `dashed` \| `link` \| `text` \| `default` | `default` |
