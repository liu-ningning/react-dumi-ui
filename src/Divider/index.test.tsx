import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Divider from './index';

describe('<Divider />', () => {
  it('render Divider with dumi', () => {
    const msg = 'dumi';

    render(<Divider>{msg}</Divider>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
