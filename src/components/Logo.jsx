'use client'
import { Typography, ThemeProvider } from '@material-tailwind/react'
import Image from 'next/image'
import logo from '../../public/logo.png'

const Logo = () => {
    return (
        <ThemeProvider>
            <Typography
                as="a"
                href="#"
                variant="h6"
                className='flex text-xl gap-3 items-center'
            >
                <Image
                    src={logo}
                    alt="logo"
                    width={35}
                    height={35}
                />
                <h3 className='relative text-white'>Ocean <div className='absolute -right-3 bottom-1 w-2 h-2 bg-[#0284C7] rounded-full'></div></h3>
            </Typography>
        </ThemeProvider>
    )
}

export default Logo