import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from '..';

//* remove components from the DOM to prevent memory leaking, as well as variable or data
//* collisions between tests that could corrupt test results
afterEach(cleanup);

//* declare the component we're testing
describe('About component', () => {
   //* Test Cases
   // test('renders', () => {}) - this format is equivalent
   it('About renders', () => {
      render(<About />);
   });

   it('Matches snapshot DOM mode structure', () => {
      const { asFragment } = render(<About />);
      expect(asFragment()).toMatchSnapshot();
   });
});
