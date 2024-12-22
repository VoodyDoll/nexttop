import React from 'react'

const Page = () => {
    let fingerdata = async ()=>{
       let dogy= await fetch('http://localhost:5000/1')
        let filda= await dogy.json()
       return filda
    }
  return (
    <>
    {fingerdata.map((item)=>{
        return(
            <p>{item.title}</p>
        )
    })}
  
    </>
  )
}

export default Page