import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';
const HeroBanner = ({ heroBanner}) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{heroBanner.smallText}</p>
            <h2>{heroBanner.midText}</h2>
            <h1>{heroBanner.largeText1}</h1>
            <img src={urlFor(heroBanner.image)} alt="headphones" className='hero-banner-image' />

            
            <div>
                <Link href={`/products/${heroBanner.product}`}>

                <button type = "button"> {heroBanner.buttonText}</button>


                </Link>
                <div className='desc'>
                    <h5>Description</h5>
                    <p>DESCRIPTION</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner