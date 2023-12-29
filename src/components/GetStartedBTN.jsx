'use client'
import { Button, ThemeProvider } from "@material-tailwind/react"
import { BsArrowRightShort } from "react-icons/bs"

const GetStartedBTN = ({ arrow }) => {
    return (
        <ThemeProvider>
            <Button className="bg-[#0284C7] font-semibold text-base sm:text-lg tracking-wide capitalize flex items-center gap-1">Get Started {arrow && <BsArrowRightShort className="text-3xl" />}</Button>
        </ThemeProvider>
    )
}

export default GetStartedBTN