import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsYoutube } from "react-icons/bs"
import Data from './footerData'
import Logo from "../Logo"

const Footer = () => {

    const links = Data.map(link => {
        return (
            <div key={link.id}>
                <p className="font-bold text-white">{link.title}</p>

                <ul className="mt-6 space-y-4 text-sm">

                    {
                        link.links.map((link, idx) => {
                            return (
                                <li key={idx}>
                                    <a
                                        href="#"
                                        className="transition hover:opacity-75"
                                    >
                                        {link}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    })

    const socialData = [
        {
            id: 1,
            url: 'https://facebook.com',
            accessibleText: 'facebook',
            logo: <BsFacebook className="w-6 h-6" />
        },
        {
            id: 2,
            url: 'https://instagram.com',
            accessibleText: 'instagram',
            logo: <BsInstagram className="w-6 h-6" />
        },
        {
            id: 3,
            url: 'https://twitter.com',
            accessibleText: 'twitter',
            logo: <BsTwitter className="w-6 h-6" />
        },
        {
            id: 4,
            url: 'https://github.com',
            accessibleText: 'github',
            logo: <BsGithub className="w-6 h-6" />
        },
        {
            id: 5,
            url: 'https://youtube.com',
            accessibleText: 'youtube',
            logo: <BsYoutube className="w-6 h-6" />
        },
    ]

    const social = socialData.map(link => {
        return (
            <li key={link.id}>
                <a
                    href={link.url}
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                >
                    {link.logo}
                </a>
            </li>
        )
    })

    let currYear = new Date().getFullYear()

    return (
        <footer className="mx-auto max-w-screen-xl space-y-8 px-4 pt-16 sm:px-6 lg:space-y-16 lg:px-8">

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
                    <Logo />

                    <p className="mt-4 max-w-xs text-gray-500 dark:text-gray-400">
                        Making the world a better place through constructing elegant hierarchies.
                    </p>

                    <ul className="mt-8 flex gap-6">
                        {social}
                    </ul>
                </div>

                <div
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
                >
                    {links}


                </div>
            </div>

            <p className="text-sm text-gray-500 text-center py-8">
                &copy; {currYear}. <span className="font-bold italic">Elsayed Kewan</span>. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer