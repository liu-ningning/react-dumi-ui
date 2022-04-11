import React from 'react';
import './index.css';

var Button = function Button(Props) {
  var children = Props.children,
    type = Props.type,
    size = Props.size,
    danger = Props.danger,
    disabled = Props.disabled;
  var className = 'dumi-btn'; // 按钮类型

  var typeArr = ['default', 'primary', 'ghost', 'dashed', 'link', 'text'];
  if (type && typeArr.includes(type)) className += ' dumi-btn-'.concat(type); // 按钮尺寸

  var sizeArr = ['large', 'small'];
  var sizeObj = {
    large: 'lg',
    small: 'sm',
  };
  if (size && sizeArr.includes(size)) className += ' dumi-btn-'.concat(sizeObj[size]); // 危险按钮

  if (danger) className += ' dumi-btn-dangerous';
  return /*#__PURE__*/ React.createElement(
    'button',
    {
      disabled: disabled,
      className: className,
    },
    /*#__PURE__*/ React.createElement('span', null, children),
  );
};

export default Button;
