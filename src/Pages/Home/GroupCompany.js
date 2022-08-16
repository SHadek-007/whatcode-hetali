import React from 'react';
import logo8 from '../../Assets/logo/Logo divider.png';
import pic1 from '../../Assets/photo/image 3.png';
import pic2 from '../../Assets/photo/image 5.png';
import pic3 from '../../Assets/photo/image 9.png';
const GroupCompany = () => {
    return (
        <div className='px-5 lg:px-40 my-10'>
            <h1 className='special text-3xl font-medium text-center'>Group Companies</h1>
            <div className='flex justify-center my-10'>
                <img src={logo8} alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 '>
                <div className='mx-auto'>
                    <img src={pic1} alt="" />
                    <p className='text-2xl font-bold text-center'>Agriculture</p>
                </div>
                <div className='col-span-2'>
                    <img className='h-[310px] w-full lg:w-[450px] mx-auto' src={pic2} alt="" />
                    <p className='text-2xl font-bold text-center'>Fuel</p>
                </div>
                <div className='mx-auto'>
                    <img src={pic3} alt="" />
                    <p className='text-2xl font-bold text-center'>Foods</p>
                </div>
            </div>
        </div>
    );
};

export default GroupCompany;