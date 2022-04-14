---
nav:
  title: Components
  path: /components
  order: 1

group:
  title: 通用
  order: 1
---

## Animation 动画

对组件包裹的元素呈现不同样式的动画，提供了常见的 63 中动画。

```tsx
import React from 'react';
import { Space, Animation } from 'react-dumi-ui';

export default () => {
  return (
    <Space>
      <Animation name="pulse" count="infinite">
        <div style={{ background: '#ef4452', width: '100px', height: '100px' }}></div>
      </Animation>
      <Animation name="flash" count="infinite">
        <div style={{ background: '#4a90e2', width: '100px', height: '100px' }}></div>
      </Animation>
    </Space>
  );
};
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 动画名称 | string \| [查看动画名称](#动画名称说明) |  |
| duration | 动画指定需要多少时间完成(秒) | number | 1 |
| count | 动画播放次数 | `number` \| `infinite`(无限) | 1 |
| delay | 动画启动前的延迟间隔(秒) | number | 0.4 |
| timing | 动画将如何完成一个周期 | `linear`\| `ease`\| `ease-in`\| `ease-out`\| `ease-in-out`\| [查看说明](#动画周期说明) | ease |
| state | 动画是否正在运行或暂停 | `running`\| `paused` | running |

### 动画周期说明

| timing        | 说明                                      |
| ------------- | ----------------------------------------- |
| `linear`      | 从头到尾的速度是相同的                    |
| `ease`        | `默认` 以低速开始，然后加快，在结束前变慢 |
| `ease-in`     | 以低速开始                                |
| `ease-out`    | 以低速结束                                |
| `ease-in-out` | 以低速开始和结束                          |

### 动画名称说明

| name                 | 说明         |
| -------------------- | ------------ |
| `fadeIn`             | 淡入         |
| `fadeInDown`         | 向下淡入     |
| `fadeInDownBig`      | 大幅向下淡入 |
| `fadeInLeft`         | 向左淡入     |
| `fadeInLeftBig`      | 大幅向左淡入 |
| `fadeInRight`        | 向右淡入     |
| `fadeInRightBig`     | 大幅向右淡入 |
| `fadeInUp`           | 向上淡入     |
| `fadeInUpBig`        | 大幅向上淡入 |
| `slideInLeft`        | 向左移入     |
| `slideInRight`       | 向右移入     |
| `slideInDown`        | 向下移入     |
| `bounceIn`           | 弹入         |
| `bounceInLeft`       | 向左弹入     |
| `bounceInRight`      | 向右弹入     |
| `bounceInUp`         | 向上弹入     |
| `bounceInDown`       | 向下弹入     |
| `flipInX`            | X 轴翻转进入 |
| `flipInY`            | Y 轴翻转进入 |
| `lightSpeedIn`       | 光速进入     |
| `rotateIn`           | 旋转进入     |
| `rotateInDownLeft`   | 左下旋转进入 |
| `rotateInDownRight`  | 右下旋转进入 |
| `rotateInUpLeft`     | 左上旋转进入 |
| `rotateInUpRight`    | 右上旋转进入 |
| `rollIn`             | 从左滚入     |
| `bounce`             | 弹跳         |
| `flash`              | 闪烁         |
| `pulse`              | 放大缩小     |
| `rubberBand`         | 抖动         |
| `shake`              | 左右晃动     |
| `swing`              | 悬摆         |
| `tada`               | 放大抖动     |
| `wobble`             | 左右悬摆     |
| `flip`               | 翻转         |
| `fadeOut`            | 淡出         |
| `fadeOutDown`        | 向下淡出     |
| `fadeOutDownBig`     | 大幅向下淡出 |
| `fadeOutLeft`        | 向左淡出     |
| `fadeOutLeftBig`     | 大幅向左淡出 |
| `fadeOutRight`       | 向右淡出     |
| `fadeOutRightBig`    | 大幅向右淡出 |
| `fadeOutUp`          | 向下淡出     |
| `fadeOutUpBig`       | 大幅向下淡出 |
| `slideOutLeft`       | 向左移出     |
| `slideOutRight`      | 向右移出     |
| `slideOutUp`         | 向上移出     |
| `slideOutDown`       | 向下移出     |
| `bounceOut`          | 弹出         |
| `bounceOutDown`      | 向下弹出     |
| `bounceOutLeft`      | 向左弹出     |
| `bounceOutRight`     | 向右弹出     |
| `bounceOutUp`        | 向上弹出     |
| `flipOutX`           | X 轴翻转移出 |
| `flipOutY`           | Y 轴翻转移出 |
| `lightSpeedOut`      | 光速移出     |
| `rotateOut`          | 旋转移出     |
| `rotateOutDownLeft`  | 左下旋转移出 |
| `rotateOutDownRight` | 右下旋转移出 |
| `rotateOutUpLeft`    | 左上旋转移出 |
| `rotateOutUpRight`   | 右上旋转移出 |
| `hinge`              | 向左脱落     |
| `rollOut`            | 向右滚出     |
