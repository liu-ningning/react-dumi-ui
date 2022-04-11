import React from 'react';

interface DemoProps {
  children?: string;
}
const Demo = (Props: DemoProps) => {
  const { children } = Props;

  return <h2>{children}</h2>;
};
export default Demo;
