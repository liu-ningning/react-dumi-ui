import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './index';

describe('<Modal />', () => {
  it('render Modal with dumi', () => {
    const msg = 'Modal-dumi';

    render(<Modal visible={false} title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
