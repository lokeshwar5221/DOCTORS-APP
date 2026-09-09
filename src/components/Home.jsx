import React from 'react';
import { useEffect,useState } from 'react'
import Doctorcard from './Doctorcard';
import axios from 'axios';

function Home({newdoctor,deletedata,updatedata}) {
    let [doctors,setDoctor]=useState([])
    let [search,setSearch]=useState('')
    let [specialization,setSpecialization]=useState('')
    
    async function getapidata(){
      let response=await axios.get("https://doctorapibackend.onrender.com/doctors")

      console.log(response)
      console.log(response.data)
      setDoctor(response.data)
    } useEffect(()=>{getapidata()},[newdoctor]); 
    //useEffect(()=>{
        // if(newdoctor in setDoctors(prevDoctors => [...prevDoctors])){
        //     alert("Doctor already exists");
        //     setDoctors(prevDoctors => [...prevDoctors]);
        // }

    //     if(newdoctor){
    //         setDoctors(prevDoctors => [...prevDoctors, newdoctor]);
    //     }
        
    // },[newdoctor])
    let filteredDoctors = doctors.filter((val)=>{
        return (val.name.toLowerCase().includes(search.toLowerCase()) && (specialization === '' || val.specialization === specialization)) 
        // || (val.specialization.toLowerCase().includes(search.toLowerCase()));
    });
  return (
    <div>
      <input type="text" placeholder='Search Doctor' value={search} onChange={(e)=>setSearch(e.target.value)} style={{width:'30%',margin:'1% 35%',padding:'1%'}} />
      <select name="specialization" value={specialization} onChange={(e)=>setSpecialization(e.target.value)} style={{width:'30%',margin:'1% 35%',padding:'1%'}}>
        <option value="" selected disabled>Select Specialization</option>
        <option value="Muscles">Muscles</option>
        <option value="Bones">Bones</option>
        <option value="Heart">Heart</option>
        <option value="Brain">Brain</option>  
      </select>
        {doctors.length>0?(
            <div className='doctorcontainer'>
                {doctors.map((doctor)=>{
                    return <Doctorcard
                    deletedata={deletedata}
                    updatedata={updatedata}
                    name={doctor.name}
                    age={doctor.age}
                    gender={(doctor.gender)}
                    specialization={doctor.specialization}
                    image={doctor.image}
                    key={doctor.id}
                    id={doctor.id}/>

                })}
            </div>):(<h1>loading</h1>)}
    </div>
  )
}

export default Home