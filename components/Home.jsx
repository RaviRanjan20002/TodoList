import React from 'react'
import "../styles/home.css"
import { useState } from 'react'
import Goal from './Goal'
import "../styles/home.css"
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const[task,settask]=useState([]);
  const[title,settitle]=useState("");
  const[description,setdescription]=useState("");
  const Submithandler =(e)=>{
    e.preventDefault();
    settask([...task, {title,description} ])
  }

  const deletefun = (index)=>{
    const filteredarr = task.filter((val, i)=>{
      return i !== index;
    })
    settask(filteredarr);
  }

  const navi=useNavigate();
  return (
    <div className='container'>
    <h1>TODO LIST</h1>
    <form className='textcontainer' onSubmit={Submithandler}> 
    <input type='text' 
    placeholder='Title' 
    value={title} 
    onChange={(e)=>settitle(e.target.value)}
    />
    <textarea placeholder='description'
    value={description} 
    onChange={(e)=>setdescription(e.target.value)}
    ></textarea>
    <button type='submit'>ADD</button>
    <button type='submit' onClick={()=>navi("/")} className="logout">LOGOUT</button>
   </form>

   {task.map((item,index)=> {
     return <Goal key={index}  title={item.title}  description={item.description} 
      index={index} deletefun={deletefun}
     /> 
   }
   )}

   </div>
  
  )
}

export default Home