import React from 'react'
import { BiRightArrowCircle } from 'react-icons/bi'
import Buttons from './Buttons'
import Img from '../../../public/Hero-image.svg'
import Image from 'next/image'
import GradientText from '../GradientText'


const Header = () => {
    return (
        <div className='hero relative flex flex-col items-center pt-16 text-center'>
            <div className='flex items-center mb-5 text-xs px-3 py-1 border-blue-gray-700 rounded-full border cursor-pointer gap-1 hover:border-[#0369a1] hover:bg-blue-gray-800'>
                <h4>New Features Is Now Available.</h4>
                <BiRightArrowCircle />
            </div>
            <GradientText text='A CRM dashboard for engineering teams' />
            <p className=' md:max-w-3xl text-lg mb-7'> Boost engineering team’s productivity with Ocean CRM dashboard that streamlines project management, collaboration, and data-driven decision-making.</p>
            <Buttons />
            <Image src={Img} alt="image" className='mt-14' />
        </div>
    )
}

export default Header