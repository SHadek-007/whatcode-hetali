import React from 'react';
import logo5 from '../../Assets/logo/Logo divider.png';
import responsibilityPic from '../../Assets/photo/sean-pollock-PhYq704ffdA-unsplash 1 (1).png';

const Responsibility = () => {
    return (
        <div className='bg-[#F5F7F8]'>
            <h1 className='uppercase special text-3xl text-center font-medium pt-10 mb-14'>Corporate Social Responsibility</h1>
            <div className='flex justify-center mb-8'>
                <img src={logo5} alt="" />
            </div>
            <div className='px-5 lg:px-40 pb-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-10'>
                    <div>
                        <div className='bg-[#F5F5F5] p-3 rounded-md shadow-md'>
                            <p className='text-2xl font-bold'>Education for the under-privileged</p>
                            <p className='text-xl text-[#474747] text-justify mt-3'>We believe that our future lies in the holistic educational foundation of the youth and we have nurtured that cause by providing the necessary books and monetary support to the under-privileged children of Mumbai & also at several villages in Gujarat. As the Trustees of the H A Desai Boarding School in Matunga, Mumbai, we have been providing living and hospitality services to the academically bright students from the weaker monetary sections of the society.</p>
                        </div>
                        <div className='px-3 py-4 shadow-md rounded-md mt-6'>
                            <p className='text-[#909090] text-2xl font-bold'>Support for Rural Farmers</p>
                        </div>
                        <div className='px-3 py-4 shadow-md rounded-md mt-6'>
                            <p className='text-[#909090] text-2xl font-bold'>Spiritual</p>
                        </div>
                    </div>
                    <div>
                        <img src={responsibilityPic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Responsibility;