import React from 'react'
import GradientText from '../GradientText'
import Image from 'next/image'

const Feature = ({ img, title, content, reverceDir }) => {
    return (
        <div className={`flex items-center gap-16 flex-col lg:flex-row ${reverceDir && 'lg:flex-row-reverse'}`}>
            <Image src={img} alt="img" width={515} height={373} />
            <div className="flex flex-col">
                <GradientText text={title} />
                <p className='leading-snug'>{content}</p>
            </div>
        </div>
    )
}

export default Feature