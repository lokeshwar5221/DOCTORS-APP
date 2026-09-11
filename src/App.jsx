import React from 'react'
import Navbar from './components/Navbar'
import './components/styles.css'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import Addnewdoctor from './components/Addnewdoctor'
import { useState } from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Doctordetails from './components/Doctordetails'
import Protectedroute from './components/Protectedroute'
import useCounter from './components/useCounter'
import Doctorprovider from './components/Doctorprovider'
function App() {
  let [islogin,setIslogin]=useState(false)
  let {count,inc,dnc}=useCounter()
  // let[count,setCount]=useState(0)
  // let[data,newData]=useState('')
  // useEffect(()=>{
  //   console.log('api calling')
  // },[data])
  return (
    <div>
      {count}
      <button onClick={inc}>inc</button>
      <button onClick={dnc}>dnc</button>
      {/*{data}
      <button onClick={()=>{let a=prompt('enter a name');newData(a)}}>newData</button>
      count : {count}
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      <button onClick={()=>{setCount(count+1)}}>Reset</button>*/}
      <button onClick={()=>setIslogin(true)}>login here</button>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Section/>}/>
        <Route path='/addnewdoctor' element={<Protectedroute islogin={islogin}><Doctorprovider><Addnewdoctor/></Doctorprovider></Protectedroute>}/>
        <Route path='/doctordetails/:id' element={<Doctordetails/>}/> 
      </Routes>

      {/*<Section/>
      <div className='doctorcontainer'>
        <Doctorcard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYB0b1iSijJOZicvmVYnpOgU_69IOL97Rh9b49Ls10Q&s=10' name='sailu' gender='femail' specialization='heart spacilist'/>
        <Doctorcard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrY1naYmEpMfNMqi2Pw9q1jkpiBoTi1kFEfK1U79_oCg&s=10' name='loki' gender='male' specialization='Bones specialist'/>
        <Doctorcard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3Do59iAMbtBWrNPHPVaYIwXaOdjfx-vimpvdaS4ZUw&s=10' name='arjun' gender='male' specialization='Neuro specialist'/>
        <Doctorcard image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNm15-t7RWDG0LNdnPbdIy7nU8d4KIGTaE2-TDU5_Fww&s=10' name='akhil' gender='male' specialization='Ortho specialist'/>
      </div>
      <Addnewdoctor/>*/}
    </div>
  )
}

export default App