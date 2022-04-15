import React from 'react';
import classNames from 'classnames';
import './index.less';

interface TagProps {
  children?: string;
  prefixCls?: string;
  className?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const PresetStatusColorTypes = ['success', 'processing', 'error', 'default', 'warning'];
const PresetColorTypes = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const PresetColorRegex = new RegExp(`^(${PresetColorTypes.join('|')})(-inverse)?$`);
const PresetStatusColorRegex = new RegExp(`^(${PresetStatusColorTypes.join('|')})$`);

const Tag = (Props: TagProps) => {
  const { children, color, onClick } = Props;
  const prefixCls = 'dumi-tag';

  const isPresetColor = (): boolean => {
    if (!color) {
      return false;
    }
    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };

  const presetColor = isPresetColor();

  const tagClassName = classNames(prefixCls, {
    [`${prefixCls}-${color}`]: presetColor,
    [`${prefixCls}-has-color`]: color && !presetColor,
  });

  const tagStyle = {
    backgroundColor: color && !isPresetColor() ? color : undefined,
    cursor: onClick ? 'pointer' : 'default',
  };

  // 点击事件
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (!onClick) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  };

  return (
    <span className={tagClassName} style={tagStyle} onClick={handleClick}>
      {children}
    </span>
  );
};

export default Tag;
