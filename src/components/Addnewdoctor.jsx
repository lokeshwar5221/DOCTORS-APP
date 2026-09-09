import React from 'react'
import { useState } from 'react'
import Home from './Home'
import axios from 'axios'
function Addnewdoctor() {
    let [name,setName]=useState('')
    let [age,setAge]=useState('')
    let [gender,setGender]=useState('')
    let [specialization,setSpecialization]=useState('')
    let [salary,setSalary]=useState('')
    let [newdoctor,setNewdoctor]=useState(null)

    async function handlesubmit(event){
        event.preventDefault()
        let formdetails={id:Date.now(),name,age,gender,specialization,salary}
        await axios.post('https://doctorapibackend.onrender.com/doctors',formdetails)
        alert('data posted')
        setNewdoctor(formdetails)
    }
    async function deletedata(id){
        await axios.delete(`https://doctorapibackend.onrender.com/doctors/${id}`)
        alert('details')
        setNewdoctor(id)
    }
    async function updatedata(id){
        let details={
            name:'lucky',
            age:21,
            gender:'male', 
            specialization:'heart',
            salary:123456,
            id
        }
        await axios.put(`https://doctorapibackend.onrender.com/doctors/${id}`,details)
        alert('data updated')
        setNewdoctor(id)

    }
  return (
    <div>
        <h1 className='s3'>Add New Doctor</h1>
        <div>
            <form action="" onSubmit={handlesubmit}>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Doctor Name' />
                <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Enter Age'/>
                <select name="" id="" value={gender} onChange={(e)=>setGender(e.target.value)} >
                    <option value="" selected disabled>Select your Gender</option>   
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <input type="text" value={specialization} onChange={(e)=>setSpecialization(e.target.value)} placeholder='Enter Specialization' />
                <input type="number" value={salary} onChange={(e)=>setSalary(e.target.value)} placeholder='Enter Salary' />
                <button>Add Doctor</button>
            </form>
        </div>
        <Home updatedata={updatedata} deletedata={deletedata} newdoctor={newdoctor}/>
    </div>
  )
}

export default Addnewdoctor