import React from 'react';

const Reviews = (props) => {
    const { name, image, comment, ratings } = props.review;
    console.log( name, image, comment, ratings );
    return (
        <div className='bg-cyan-400 flex flex-col justify-center items-center rounded-lg shadow-2xl max-w-[290px] max-h-[350px] pb-4'>
            <img src={image} className="w-36 h-36 rounded-full mt-4" alt="" />
            <h4 className='text-xl font-bold mt-2 text-white'>{name}</h4>
            <p className='text-xl text-center mt-2 text-white'>{comment}</p>
            <p className='mt-4'><small className='text-xl text-center font-bold text-white'>Ratings: { ratings}</small></p>
            
           
        </div>
    );
};

export default Reviews;