import React from 'react';
import logo4 from '../../Assets/logo/Logo divider.png'
import missionPic from '../../Assets/photo/sean-pollock-PhYq704ffdA-unsplash 1.png';

const Mission = () => {
    return (
        <div>
            <h1 className='text-center special text-3xl mt-10 font-medium'>MISSION</h1>
            <div className='flex justify-center mt-12'>
                <img src={logo4} alt="" />
            </div>
            <div className='px-5 lg:px-40 mt-10 mb-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-10'>
                    <div>
                        <img src={missionPic} alt="" />
                    </div>
                    <div>
                        <div className='bg-[#F5F5F5] p-3 rounded-md shadow-md'>
                            <p className='text-2xl font-bold'>Personalised</p>
                            <p className='text-xl text-[#474747] text-justify mt-2'>Our core idealogy is to provide personalised homes to meet the very specific needs of residents.</p>
                        </div>
                        <div className='px-3 py-4 shadow-md rounded-md mt-4'>
                            <p className='text-[#909090] text-2xl font-bold'>Committed</p>
                        </div>
                        <div className='px-3 py-4 shadow-md rounded-md mt-4'>
                            <p className='text-[#909090] text-2xl font-bold'>Quality & Service Oriented</p>
                        </div>
                        <div className='px-3 py-4 shadow-md rounded-md mt-4'>
                            <p className='text-[#909090] text-2xl font-bold'>Timely </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;