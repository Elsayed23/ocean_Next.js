import React from 'react'

const Box = ({ clientSaid, clientImg, clientName, clientMember }) => {
    return (
        <div className='flex flex-col gap-3 p-5 duration-300 hover:bg-[#1E293B] rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
            <p className='text-lg'>{clientSaid}</p>
            <div className="flex gap-3 items-center">
                <img src={clientImg} alt="client" className=' w-10 h-10 rounded-full object-cover' />
                <div className="flex flex-col gap-1">
                    <h2 className='text-white text-base font-bold'>
                        {clientName}
                    </h2>
                    <span className='font-semibold text-sm text-[#0284C7]'>{clientMember}</span>
                </div>
            </div>
        </div>
    )
}

export default Box