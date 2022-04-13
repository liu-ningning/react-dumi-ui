import React from 'react';
import './index.less';

interface ButtonProps {
  children?: string;
  type?: string;
  size?: string;
  danger?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button = (Props: ButtonProps) => {
  const { children, type, size, danger, disabled, onClick } = Props;
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

  // 点击事件
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  };

  return (
    <button disabled={disabled} className={className} onClick={handleClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
