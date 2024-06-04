import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    
    <div className='container biography'>
      <div className='banner'>
        <img src={imageUrl} alt='about Img'  className='animated-image-Bio' />
        
      </div>
      
      <div className='banner'>
        <p> Biography </p>
        <h1> About Us </h1>
        <p> We offer a wide range of healthcare services to cater to the diverse needs of our patients, ensuring that every individual receives the best possible care. </p>
        <p> Our team consists of highly skilled and experienced healthcare professionals who are committed to delivering top-notch medical care with a focus on patient well-being. </p>
        <p> We believe in personalized healthcare, tailoring our services to meet the unique needs of each patient, ensuring a more effective and customized approach to treatment and wellness. </p>
        <p> We take pride in being a part of the community, offering various outreach programs and health education initiatives to promote overall community health and wellness.</p>
        <p> Experience hassle-free booking with our user-friendly online system.</p>
      </div>
      
    </div>
  )
}

export default Biography
