import React from 'react';
import SingalCard from './SingalCard';
 const cardData = [
    {
      "id": 1,
      "title": "Vintage Wall Clock",
      "clock": "Analog",
      "image":"https://i.ibb.co/wZtTmpzg/img1.jpg",
      "description": "A classic analog wall clock with a wooden frame, perfect for traditional interiors."
    },
    {
      "id": 2,
      "title": "Smart Digital Clock",
      "clock": "Digital",
      "image":"https://i.ibb.co/vCVbVYbQ/img2.jpg",
      "description": "A modern digital clock with smart features like voice control, weather updates, and alarms."
    },
    {
      "id": 3,
      "title": "Desk Flip Clock",
      "clock": "Mechanical Flip",
      "image":"https://i.ibb.co/fG9ZqNG1/img3.jpg",
      "description": "A retro mechanical flip clock that displays time with flipping number panels. Ideal for desks and workspaces."
    }
  ]
   
  const cardlinks = cardData.map((card)=><SingalCard key={card.id} card={card}></SingalCard>)
const Cardoption = () => {
    return (
        <div className='mx-8'>
            <h2 className='text-4xl my-16 text-center font-bold'>Our Popular products</h2>
            <div className='grid lg:grid-cols-3 justify-center gap-20 md:grid-cols-1'>

            {
                cardlinks 
            }
            </div>
        </div>
    );
};

export default Cardoption;