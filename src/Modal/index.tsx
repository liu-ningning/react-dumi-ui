import React from 'react';
import Dialog from 'rc-dialog';
import Button from '../Button';
import './index.less';

interface ModalProps {
  children?: string;
  // 宽度
  width?: string | number;
  // 对话框是否可见
  visible?: boolean;
  // 是否支持键盘 esc 关闭
  keyboard?: boolean;
  // 确定按钮 loading
  confirmLoading?: boolean;
  // 标题
  title?: React.ReactNode;
  // 是否显示右上角的关闭按钮
  closable?: boolean;
  // 是否显示遮层
  mask?: boolean;
  // 是否点击遮层关闭
  maskClosable?: boolean;
  // 底部内容
  footer?: React.ReactNode;
  // 确认按钮文字
  okText?: string;
  // 取消按钮文字
  cancelText?: string;
  // 点击确定回调
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  // 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Modal = (Props: ModalProps) => {
  const {
    children,
    visible,
    width = 520,
    title,
    closable,
    keyboard,
    mask,
    maskClosable,
    footer,
    okText,
    cancelText,
    onOk,
    onCancel,
  } = Props;

  const prefixCls = 'dumi-modal';

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => onCancel?.(e);

  const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => onOk?.(e);

  // default footer
  const defaultFooter: React.ReactNode[] = [
    <Button key="cancel" onClick={handleCancel}>
      {cancelText || '取 消'}
    </Button>,
    <Button key="ok" type="primary" onClick={handleOk}>
      {okText || '确 定'}
    </Button>,
  ];

  // deal footer value
  const newFooter: React.ReactNode[] = [];
  if (footer && Array.isArray(footer)) {
    footer.map((item: any) => {
      if (item.key) newFooter.push(item);
      return null;
    });
  }

  const renderFooter = footer && Array.isArray(footer) ? newFooter : footer;

  // close icon default style
  const closeIconToRender = (
    <span className={`${prefixCls}-close-x`} onClick={handleCancel}>
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        data-icon="close"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
      </svg>
    </span>
  );

  return (
    <Dialog
      title={title}
      prefixCls={prefixCls}
      mask={mask}
      footer={footer === undefined ? defaultFooter : renderFooter}
      maskClosable={maskClosable}
      visible={visible}
      width={width}
      keyboard={keyboard}
      onClose={(e: any) => handleCancel(e)}
      closable={closable}
      closeIcon={closeIconToRender}
    >
      {children}
    </Dialog>
  );
};

export default Modal;
