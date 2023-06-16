import React from 'react'
import visual from '../images/visual_1.jpg'
export default function Home() {
  return (
    <div>
      <div>
        <img src={visual} alt = "visual" className='responsive' style={{width:"100%"}}/>
      </div>
    </div>

  )
}
