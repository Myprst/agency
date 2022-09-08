import React, { useState, useRef } from 'react'
import { BsFillPhoneFill } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jezsdv5', 'template_y2mxteh', form.current, 'HR51bxgCPaV5puZPz')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id="Contact" className='flex flex-row sm:flex-col mm:flex-col justify-between p-8 sm:p-1 h-auto bg-primary bg-opacity-10 m-8 sm:m-2 rounded-lg'>
            <div className=' sm:w-full space-y-12 sm:text-center'>
                <h2 className="mb-4 text-4xl  font-bold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p classNameName='m-2'>
                </p>
                <div className='flex space-x-4 items-center sm:justify-center mm:justify-center'>
                    <BsFillPhoneFill
                        size={50}
                        className='text-primary'
                    />
                    <p> 06.04.56.00.67</p>
                </div>
                <div className='flex space-x-4 items-center  sm:justify-center mm:justify-center'>
                    <IoMdMail
                        size={50}
                        className='text-primary'
                    />
                    <p> moroccweb@gmail.com</p>
                </div>
            </div>
            <div className="w-full lg:w-2/5">
                <div className=" scale-90 bg-primary bg-opacity-25 rounded-lg p-4">
                    <form action="#" className="space-y-4" ref={form} onSubmit={sendEmail}>
                        <div>
                            <label htmlFor="name" classNameName="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Your Full Name</label>
                            <input type="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Full Name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button type="submit" className="py-3 px-5 w-1/3 ml-3 flex justify-center items-center font-medium hover:font-semibold rounded-lg bg-gradient-to-br from-primary to-second hover:from-second hover:to-primary h-16 hover:transition-all hover:drop-shadow-xl ">
                                Send
                            </button>
                            <span className='text-lg ml-12 flex justify-end '>{done && "Thanks for contacting"}</span>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact