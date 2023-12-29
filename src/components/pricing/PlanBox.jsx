'use client'
import { Button, ThemeProvider } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import { BsCheckLg } from 'react-icons/bs'

const PlanBox = ({ planName, mostPopular, MonthlyPrice, YearlyPrice, aboutPlan, advantages, plan }) => {




    return (
        <div className={`pt-8 pb-3 px-5 border ${mostPopular ? 'border-[#0284C7] bg-[#1E293B]' : 'border-blue-gray-800'} rounded-lg backdrop-blur-sm`}>
            <div className="t__ mb-5">
                <div className="flex justify-between items-center mb-4">
                    <h3 className='font-bold text-white'>{planName}</h3>
                    {mostPopular && <h5 className='py-1 px-3 text-xs font-bold rounded-full text-white bg-[#0284C7]'>Most Popular</h5>}
                </div>
                <p className='leading-snug mb-5 text-lg'>{aboutPlan}</p>
                <h1 className='text-4xl mb-8 font-bold text-white'>${plan === 'monthly' ? MonthlyPrice : YearlyPrice} <span className='text-base'>{plan === 'monthly' ? 'monthly' : 'yearly'}</span></h1>
                <ThemeProvider>
                    <Button fullWidth className={`${mostPopular ? 'bg-[#0284C7]' : 'bg-[#1e293b]'}`}>Buy Plan</Button>
                </ThemeProvider>
            </div>
            <ul className='flex flex-col gap-3 text-base md:text-lg'>
                {
                    advantages.map((advantage, idx) => {
                        return <li key={idx} className='flex items-center gap-4'><div className="w-[25px]"><BsCheckLg color='#0284C7' size={25} /></div> {advantage}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default PlanBox