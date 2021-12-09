import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Contact from '..';

afterEach(cleanup);

const contact = { name: 'Edgardo Pina', email: 'ed@m.com', message: 'Hello' };

describe('Contact is rendering', () => {
   it('Contact renders', () => {
      render(<Contact />);
   });

   it('Contact matches snapshot', () => {
      const { asFragment } = render(<Contact />);
      expect(asFragment()).toMatchSnapshot();
   });

   it('Contact renders h1 title', () => {
      const { getByTestId } = render(<Contact />);
      expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
   });

   it('Contact submit button label', () => {
      const { getByTestId } = render(<Contact />);
      expect(getByTestId('buttontag')).toHaveTextContent('Submit');
   });
});
