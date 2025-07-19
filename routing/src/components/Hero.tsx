import React from 'react'
import RoomImage from "public/image.jpeg"
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='relative h-screen'>
            <div className='absolute inset-0 -z-40'>
                <Image src={RoomImage} alt="Room"
                    // width={500}
                    // height={500}
                    fill
                    style={{ objectFit: 'cover' }} />
            </div>
            <div className='absolute inset-0 bg-gradient-to-r from-slate-600'/>
            <div className='flex items-center justify-center pt-64'>
                <h1 className='font-bold text-6xl text-white'>My aesthetic room</h1>
            </div>
        </div>
    )
}

export default Hero