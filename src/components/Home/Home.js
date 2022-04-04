import React from 'react';
import food from '../../assets/image/foodImage.jpg';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1  gap-y-2 md:grid-cols-2 h-[40vh] justify-center items-center">
        <div className='order-2 md:order-1'>
          <h1 className='text-6xl font-extrabold'>
            Taste The Best <span className='text-yellow-400 font-serif' >Food</span>
          </h1>
        </div>
        <div className=' mt-7 order-1 md:order-2' >
            <img src={food} className='w-80 md:max-w-md border-2 p-2 rounded-2xl mx-auto'  alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
