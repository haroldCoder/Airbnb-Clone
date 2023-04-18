import React from 'react'
import go from '../imgs/go.png'

export default function Help() {
  return (
    <div className='flex justify-center items-center h-[60vh]'>
        <a href='https://harold-enyoi.netlify.app/' target='blank' className='text-2xl text-blue-500 mr-3'>Go to Page</a>
        <img src={go} style={{width: "4%"}} />
    </div>
  )
}
