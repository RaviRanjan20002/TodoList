import React from 'react'

const Goal = ({title,description,index,deletefun}) => {
  return (
    <div className='goal'>
    <div>
        <p>{title}</p>
        <span>{description}</span>
    </div>
    <button onClick={()=>{
        deletefun(index)
    }}>-</button>
    </div>
  )
}

export default Goal