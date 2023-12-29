"use client"
import React from 'react'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from '../Logo';

const NavlistData = [
    {
        id: 1,
        url: '#features',
        title: 'Features'
    },
    {
        id: 2,
        url: '#pricing',
        title: 'Pricing'
    },
    {
        id: 3,
        url: '#testimonials',
        title: 'Testimonials'
    },
    {
        id: 4,
        url: '#contact',
        title: 'Contact'
    },
]


function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {
                NavlistData.map(list => {
                    return (
                        <Typography
                            key={list.id}
                            as="li"
                            variant="small"
                            color="white"
                            className="p-1 font-bold"
                        >
                            <a href={list.url} className="flex items-center hover:text-blue-500 transition-colors">
                                {list.title}
                            </a>
                        </Typography>
                    )
                })
            }
        </ul>
    );
}

const Nav = () => {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="max-w-full shadow-none bg-transparent border-none -backdrop-saturate-50 rounded-none backdrop-blur-md fixed top-0 left-0 py-5 z-50">
            <div className="flex items-center justify-between">
                <Logo />
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}

export default Nav