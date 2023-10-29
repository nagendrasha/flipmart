'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Log = () => {
    const router = useRouter();
  return (
    <div>
      user login form will be made here soon!!!
      <button onClick={()=>{router.back()}}>Go Back</button><br/><br/>
      <button onClick={()=>{router.refresh()}}>Refresh Page</button>
    </div>
  )
}

export default Log
