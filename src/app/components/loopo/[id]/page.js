import React from 'react'

export default async function Post({params}) {
    const { id } = await params
    // console.log(id)

const res = await fetch(`http://localhost:5000/loopo/${id}`)
console.log(res)
    
    return (
        <>
        <h3>{res.title}</h3>
        <h3>Руперт</h3>
        </>
    )
    return true
}


