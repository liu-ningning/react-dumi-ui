import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Tag from './index';

describe('<Tag />', () => {
  it('render Tag with dumi', () => {
    const msg = 'dumi';

    render(<Tag>{msg}</Tag>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
