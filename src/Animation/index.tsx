import React from 'react';
import animateName from './animate-name';
import './index.css';

const tuple = <T extends string[]>(...args: T) => args;

const TimingTypes = tuple('linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out');
type TimingType = typeof TimingTypes[number];

type NameType = typeof animateName[number];

interface AnimationProps {
  children?: string;
  /**
   * @description 动画名称
   * @params string类型
   */
  name?: NameType;
  /**
   * @description 动画指定需要多少时间完成(秒)
   */
  duration?: number;
  /**
   * @description 动画播放次数
   * @params 可以是一个数字 或 infinite(无限)
   */
  count?: number | 'infinite';
  /**
   * @description 动画启动前的延迟间隔(秒)。
   */
  delay?: number;
  /**
   * @description 动画将如何完成一个周期
   * @params 'linear' 从头到尾的速度是相同的。
   * @params 'ease' 默认。以低速开始，然后加快，在结束前变慢。
   * @params 'ease-in' 以低速开始。
   * @params 'ease-out' 以低速结束。
   * @params 'ease-in-out' 以低速开始和结束。
   */
  timing?: TimingType;
  /**
   * @description 动画是否正在运行或暂停
   * @params 'running' 默认。运行
   * @params 'paused' 暂停
   */
  state?: 'running' | 'paused';
}

const dataType = (data: any) => {
  return Object.prototype.toString.call(data).replace('[object', '').replace(']', '');
};

const Animation = (Props: AnimationProps) => {
  let {
    children,
    name,
    duration = 1,
    count = 1,
    delay = 0.4,
    timing = 'ease',
    state = 'running',
  } = Props;

  if (!TimingTypes.includes(timing)) timing = 'ease';

  if (dataType(count) === 'String' && count !== 'infinite') count = 1;

  if (!['running', 'paused'].includes) state = 'running';

  // 添加动画
  const addStyle = {
    // 动画指定需要多少秒完成
    animationDuration: `${duration}s`,
    // 定义动画的播放次数: n (数字) | infinite(无限)
    animationIterationCount: count,
    // 动画启动前的延迟间隔。
    animationDelay: `${delay}s`,
    // 动画将如何完成一个周期
    animationTimingFunction: timing,
    // 动画是否正在运行(running) | 已暂停(paused)
    animationPlayState: state,
  };

  return (
    <div className={name} style={addStyle}>
      {children}
    </div>
  );
};

export default Animation;
