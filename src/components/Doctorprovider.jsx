import { createContext } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const DoctorContext=createContext()
function Doctorprovider({children}) {
    let [newdoctor,setNewdoctor]=useState(null)
    async function deletedata(id){
        try{
        await axios.delete(`https://doctorapibackend.onrender.com/doctors/${id}`)
        alert('details')
        setNewdoctor(id)
        }catch(err){
            console.log(err)
        }
    }
    async function updatedata(id){
        let details={
            name:prompt('enter new name'),
            age:prompt('enter new age'),
            gender:prompt('enter new age'), 
            specialization:prompt('enter new specialization'),
            salary:prompt('enter new salary'),
        }
        try{
        await axios.put(`https://doctorapibackend.onrender.com/doctors/${id}`,details)
        alert('data updated')
        setNewdoctor(id)
        }catch(err){
            console.log(err)
        }
    }
  return (

    <DoctorContext.Provider value={{newdoctor,setNewdoctor,deletedata,updatedata}}>
    {children}
    </DoctorContext.Provider>
  )
}

export default Doctorprovider        