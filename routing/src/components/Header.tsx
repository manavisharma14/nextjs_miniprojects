import React from 'react'
import Link from 'next/link'
const NavbarPage = () => {
  return (
    <div className='absolute z-10 text-white w-full'>
        <nav className='flex items-center justify-between container mx-auto h-14'>
            <h1 className='font-bold text-xl'>Home</h1>
            <div className='flex gap-2'>
                <Link href="/performance" className='text-blue-500 hover:text-blue-700'>Performance</Link>
                <Link href="/reliability" className='text-purple-500 hover:text-purple-700'>Reliability</Link>
            </div>
        </nav>
    </div>
  )
}

export default NavbarPage