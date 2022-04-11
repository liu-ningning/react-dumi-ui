import React from 'react';
import './index.css';

var Space = function Space(Props) {
  var children = Props.children,
    size = Props.size,
    _Props$direction = Props.direction,
    direction = _Props$direction === void 0 ? 'horizontal' : _Props$direction,
    _Props$wrap = Props.wrap,
    wrap = _Props$wrap === void 0 ? false : _Props$wrap,
    align = Props.align;
  var className = 'dumi-space'; // direction

  if (direction === 'vertical') {
    className += ' dumi-space-vertical';
  } // align

  if (align) {
    className += ' dumi-space-align-'.concat(align);
  } // size

  var gap = 8;

  if (size || Number(size) >= 0) {
    if (Object.prototype.toString.call(size).includes('String')) {
      var sizeObj = {
        large: 24,
        middle: 16,
        small: 8,
      };
      if (['large', 'middle', 'small'].includes(size)) gap = sizeObj[size];
    }

    if (Object.prototype.toString.call(size).includes('Number')) {
      gap = Number(size);
    }
  }

  var style = {
    gap: ''.concat(gap, 'px'),
  }; // wrap

  if (wrap && direction === 'horizontal') style.flexWrap = 'wrap';
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: className,
      style: style,
    },
    children,
  );
};

export default Space;
