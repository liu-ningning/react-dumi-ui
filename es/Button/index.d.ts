import './index.less';
interface ButtonProps {
  children?: string;
  type?: string;
  size?: string;
  danger?: boolean;
  disabled?: boolean;
}
declare const Button: (Props: ButtonProps) => JSX.Element;
export default Button;
