import React from 'react';
import classNames from 'classnames';
import './index.less';

interface TagProps {
  children?: string;
  prefixCls?: string;
  className?: string;
  color?: string;
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
  const { children, color } = Props;
  const prefixCls = 'dumi-tag';
  const className = prefixCls;

  const isPresetColor = (): boolean => {
    if (!color) {
      return false;
    }
    return PresetColorRegex.test(color) || PresetStatusColorRegex.test(color);
  };

  const presetColor = isPresetColor();

  const tagClassName = classNames(
    prefixCls,
    {
      [`${prefixCls}-${color}`]: presetColor,
      [`${prefixCls}-has-color`]: color && !presetColor,
    },
    className,
  );

  const tagStyle = {
    backgroundColor: color && !isPresetColor() ? color : undefined,
  };

  return (
    <span className={tagClassName} style={tagStyle}>
      {children}
    </span>
  );
};

export default Tag;
