import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [{ name: 'portraits', description: 'Portraits of peoplein my life' }];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
   it('Nav renders', () => {
      render(
         <Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
         />
      );
   });

   it('Nav matches snapshot', () => {
      const { asFragment } = render(
         <Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
         />
      );
      expect(asFragment()).toMatchSnapshot();
   });
});

describe('Emoji is visible', () => {
   it('Nav inserts Emoji into the h2', () => {
      const { getByLabelText } = render(
         <Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
         />
      );
      expect(getByLabelText('camera')).toHaveTextContent('📸');
   });
});

describe('Links are visible', () => {
   it('Inserts text into links', () => {
      const { getByTestId } = render(
         <Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
         />
      );
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
   });
});
