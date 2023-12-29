import Image from 'next/image'

const Box = ({ img, title, content }) => {
    return (
        <div className='flex items-center justify-center text-center lg:text-left gap-5 flex-col lg:flex-row p-5 rounded-md border-2 border-transparent cursor-pointer duration-300 hover:border-[#0284C7] hover:bg-[#1E293B]'>
            <Image src={img} alt='feature' width={50} height={50} />
            <div className="flex flex-col gap-1">
                <h3 className='font-bold text-lg text-white'>{title}</h3>
                <p className=' leading-normal'>{content}</p>
            </div>
        </div>
    )
}

export default Box