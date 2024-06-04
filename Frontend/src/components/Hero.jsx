import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
      <div className='banner'>
        <h1>{title}</h1>
        <p>
        Doctor-Connect is an open facility dedicated to providing comprehensive healthcare services with compassion and expertise. Our team of skilled professionals is committed to delivering personalized care tailored to each patient's needs with optimal health and wellness. We leverage advanced medical technology and innovative treatments to ensure the highest standards of patient care. Additionally, our appointment system is very easy to use and we are 100% trusted by our patients.
        </p>
      </div>
      <div className='banner'>
        <img src={imageUrl} alt='hero' className='animated-image' />
        <span>
          <img src='/Vector.png' alt='vector' />
        </span>
      </div>
    </div>
  )
}

export default Hero
