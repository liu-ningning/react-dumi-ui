import React from 'react';
import classNames from 'classnames';
import './index.less';

interface DividerProps {
  type?: 'horizontal' | 'vertical';
  orientation?: 'left' | 'right' | 'center';
  orientationMargin?: string | number;
  className?: string;
  children?: React.ReactNode;
  dashed?: boolean;
  plain?: boolean;
}

const Divider = (Props: DividerProps) => {
  const {
    children,
    type = 'horizontal',
    orientation = 'center',
    orientationMargin,
    dashed,
    plain,
  } = Props;
  const prefixCls = 'dumi-divider';
  const className = prefixCls;
  const orientationPrefix = orientation.length > 0 ? `-${orientation}` : orientation;
  const hasChildren = !!children;
  const hasCustomMarginLeft = orientation === 'left' && orientationMargin != null;
  const hasCustomMarginRight = orientation === 'right' && orientationMargin != null;
  const classString = classNames(
    prefixCls,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-with-text`]: hasChildren,
      [`${prefixCls}-with-text${orientationPrefix}`]: hasChildren,
      [`${prefixCls}-dashed`]: !!dashed,
      [`${prefixCls}-plain`]: !!plain,
      [`${prefixCls}-no-default-orientation-margin-left`]: hasCustomMarginLeft,
      [`${prefixCls}-no-default-orientation-margin-right`]: hasCustomMarginRight,
    },
    className,
  );

  const innerStyle = {
    ...(hasCustomMarginLeft && { marginLeft: orientationMargin }),
    ...(hasCustomMarginRight && { marginRight: orientationMargin }),
  };

  return (
    <div className={classString}>
      {children && (
        <span className={`${prefixCls}-inner-text`} style={innerStyle}>
          {children}
        </span>
      )}
    </div>
  );
};

export default Divider;
