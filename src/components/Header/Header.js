import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='h-50 md:h-40 flex justify-center items-center'>
            <ul className='flex flex-col md:flex-row gap-5 font-semibold text-xl font-mono'>
                <CustomLink className='border-b-2 text-center border-gray-300 px-3' to='/home'>HOME</CustomLink>
                <CustomLink className='border-b-2 text-center  border-gray-300 px-3' to='/review'>REVIEWS</CustomLink>
                <CustomLink className='border-b-2 text-center  border-gray-300 px-3' to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink className='border-b-2 text-center  border-gray-300 px-3' to='/blogs'>BLOGS</CustomLink>
                <CustomLink className='border-b-2 text-center  border-gray-300 px-3' to='/about'>ABOUT</CustomLink>
            </ul>
        </nav>
    );
};

export default Header;