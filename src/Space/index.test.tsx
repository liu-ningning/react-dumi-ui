import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Space from './index';

describe('<Space />', () => {
  it('render Space with dumi', () => {
    const msg = 'dumi';

    render(<Space>{msg}</Space>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
