import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link as LinkS } from 'react-scroll'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image';
import Logo from '../public/logo.png'
import { motion } from 'framer-motion'
import Link from 'next/link'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <motion.nav
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className='z-50 bg-white w-full fixed top-0 shadow-lg'>
                <div className='w-full'>
                    <div className='flex items-center h-20 w-full'>
                        <div className='flex items-center mx-10 lg:mx-20 justify-between w-full'>

                            <div className='flex justify-center items-center flex-shrink-0'>
                                <Image
                                    src={Logo}
                                    alt="Picture of the author"
                                    width={75}
                                    height={70}
                                    className=''
                                />
                            </div>
                            <div className='hidden lg:block'>
                                <div className='flex items-baseline space-x-4 text-black'>
                                    <LinkS activeClass="active" to="Home" smooth="true" offset={-120} duration={500} isDynamic={true} spy={true}
                                        className='cursor-pointer px-3 py-2 font-medium text-lg hover:text-primary'>Home</LinkS>
                                    <LinkS activeClass="active" to="Services" smooth="true" offset={-120} duration={500} isDynamic={true} spy={true}
                                        className='cursor-pointer hover:text-primary px-3 py-2 font-medium text-lg'>Services</LinkS>
                                    <LinkS activeClass="active" to="Portfolio" smooth="true" offset={-80} duration={500} isDynamic={true} spy={true}
                                        className='cursor-pointer hover:text-primary px-3 py-2 font-medium text-lg'>Portfolio</LinkS>
                                    <LinkS activeClass="active" to="Contact" smooth="true" offset={-100} duration={500} isDynamic={true} spy={true}
                                        className='cursor-pointer  hover:text-primary px-3 py-2 font-medium text-lg'>Contact</LinkS>
                                </div>
                            </div>
                            <div className='justify-end lg:block text-white text-center font-medium hover:font-semibold rounded-full bg-gradient-to-br from-primary to-second hover:from-second hover:to-primary py-2 px-5 hover:transition-all hover:drop-shadow-xl'>
                            <Link href="https://wa.me/message/72XKQDUVNMBFG1" target="_blank" rel='noopener noreferrer'>
                                Whatsapp
                            </Link>
                            </div>
                            

                        </div>
                        <div className='flex mr-14 lg:hidden'>
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className='bg-primary inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue2 focus:outline-none focus:ring-white'
                                aria-controls="mobile-menu" aria-expanded="false">

                                {!isOpen ? (
                                    <AiOutlineMenu className='h-6 w-6' />
                                ) : (
                                    <AiOutlineClose className='h-6 w-6 justify-center items-center' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='transition ease-in duration-75 transform'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'>
                    {(ref) => (
                        <div className='lg:hidden' id="mobile-menu">
                            <div ref={ref} className=' flex flex-col justify-center text-center shadow-lg mx-4 mr-4 pt-4 pb-4 rounded-md'>
                                <LinkS to="Home" onClick={() => setIsOpen(!isOpen)} smooth="true" offset={-150} duration={500}
                                    className='cursor-pointer mx-4 px-3 py-2 text-md hover:bg-primary hover:text-white rounded-md'>Home</LinkS>
                                <LinkS to="Services" onClick={() => setIsOpen(!isOpen)} smooth="true" offset={-100} duration={500}
                                    className='cursor-pointer mx-4 px-3 py-2 text-md  hover:bg-primary hover:text-white rounded-md'>Services</LinkS>
                                <LinkS to="Portfolio" onClick={() => setIsOpen(!isOpen)} smooth="true" offset={-100} duration={500}
                                    className='cursor-pointer mx-4 px-3 py-2 text-md  hover:bg-primary hover:text-white rounded-md'>Portfolio</LinkS>
                                <LinkS to="Contact" smooth="true" onClick={() => setIsOpen(!isOpen)} offset={-100} duration={500}
                                    className='cursor-pointer mx-4 px-3 py-2 text-md  hover:bg-primary hover:text-white rounded-md'>Contact</LinkS>
                            </div>
                        </div>
                    )}
                </Transition>
            </motion.nav>
        </div>
    )
}

export default Navbar