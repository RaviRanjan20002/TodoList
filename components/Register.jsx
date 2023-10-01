import React from 'react'
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navig=useNavigate();
  return (
    <div className='formcontainer'>
     <form className='login'>
     <input className='inp' type='text' placeholder="USERNAME"/>
     <input className='inp' type='number' placeholder='password'/>

     <button className='bt' type='submit' onClick={()=>navig("/")} >REGISTER</button>
     </form>
    </div>
  )
}

export default Register