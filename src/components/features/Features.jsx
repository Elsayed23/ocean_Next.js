import React from 'react'
import GradientText from '../GradientText'
import GetStartedBTN from '../GetStartedBTN'
import Data from './featuresData'
import Box from './FeaturesBox'
import SingleFeatureData from './SingleFeatureData'
import SingleFeature from './SingleFeature'

const Features = () => {

    const features = Data.map(feature => {
        return (
            <Box key={feature.id} {...feature} />
        )
    })

    const SingleF = SingleFeatureData.map(feature => {
        return (
            <SingleFeature key={feature.id} {...feature} />
        )
    })

    return (
        <div className='features relative flex flex-col gap-32 mb-32' id='features'>
            <div className="f_____1 flex items-center gap-16 flex-col lg:flex-row">
                <div className="flex flex-col items-start">
                    <GradientText text='Powerful features to help you manage all your leads.' />
                    <p className='leading-snug mb-6'>Apsum dolor sit amet consectetur. Aliquam elementum elementum in ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet vel.</p>
                    <GetStartedBTN />
                </div>
                <div className="flex flex-col gap-4">
                    {features}
                </div>
            </div>
            {SingleF}
        </div>
    )
}

export default Features