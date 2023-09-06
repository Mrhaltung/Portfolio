import { RxArrowTopRight, RxDesktop, RxPencil2, RxReader, RxRocket } from 'react-icons/rx';
import { FiDatabase} from 'react-icons/fi';
// data
export const serviceData = [
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Skilled in creating visually appealing and user-friendly interfaces for web applications.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'My expertise includes deploying web applications to various hosting environments.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'The software I develop addrees to copyright and intellectual property laws.',
  },
  {
    icon: <FiDatabase />,
    title: 'Database',
    description: 'My proficiency extends to designing and managing databases for web applications',
  },
  {
    icon: <RxRocket />,
    title: 'DevOps',
    description: 'Continuous integration and continuous deployment (CI/CD) pipelines.',
  },
];

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6
            sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350pc] leading-normal'>{item.description}</p>
              </div>
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default ServiceSlider;
