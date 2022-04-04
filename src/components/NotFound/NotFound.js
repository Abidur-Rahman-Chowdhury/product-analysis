import React from 'react';
import notfound from '../../assets/image/notfound.png'

const NotFound = () => {
    return (
        <div className='max-w-7xl mx-auto flex justify-center items-center h-[60vh]'>
            <img src={notfound} className='w-[800px] h-[500px]' alt=""  />
        </div>
    );
};

export default NotFound;