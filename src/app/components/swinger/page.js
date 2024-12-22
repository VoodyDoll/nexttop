'use client'
import React from 'react'
import Robert from './Robert'
import 'bootstrap/dist/css/bootstrap.min.css';
const page = () => {
    return (
        <div className='dot ml-6'>
            Frilancer<Robert />
            <style jsx>
                {`
 .dot{
 color:red
 }
 `}

            </style>
            <p className='pipal'>Rooter </p>
        </div>

    )

}

export default page