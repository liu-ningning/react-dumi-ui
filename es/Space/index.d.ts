import './index.less';
interface SpaceProps {
  children?: string;
  size?: any;
  direction?: string;
  wrap?: boolean;
  align?: string;
}
declare const Space: (Props: SpaceProps) => JSX.Element;
export default Space;
