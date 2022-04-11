import React from 'react';
import './index.less';

interface ButtonProps {
  children?: string;
  type?: string;
  size?: string;
  danger?: boolean;
  disabled?: boolean;
}

const Button = (Props: ButtonProps) => {
  const { children, type, size, danger, disabled } = Props;
  let className = 'dumi-btn';

  // 按钮类型
  const typeArr = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'];
  if (type && typeArr.includes(type)) className += ` dumi-btn-${type}`;

  // 按钮尺寸
  const sizeArr = ['large', 'small'];
  const sizeObj: any = { large: 'lg', small: 'sm' };
  if (size && sizeArr.includes(size)) className += ` dumi-btn-${sizeObj[size]}`;

  // 危险按钮
  if (danger) className += ` dumi-btn-dangerous`;

  return (
    <button disabled={disabled} className={className}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
