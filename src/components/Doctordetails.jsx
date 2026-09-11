import React from "react"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import axios from "axios"

function Doctordetails() {
    let {id}=useParams()
    let[doctor,setDoctor]=useState()

    async function getapidata() {
      try{
    let response=await axios.get("https://doctorapibackend.onrender.com/doctors")
    let finaldata=response.data.find((val)=>id==val.id)
    setDoctor(finaldata)
    }catch(err){
      console.log(err)
    }
  }
    useEffect(()=>{
      getapidata()
    },[])

  return (
    <div>
      {doctor && (
        <div>
        <h1>{doctor.id}</h1>
        <h1>name:{doctor.name}</h1>
        <h1>age:{doctor.age}</h1>
        <h1>gender:{doctor.gender}</h1>
        <h1>specialization:{doctor.specialization}</h1>
        <h1>salary:{doctor.salary}</h1>
      </div>
    )}
    </div>
  )
}

export default Doctordetails