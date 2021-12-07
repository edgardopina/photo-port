//! This App.js file is the center of the application.
//! Think of App.js as THE ROOT COMPONENT or THE WRAPPER COMPONENT that houses all of the other components.
//* To effect any change on the application, we need to either modify this file or add components inside it.
//* React components follow the PascalCase naming convention. Knowing this will help you quickly identify
//* whether a function is a component or just a regular function.

//* we need to import React in every component file
import React, { useState } from 'react'; //* import React and React's state handler

import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

//* because we are using webpack (in the background) and React, we can add HTML to Javascript without a string
function App() {
   //* initialize the category state with useState without setter (for future use)
   const [categories] = useState([
      {
         name: 'commercial',
         description: 'Photos of grocery stores, food trucks, and other commercial projects',
      },
      {
         name: 'portraits',
         description: 'Portraits of people in my life',
      },
      {
         name: 'food',
         description: 'Delicious delicacies',
      },
      {
         name: 'landscape',
         description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
      },
   ]);

   //! define React Hook
   //* useState - always returns an array that can be de-structured as follows
   //* currentCategory - is the variable that will manage the state
   //* setCurrentCategory - the state variable (currentCategory) setter
   //* useState(par) : par - sets 'the initial value' of the state
   const [currentCategory, setCurrentCategory] = useState(categories[0]);

   return (
      <div>
         <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
         <main>
            <div>
               <ContactForm></ContactForm>
               <Gallery currentCategory={currentCategory}></Gallery>
               <About></About>
            </div>
         </main>
      </div>
   );
}

export default App;
