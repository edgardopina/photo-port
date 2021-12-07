import React from 'react';

function ContactForm() {
   //! note that React uses:
   //! 'htmlfor' attribute in the <label> element INSTEAD OF 'for'
   //! 'className' attribute in the html elements INSTEAD OF 'class'

   return (
      <section>
         <h1>Contact me</h1>
         <form id='contact-form'>
            <div>
               <label htmlFor='name'>Name:</label>
               <input type='text' name='name' />
            </div>
            <div>
               <label htmlFor='email'>Email address:</label>
               <input type='email' name='email' />
            </div>
            <div>
               <label htmlFor='message'>Message:</label>
               <textarea name='name' rows='5' />
            </div>
            <button type='submit'>Submit</button>
         </form>
      </section>
   );
}

export default ContactForm;
