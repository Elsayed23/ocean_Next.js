'use client'
import { Button, ThemeProvider } from "@material-tailwind/react";
import GetStartedBTN from "../GetStartedBTN";

const Buttons = () => {
    return (
        <ThemeProvider>
            <div className="flex justify-center flex-wrap gap-4">
                <GetStartedBTN arrow={true} />
                <Button color="white" variant="outlined" className="font-semibold text-base md:text-lg tracking-wide capitalize">View Pricing</Button>
            </div>
        </ThemeProvider>
    )
}

export default Buttons