import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

const portrait = { name: 'portraits', description: 'Portraits of people in my life' };

afterEach(cleanup);

describe('Gallery is rendering', () => {
   it('Gallery renders', () => {
      render(<Gallery currentCategory={portrait} />);
   });

   it('Gallery matches snapshot', () => {
      const { asFragment } = render(<Gallery currentCategory={portrait} />);
      expect(asFragment()).toMatchSnapshot();
   });
   
   it('Gallery renders h1 title', () => {
      const { getByTestId } = render(<Gallery currentCategory={portrait} />)
      expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
    })
});
