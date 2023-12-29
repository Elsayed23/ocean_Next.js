import React from 'react'
import GradientText from '../GradientText'
import Data from './testimonialsData'
import Box from './TestimonialsBox'
import GetStartedBTN from '../GetStartedBTN'

const Testimonials = () => {


    const testiBox = Data.map(client => {
        return (
            <Box key={client.id} {...client} />
        )
    })

    return (
        <div className='Testimonials mb-32' id='testimonials'>
            <GradientText text='Meet our Customers' classes='text-center' />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-32">
                {testiBox}
            </div>
            <div className="flex flex-col gap-6 lg:flex-row justify-between text-center lg:text-left items-center px-6 md:px-16 py-9 bg-[#1E293B] rounded-lg">
                <div id='contact'>
                    <GradientText text='Let’s try our service now!' />
                    <p className='max-w-[560px]'>Experience the power of Ocean CRM dashboard for engineering teams. Boost productivity and streamline collaboration. Get started today!</p>
                </div>
                <GetStartedBTN arrow={true} />
            </div>
        </div>
    )
}

export default Testimonials