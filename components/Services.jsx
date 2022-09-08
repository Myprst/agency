import React from 'react'
import { MdDeveloperMode, MdSupportAgent } from 'react-icons/md'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { TbSocial } from 'react-icons/tb'
import { motion } from 'framer-motion'
import { useState } from 'react'


const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleOnNext = () => { setCurrentIndex(currentIndex + 1) }
    const handleOnPrev = () => { }


    return (
        <div id="Services">
            <div className='mt-10'>
                <div className=' m-10 text-4xl font-bold text-center drop-shadow-lg'>
                    We Have <p className=' inline-flex animate-[bounce_2s_linear_infinite] text-primary '>Everything </p> You Need
                </div>
                <div className=' grid gap-4 m-4 sm:flex-col md:grid-cols-2 lg:grid-cols-4 '>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className=' shadow-xl p-4 flex items-center flex-col group text-black hover:scale-105 bg-gradient-to-bl hover:from-second hover:to-primary rounded-2xl h-96  w-full '>
                        <MdDeveloperMode className=' basis-1/4 h-20 w-20 text-center text-primary group-hover:text-white group-hover:scale-110' />
                        <h1
                            className='basis-1/4 text-center font-bold text-xl text-black group-hover:text-2xl group-hover:text-white flex items-center'>
                            Web Developement
                        </h1>
                        <p className='basis-2/4 text-center  group-hover:text-white text-black '>

                            Create and Maintain websites.
                            <ul>With the best Performance and Capacity, which are measures of a website&apos;s speed and
                                how much traffic the site can handle.</ul>
                        </p>
                    </motion.div>

                    <div className=' shadow-xl p-4  flex items-center flex-col group text-black hover:text-white hover:scale-105 bg-gradient-to-bl hover:from-second hover:to-primary rounded-2xl h-96  w-full '>
                        <AiOutlineAntDesign className='basis-1/4 h-20 w-20 text-primary  group-hover:text-white group-hover:scale-110' />
                        <h1 className='basis-1/4 font-bold text-xl text-black group-hover:text-3xl group-hover:text-white flex items-center'>Web Design</h1>
                        <p className='basis-2/4 text-center  group-hover:text-white text-black '>
                            Design and Redesign websites
                            <ul>Websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.  </ul>
                        </p>
                    </div>
                    <div className='shadow-xl p-4 flex items-center flex-col group text-black hover:text-white hover:scale-105 bg-gradient-to-bl hover:from-second hover:to-primary rounded-2xl h-96  w-full '>
                        <TbSocial className='basis-1/4 h-20 w-20  text-primary  group-hover:text-white group-hover:scale-110' />
                        <h1 className='basis-1/4 font-bold text-xl  text-black group-hover:text-3xl group-hover:text-white flex items-center'>Online Marketing</h1>
                        <p className='basis-2/4 text-center  group-hover:text-white text-black'>
                            Measure the impact of any given channel, as well as how visitors acquired through different channels interact with a website or landing page experience.
                            further analysis can be done to determine which channels are most effective at acquiring valuable customers.
                        </p>
                    </div>
                    <div className=' shadow-xl p-4 flex items-center flex-col group text-black hover:text-white hover:scale-105 bg-gradient-to-bl hover:from-second hover:to-primary rounded-2xl h-96  w-full '>
                        <MdSupportAgent className='basis-1/4 h-20 w-20  text-primary  group-hover:text-white group-hover:scale-110' />
                        <h1 className='basis-1/4 font-bold text-xl text-black group-hover:text-3xl group-hover:text-white flex items-center'>Support</h1>
                        <p className='basis-2/4 text-center  group-hover:text-white text-black'>
                            With you until you get what you need      
                            <ul>
                            valuing customers time, having a pleasant attitude, and providing knowledgeable ...
                            </ul>
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services