// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Camera Shop',
          path: '/camera-shop.png',
          link: 'https://github.com/Mrhaltung/Online-Camera-Shop',
        },
        {
          title: 'Taskr Social App',
          path: '/taskr.png',
          link: 'https://github.com/Mrhaltung/Taskr',
        },
        {
          title: 'Real EState Business',
          path: '/real-estate.png',
          link: 'https://github.com/Mrhaltung/Real-Estate-Website',
        },
        {
          title: 'Restaurant App',
          path: '/restaurant.png',
          link: 'https://github.com/Mrhaltung/Restaurant-Project',
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'title',
    //       path: '/thumb4.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb1.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb2.jpg',
    //     },
    //     {
    //       title: 'title',
    //       path: '/thumb3.jpg',
    //     },
    //   ],
    // },
  ],
};

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div className='relative rounded-lg overflow-hidden flex items-center justify-center group 
                    bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] xl:h-[200px]' key={index}>
                    <div className='flex items-center justify-center relative overflow-hidden'>
                      <Image src={image.path} width={500} height={300} alt='' />
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex flex-col items-center justify-center text-[15px] tracking-[0.2rem]'>
                          <div className='delay-100'>{image.title}</div>
                          <button
                            className='text-[12px] translate-y-[500%] group-hover:translate-y-0 transition-all 
                            duration-300 delay-200 border rounded-lg py-1 px-2'>
                            <a href={image.link}
                              target="_blank"
                              rel="noreferrer">Live</a>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default WorkSlider;
