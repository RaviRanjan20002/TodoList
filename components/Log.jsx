import React from 'react'
import "../styles/log.css";
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
const Log = () => {
    const navigation= useNavigate();
  return (
    <div className='formcontainer'>
    <Link to="/"></Link>
    <Link to= "/todo"></Link>
    <Link to= "/register"></Link>
      <h1>Competishun Assignment</h1>
     <form className='login'>
     <input className='inp' type='text' placeholder="USERNAME"/>
     <input className='inp' type='number' placeholder='password'/>
     <button className='bt' type='submit' onClick={()=>navigation("/todo")}>LOGIN</button>
     <button className='bt' type='submit' onClick={()=>navigation("/register")} >SIGN UP</button>
     </form>
    </div>
  )
}

export default Log