'use client'
import React from 'react'
import GradientText from '../GradientText'
import PlansData from './PlansData'
import PlanBox from './PlanBox'

const Pricing = () => {

    const [plan, setPlan] = React.useState('monthly')

    function setPlanFun(e) {
        setPlan(e.target.htmlFor)
    }

    const plans = PlansData.map(Plan => {
        return (
            <PlanBox key={Plan.id} {...Plan} plan={plan} />
        )
    })

    return (
        <div className='pricing mb-32' id='pricing'>
            <GradientText text='Find a plan to power your projects' classes='text-center' />
            <div className=" relative mb-16">
                <div className="flex w-full justify-center">
                    <input type="radio" id="monthly" name="tabs" className="appearance-none" />
                    <label value='asdasdasd' onClick={setPlanFun} htmlFor="monthly" className="cursor-pointer w-1/3 sm:w-1/4 md:w-1/6 flex items-center justify-center truncate capitalize select-none text-white font-semibold text-lg rounded-lg py-2">Monthly</label>

                    <input type="radio" id="annually" name="tabs" className="appearance-none" />
                    <label onClick={setPlanFun} htmlFor="annually" className="cursor-pointer w-1/3 sm:w-1/4 md:w-1/6 flex items-center justify-center truncate capitalize select-none text-white font-semibold text-lg rounded-lg py-2">Annually</label>

                    <div className="w-1/3 sm:w-1/4 md:w-1/6 flex items-center justify-center truncate capitalize select-none font-semibold text-lg rounded-lg p-0 h-full bg-[#0284C7] absolute transform transition-transform duration-300 tabAnim z-30 -translate-x-2/4"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {plans}
            </div>
        </div>
    )
}

export default Pricing