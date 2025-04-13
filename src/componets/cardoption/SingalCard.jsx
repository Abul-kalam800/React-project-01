import React from 'react';

const SingalCard = ({ card }) => {
    return (
        <div>
            <div className=''>
                <div className='bg-amber-100  mb-8 text-black rounded-2xl p-2 text-center'>
                    <div className='w-6/12 mx-auto'>
                        <img src={card.image} alt="clock" className='w-full rounded-2xl' />
                    </div>
                    <h2 className=' text-3xl mb-5'>{card.title}</h2>
                    <p>{card.description}</p>
                    <button className="btn btn-active btn-primary w-6/12 mx-auto mt-5">Buy now</button>
                </div>
            </div>

        </div>
    );
};

export default SingalCard;