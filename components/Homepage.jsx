import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Agency from '../public/agency.png'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const Homepage = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Design", "Developement", "Marketing"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <div id="Home">
            <div className='flex lg:flex-row flex-col overflow-hidden lg:mx-20 py-4 mt-16 z-0'>
                <motion.div
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className='relative flex basis-1/2 text-black z-20 justify-center flex-col px-1'>
                    <div className='flex md:justify-center sm:justify-center font-semibold text-sm mb-5 mt-3'>
                        The Ultimate Web Services
                    </div>
                    <div className='flex md:justify-center sm:text-center sm:justify-center font-semibold text-3xl lg:text-4xl mb-4'>
                        We Are a Web
                    </div>
                    <div className='flex justify-center lg:justify-start text-center items-center z-50 top-0 mb-3 '>
                        <p className='font-semibold text-3xl  lg:text-4xl text-primary'>
                            {text}
                        </p>
                        <div className='font-semibold text-3xl ml-4  lg:text-4xl'>
                            Agency
                        </div>
                    </div>
                    <div className='flex sm:justify-center md:justify-center sm:text-center md:text-center'>
                        <p className='max-w-lg mb-10  sm:px-4'>
                            Great work doesnt just  happen; its born out of inspiration, trust, and collaboration. Were renown for our readiness to explore; to break; to experiment and then put it all back together.
                            Doing this sets the bar for a direction that is blindingly crystal clear and most importantly, applicable to you.
                        </p>
                    </div>
                    <div className='flex sm:justify-center md:justify-center'>
                        <Link activeClass="active" to="Contact" smooth="true" offset={-100} duration={500} isDynamic={true} spy={true}
                            className='text-white cursor-pointer flex justify-center items-center font-medium hover:font-semibold rounded-lg bg-gradient-to-br from-primary to-second hover:from-second hover:to-primary h-16 w-1/3 hover:transition-all hover:drop-shadow-xl'>
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className='flex basis-1/2 text-black  overflow-hidden z-20 justify-center  flex-col px-1'>
                    <Image
                        src={Agency}
                        alt="Picture of the author"
                        layout='responsive'
                        className='rounded-xl scale-90'
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Homepage