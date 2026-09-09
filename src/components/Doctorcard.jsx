import React from 'react'
import { useNavigate } from 'react-router-dom'

function Doctorcard({name,gender,specialization,id,deletedata,updatedata}) {
  let navigate=useNavigate()
  return (
    <div>
        <div style={{height:'400px'}}>
        {/* <img src={image} alt="" /> */}
        </div>
        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{specialization}</p>
        <button onClick={()=>navigate(`/doctordetails/${id}`)}>View Details</button>
        <button onClick={()=>deletedata(id)}>Delete</button>
        <button onClick={()=>updatedata(id)}>update</button>
    </div>
  )
}

export default Doctorcard