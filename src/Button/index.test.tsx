import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

describe('<Button />', () => {
  it('render Button with dumi', () => {
    const msg = 'dumi-button';

    render(<Button>{msg}</Button>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
