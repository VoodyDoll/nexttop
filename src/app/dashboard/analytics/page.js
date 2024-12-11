'use client'
import React from 'react'

const Page = () => {

    let onBut = () => {
        let res = fetch('http://localhost:3000/api/piple', {
            method: 'POST',
            body: 'googo'
        })

        return res
    }
    return (
        <div>
            <button onClick={() => onBut()}>Jk</button>

        </div>
    )
}

export default Page