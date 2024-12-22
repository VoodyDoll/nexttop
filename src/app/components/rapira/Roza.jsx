// 'use client'
import React, { useState } from 'react'

const Roza = () => {
let [root,setroot]=useState(0)



  return (
    <>
    {/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
    <div>Roza:{root}</div>
<button onClick={()=>setroot(root+1)}>Ok</button>

    </>
  )
}

export default Roza