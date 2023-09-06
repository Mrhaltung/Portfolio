import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { RiFacebookCircleLine, RiGithubFill, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri';

export const data = [
  {
    icon: <RiGithubFill />,
    link: 'https://github.com/Mrhaltung',
  },
  {
    icon: <RiLinkedinLine />,
    link: 'https://www.linkedin.com/in/dipesh-chandekar-2409dc1999/',
  },
  {
    icon: <RiFacebookCircleLine />,
    link: '',
  },
  {
    icon: <RiInstagramLine />,
    link: '',
  }
]

const Connect = () => {

  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 mx-auto'>
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='h2 xl:mt-8'>
                {"Let's connect"}
              <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='mb-4 max-w-[500px] mx-auto lg:mx-0'>
              {"I'm"} thrilled that {"you've"} taken the time to explore my
              portfolio. Whether {"you're"} interested in collaborating
              on a project, discussing a potential opportunity, or
              simply want to chat about shared interests, {"I'd"} love to
              hear from you. Feel free to reach out.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='py-2 xl:py-6 flex flex-col gap-y-6 xl:gap-y-8 items-center xl:items-start'>
            <div className='flex-1 flex flex-col max-w-max gap-x-2 items-start'>
              <div className='flex-1 flex flex-row py-4 text-[18px] gap-x-2'>
                <div className='text-white/60'>Mobile No</div>
                <span className=''>-</span>
                <div>+91 951 852 8944</div>
              </div>
              <div className='flex-1 flex flex-row py-4 text-[18px] gap-x-2'>
                <div className='text-white/60'>Email</div>
                <span className=''>-</span>
                <div>dipeshchandekar99@gmail.com</div>
              </div>
              <div className='flex-1 flex flex-row py-4 gap-x-4 xl:gap-x-6'>
                {data.map((item, index) => {
                  return (
                    <div className='md:text-4xl text-2xl cursor-pointer' key={index}>
                      <a href={item.link}
                        target="_blank"
                        rel="noreferrer">
                        {item.icon}
                      </a>
                    </div>
                  )
                })}

              </div>
              <button
                className='btn rounded-full border 
                border-white/50 max-w-[170px] min-w-[150px] px-8 mt-3 transition-all duration-300 flex items-center justify-center 
                overflow-hidden hover:border-accent group'>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Resume</span>
                <span className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[15px]'>
                  <a href="https://drive.google.com/file/d/1Brq1AzNUn6keLUA-twMm_sTHyX12z7L_/view?usp=drive_link" target="_blank" rel="noreferrer">Link to Download</a>
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Connect;
