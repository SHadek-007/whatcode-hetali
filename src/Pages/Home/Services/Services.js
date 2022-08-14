import React from 'react';
import './Services.css';
import logo3 from '../../../Assets/logo/Logo divider (2).png';
import logo01 from '../../../Assets/logo/Vector.png';
import logo02 from '../../../Assets/logo/Vector (1).png';
import logo03 from '../../../Assets/logo/Vector (2).png';
import logo04 from '../../../Assets/logo/Vector (3).png';

const Services = () => {
    return (
        <div className='bg px-5 lg:px-40'>
            <p className='pt-10 pb-16 w-full lg:w-[850px] text-center mx-auto font-bold italic'>We endeavour to build homes which make it's residents happy and proud of their address. Residents are at heart of everything we do, we build homes to live in, not houses to stay in. </p>
            <div>
                <img src={logo3} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 my-10 '>
                <div className='bg-[#FAFAFA] rounded-lg shadow'>
                    <div className='flex justify-center items-center pt-7 pb-10'>
                        <img src={logo01} alt="" />
                    </div>
                    <p className='px-5 pb-7 text-justify'>Our track record has been impeccable with <b>project completion on time</b> and have surpassed expectations many a time, society members have positively received our redevelopment plans and encourage our <b>modern and urbane designs</b> to their neighbours. </p>
                </div>
                <div className='bg-[#FAFAFA] rounded-lg shadow'>
                    <div className='flex justify-center items-center pt-7 pb-10'>
                        <img src={logo02} alt="" />
                    </div>
                    <p className='px-5 pb-7 text-justify'>The Hetali Group is a redeveloper like no other with a <b>profound focus on quality</b> and <b>long term satisfaction of its residents.</b></p>
                </div>
                <div className='bg-[#FAFAFA] rounded-lg shadow'>
                    <div className='flex justify-center items-center pt-7 pb-10'>
                        <img src={logo03} alt="" />
                    </div>
                    <p className='px-5 pb-7 text-justify'>They just don't endeavour but build homes which make it's residents proud of their address <b>by putting home-owners at the heart and soul of everything</b> they do from start to finish and post completion.</p>
                </div>
                <div className='bg-[#FAFAFA] rounded-lg shadow'>
                    <div className='flex justify-center items-center pt-7 pb-10'>
                        <img src={logo04} alt="" />
                    </div>
                    <p className='px-5 pb-7 text-justify'>Hetali Group lives by the ethos of <b>building homes to live and not houses to stay in.</b> </p>
                </div>
            </div>
        </div>
    );
};

export default Services;