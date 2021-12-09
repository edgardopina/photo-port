//! import React and useEffect to re-render the component
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
   const {
      //
      categories = [],
      setCurrentCategory,
      currentCategory,
      contactSelected,
      setContactSelected,
   } = props;

   //* useEffect 1st parameter - callback function (arrow function)
   //* useEffect 2nd parameter - component to re-render on changes of the value of the state (currentCategory.name)
   useEffect(() => {
      document.title = capitalizeFirstLetter(currentCategory.name);
   }, [currentCategory]);

   return (
      <header className='flex-row px-1'>
         <h2>
            <a data-testid='link' href='/'>
               <span role='img' aria-label='camera'>
                  📸
               </span>
               Oh Snap!
            </a>
         </h2>
         <nav>
            <ul className='flex-row'>
               <li className='mx-2'>
                  <a data-testid='about' href='#About' onClick={() => setContactSelected(false)}>
                     About me
                  </a>
               </li>
               <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                  <span onClick={() => setContactSelected(true)}>Contact</span>
               </li>
               {/* this line of code: ${currentCategory.name === category.name && 'navActive'}} */}
               {/* compares if(currentCategory.name === category.name) and IF it is true returns 'navActive' as part of className */}
               {categories.map((category) => (
                  // <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                  <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                     <span
                        onClick={() => {
                           setCurrentCategory(category);
                           setContactSelected(false);
                        }}
                     >
                        {capitalizeFirstLetter(category.name)}
                     </span>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
}

export default Nav;
