import React from 'react'

const layout = ({children}) => {
  return (
    <>
    {children}
    <hr></hr>
    <div className='text-3xl'>footer</div>
    </>
  )
}

export default layout