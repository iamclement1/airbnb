import React from 'react'
import Image from '../../assets/Hero-Img.png'

const Hero = () => {

    return (
    <div>
        <section className='hero'>
            <img className='Hero-Image' src={ Image } alt="Hero Image" />
            <div className='hero-content'>
                <h1>
                    Online Experiences
                </h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </section>
    </div>
)
}

export default Hero