import React from 'react';
import './index.less';

interface SpaceProps {
  children?: string;
  size?: any;
  direction?: string;
  wrap?: boolean;
  align?: string;
}

const Space = (Props: SpaceProps) => {
  const { children, size, direction = 'horizontal', wrap = false, align } = Props;
  let className = 'dumi-space';

  // direction
  if (direction === 'vertical') {
    className += ' dumi-space-vertical';
  }

  // align
  if (align) {
    className += ` dumi-space-align-${align}`;
  }

  // size
  let gap = 8;
  if (size || Number(size) >= 0) {
    if (Object.prototype.toString.call(size).includes('String')) {
      const sizeObj: any = { large: 24, middle: 16, small: 8 };
      if (['large', 'middle', 'small'].includes(size)) gap = sizeObj[size];
    }
    if (Object.prototype.toString.call(size).includes('Number')) {
      gap = Number(size);
    }
  }
  const style: any = { gap: `${gap}px` };

  // wrap
  if (wrap && direction === 'horizontal') style.flexWrap = 'wrap';

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default Space;
