import React from 'react';
import { motion } from 'motion/react';
import banner1 from '../assets/images/banner-1.jpg'
import banner2 from '../assets/images/banner-2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1 flex justify-center">
                    <div >
                        <motion.img
                            animate={{ y: [0, 50, 0], }}
                            transition={{ duration: 5, repeat: Infinity }}
                            src={banner1}
                            className="max-w-sm w-64 h-48 object-cover rounded-t-3xl rounded-br-3xl border-t-4 border-l-4 border-blue-700  shadow-2xl" />
                        <motion.img
                            animate={{ x: [100, 50, 100], }}
                            transition={{ duration: 5, repeat: Infinity }}
                            src={banner2}
                            className="max-w-sm w-64 h-48 object-cover rounded-t-3xl rounded-br-3xl border-t-4 border-l-4 border-blue-700  shadow-2xl" />

                    </div>
                </div>
                <div className="flex-1">
                    {/* <motion.ul animate={{ x: 100 }} /> */}
                    <motion.h1
                        initial={{ x: -150 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-5xl font-bold">The <motion.span
                            animate={{ color: ['#4287f5', '#48f542'], }}
                            transition={{ duration: 2, repeat: Infinity }}
                        > Easiest </motion.span>
                        Way
                        to Get Your New Job </motion.h1>


                    <p className="py-6">
                        Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;