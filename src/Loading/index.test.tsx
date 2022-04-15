import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './index';

describe('<Loading />', () => {
  it('render Loading with dumi', () => {
    const msg = 'dumi';

    render(<Loading tip={msg}></Loading>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
