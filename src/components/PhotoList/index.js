import React, { useState } from 'react';
import Modal from '../Modal';

function PhotoList({ category }) {
   const [photos] = useState([
      {
         name: 'Grocery aisle',
         category: 'commercial',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Grocery booth',
         category: 'commercial',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Building exterior',
         category: 'commercial',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Restaurant table',
         category: 'commercial',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Cafe interior',
         category: 'commercial',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Cat green eyes',
         category: 'portraits',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Green parrot',
         category: 'portraits',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Yellow macaw',
         category: 'portraits',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Pug smile',
         category: 'portraits',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Pancakes',
         category: 'food',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Burrito',
         category: 'food',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Scallop pasta',
         category: 'food',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Burger',
         category: 'food',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Fruit bowl',
         category: 'food',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Green river',
         category: 'landscape',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Docks',
         category: 'landscape',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Panoramic village by sea',
         category: 'landscape',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Domestic landscape',
         category: 'landscape',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
         name: 'Park bench',
         category: 'landscape',
         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
   ]);

   //! React hook for modal rendering
   const [currentPhoto, setCurrentPhoto] = useState();

   //! React hook to manage if Modal is open or not (INSTEAD OF CHECKING FOR onClick event)
   const [isModalOpen, setIsModalOpen] = useState(false);

   //* photos from current category only
   const currentPhotos = photos.filter((photo) => photo.category === category);

   const toggleModal = (image, i) => {
      setCurrentPhoto({ ...image, index: i }); //* passes image properties and index i
      setIsModalOpen(!isModalOpen); //! toggle isModalOpen
   };

   //* alt - used for accessibility user-assistance devices, such as screen readers, so the image's name was assigned.
   //* key - also assigned with the image's name. Its value must be a unique string. The absence of this unique key
   //*       value will cause an error message. Refer to the React documentation on lists and keys.
   //* src - was assigned the require expression. Though this isn't a common practice, it certainly has its use cases! We were also able to
   //*       take advantage of the incremental naming of the images by using i.
   //! default - THIS PROPERTY IS NEEDED TO INDICATE WHERE THE IMAGE WAS SAVED. To render the image, the default property MUST BE invoked.
   return (
      <div>
         {/* Modal component render ONLY IF isModelOpen === true (need to check for onClick event on the image) */}
         {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} />}
         <div className='flex-row'>
            {currentPhotos.map((image, i) => (
               <img
                  src={require(`../../assets/small/${category}/${i}.jpg`).default}
                  alt={image.name}
                  className='img-thumbnail mx-1'
                  onClick={() => toggleModal(image, i)}
                  key={image.name}
               />
            ))}
         </div>
      </div>
   );
}

export default PhotoList;
