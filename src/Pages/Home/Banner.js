import React from 'react';
import logo2 from '../../Assets/logo/Logo divider.png';
import banner from '../../Assets/photo/happy-parents-laughing-together-with-daughter 2.png';

const Banner = () => {
    return (
        <div>
            <h1 className='uppercase text-center special text-2xl font-medium mt-7'>About Us</h1>
            <div className='flex justify-center mt-12 mb-5'>
                <img src={logo2} alt="" />
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;