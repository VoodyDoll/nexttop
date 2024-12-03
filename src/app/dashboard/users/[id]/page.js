import React from 'react'

const Page = ({params}) => {
    let {id}=params
  return (
    <div>Users data:{id}</div>
  )
}

export default Page