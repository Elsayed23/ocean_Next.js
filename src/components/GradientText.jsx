import React from 'react'

const GradientText = ({ text, classes }) => {

    const gradientText = `bg-clip-text text-transparent bg-gradient-to-tr from-[#bae6fd] via-[#0ea5e9] to-[#bae6fd] font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-7 ${classes}`

    return <h1 className={gradientText}>{text}</h1>
}

export default GradientText