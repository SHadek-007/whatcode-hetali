import React from 'react';
import footerLogo from '../../Assets/logo/hetali logo_final_29.7 1 (2).png';
import footerLogo2 from '../../Assets/logo/Frame 96.png';

const Footer = () => {
    return (
        <div className='bg-[#004A74]'>
            <div className='px-5 lg:px-40 py-10'>
                <div className='grid grid-cols-2 lg:grid-cols-5 text-white'>
                    <div className='col-span-2 '>
                        <img src={footerLogo} alt="" />
                    </div>
                    <div className='flex justify-end'>
                        <div>
                            <p className='mb-3'>Quick Links</p>
                            <small>
                                <p>Contact Us</p>
                                <p>Testimonial</p>
                                <p>Gallery</p>
                                <p>Site Map</p>
                            </small>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div>
                            <p className='mb-3'>Flats in Mumbai</p>
                            <small>
                                <p>1BHK Andheri West</p>
                                <p>2BHK Andheri West</p>
                                <p>3 BHK Andheri West</p>
                                <p>1BHK Goregaon East</p>
                                <p>2BHK Goregaon East</p>
                            </small>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div>
                            <p className='mb-3'>Projects in Mumbai</p>
                            <small>
                            <p>Ongoing</p>
                            <p>Upcoming</p>
                            <p>Completed</p>
                            <p>Hetali Blessings</p>
                            <p>Hetali Anuchhaya</p>
                            </small>
                        </div>
                    </div>
                </div>
                    <div className='flex justify-center mt-5 lg:mt-0'>
                        <img src={footerLogo2} alt="" />
                    </div>
                    <p className='text-center mt-5 text-white'><small>Copyright © 2022 Hetali Enterprises - All Rights Reserved.</small></p>
            </div>
        </div>
    );
};

export default Footer;