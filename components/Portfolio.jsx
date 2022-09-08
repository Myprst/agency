import React from 'react'
import Image from 'next/image';
import Medical from '../public/Medical.png'
import Land from '../public/land.png'
import Real from '../public/real.png'
import Reals from '../public/reals.png'
import Garden from '../public/garden.png'
import Gardenm from '../public/gardenm.png'
import { MdMedicalServices, MdOutlineRealEstateAgent, MdBusinessCenter } from 'react-icons/md'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Portfolio = () => {
    return (
        <div id="Portfolio" className=' my-16'>
            <h1 className='text-center font-bold text-3xl mb-6'>
                For All <span className='text-primary'>Businesses </span>
            </h1>
            <Swiper
             modules={[Navigation, Pagination, Scrollbar, A11y]}
             spaceBetween={50}
             slidesPerView={1}
             navigation
             pagination={{ clickable: true }}
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
             className=''
            >
            <SwiperSlide >
            <div className='relative h-96 flex group lg:mx-44 mx-8'>
                <div className='bg-auto bg-center group-hover:z-20 absolute flex group-hover:scale-105'>
                    <Image
                        src={Land}
                        alt="Picture of the author"
                        height={384}
                        layout='fixed'
                        className=' rounded-t-lg'
                    />
                </div>
                <div className='bg-auto bg-center scale-90 group-hover:scale-75 flex justify-center z-10 w-full -mt-[22px] '>
                    <Image
                        src={Medical}
                        alt="Picture of the author"
                        className='rounded-t-lg'
                    />
                </div>
                <div className=' sm:hidden mm:hidden bg-gradient-to-bl from-second to-primary rounded-t-lg bg-cover bg-center group-hover:z-20 absolute flex items-center flex-col h-96 right-0 w-1/3 md:w-2/5 group-hover:scale-105'>
                    <MdMedicalServices className='h-20 w-20 text-primary  group-hover:text-white group-hover:scale-110 p-3 basis-1/4' />
                    <h1 className='font-bold text-xl mt-8 text-black group-hover:text-3xl group-hover:text-white basis-1/4'>Beauty & Health</h1>
                    <p className='text-center  group-hover:text-white text-black basis-1/2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi est sit aliquid optio non quia,
                        a officiis qui distinctio vitae impedit culpa quaerat enim consequuntur
                    </p>
                </div>

            </div>
            </SwiperSlide>
            <SwiperSlide> 
            <div className='relative h-96 flex group lg:mx-44 mx-8 '>
                <div className='bg-auto  bg-center group-hover:z-20 absolute right-0 group-hover:scale-105 '>
                    <Image
                        src={Reals}
                        alt="Picture of the author"
                        height={384}
                        layout='fixed'
                        className=' rounded-t-lg shadow-lg'
                    />
                </div>
                <div className='bg-auto bg-center brightness-50 scale-90 group-hover:scale-75 flex justify-center z-10 w-full -mt-[22px] '>
                    <Image
                        src={Real}
                        alt="Picture of the author"
                        className='rounded-t-lg '
                    />
                </div>
                <div className=' sm:hidden mm:hidden bg-gradient-to-bl from-second to-primary rounded-t-lg bg-cover bg-center group-hover:z-20 absolute flex items-center flex-col h-96 left-0 w-1/3 md:w-2/5 group-hover:scale-105'>
                    <MdOutlineRealEstateAgent className='h-20 w-20 text-primary  group-hover:text-white group-hover:scale-110 basis-1/3' />
                    <h1 className='font-bold text-xl mt-8 text-black group-hover:text-3xl group-hover:text-white'>Real Estate</h1>
                    <p className='text-center  group-hover:text-white text-black mt-8 '>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi est sit aliquid optio non quia,
                        a officiis qui distinctio vitae impedit culpa quaerat enim consequuntur
                    </p>
                </div>

            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='relative h-96 flex group lg:mx-44 mx-8'>
                <div className='bg-auto bg-center group-hover:z-20 absolute flex group-hover:scale-105 border border-black rounded-t-lg'>
                    <Image
                        src={Gardenm}
                        alt="Picture of the author"
                        height={384}
                        width={231}
                        layout='fixed'
                        className=' rounded-t-lg '
                    />
                </div>
                <div className='bg-auto bg-center brightness-50 scale-90 group-hover:scale-75 flex justify-center z-10 w-full -mt-[22px]'>
                    <Image
                        src={Garden}
                        alt="Picture of the author"
                        height={454}
                        width={824}
                        className='rounded-t-lg'
                    />
                </div>
                <div className=' sm:hidden mm:hidden bg-gradient-to-bl from-second to-primary rounded-t-lg bg-cover bg-center group-hover:z-20 absolute flex items-center flex-col h-96 right-0 w-1/3 md:w-2/5 group-hover:scale-105'>
                    <MdBusinessCenter className='h-20 w-20 text-primary  group-hover:text-white group-hover:scale-110 basis-1/3' />
                    <h1 className='font-bold text-xl mt-8 text-black group-hover:text-3xl group-hover:text-white'>Businesses</h1>
                    <p className='text-center  group-hover:text-white text-black mt-8 '>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi est sit aliquid optio non quia,
                        a officiis qui distinctio vitae impedit culpa quaerat enim consequuntur
                    </p>
                </div>
            </div>
            </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio