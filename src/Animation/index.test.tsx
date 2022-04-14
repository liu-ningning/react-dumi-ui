import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Animation from './index';

describe('<Animation />', () => {
  it('render Animation with dumi', () => {
    const msg = 'dumi-button';

    render(<Animation>{msg}</Animation>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
