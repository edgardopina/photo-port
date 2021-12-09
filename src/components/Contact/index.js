import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
   //*  Hook that'll manage the form data
   const [formState, setFormState] = useState({
      name: '',
      email: '',
      message: '',
   });

   const { name, email, message } = formState;

   //! hook to handle the error state
   const [errorMessage, setErrorMessage] = useState('');

   //! SYNC THE STATE OF THE COMPONENT 'formState' WITH THE USER INPUTS (eventListener in input fields)
   function handleChange(event) {
      if (event.target.name === 'email') {
         const isValid = validateEmail(event.target.value);
         if (!isValid) {
            setErrorMessage('Your email is invalid.');
         } else {
            setErrorMessage('');
         }
      } else {
         if (!event.target.value.length) {
            setErrorMessage(`${event.target.name} is required.`);
         } else {
            setErrorMessage('');
         }
      }

      //* We use the spread operator, ...formState, so we can retain the other key-value pairs in this object.
      //* Without the spread operator, the formState object would be overwritten to only contain the
      //* [event.target.name]: value key pair.
      //* The name property of target in the preceding expression actually refers to the name attribute of the
      //* form element. This attribute value matches the property names of formState(name, email, and message)
      //* and allows us to use[] to create dynamic property names.
      //! state to update with the user input if there is no error message
      if (!errorMessage) {
         setFormState({ ...formState, [event.target.name]: event.target.value });
      }
   }

   function handleSubmit(event) {
      event.preventDefault();
      console.log('formState', formState);
   }

   return (
      //! note that React uses:
      //! 'htmlfor' attribute in the <label> element INSTEAD OF 'for'
      //! 'className' attribute in the html elements INSTEAD OF 'class'
      <section>
         <h1 data-testid='h1tag'>Contact me</h1>
         <form id='contact-form' onSubmit={handleSubmit}>
            <div>
               <label htmlFor='name'>Name:</label>
               <input type='text' defaultValue={name} onBlur={handleChange} name='name' />
            </div>
            <div>
               <label htmlFor='email'>Email address:</label>
               <input type='email' defaultValue={email} onBlur={handleChange} name='email' />
            </div>
            <div>
               <label htmlFor='message'>Message:</label>
               <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
            </div>
            {errorMessage && (
               <div>
                  <p className='error-text'>{errorMessage}</p>
               </div>
            )}
            <button data-testid='buttontag' type='submit'>
               Submit
            </button>
         </form>
      </section>
   );
}

export default ContactForm;
