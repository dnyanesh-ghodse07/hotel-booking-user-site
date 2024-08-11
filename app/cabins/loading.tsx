import React from 'react'
import SpinnerMini from '../_components/SpinnerMini'

const loading = () => {
  return (
    <div className='w-full h-full flex justify-center items-center gap-4'>
        <SpinnerMini/>
        <p>Loading cabin data...</p>
    </div>
  )
}

export default loading