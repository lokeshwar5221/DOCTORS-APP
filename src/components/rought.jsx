// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useState } from 'react'   
// import { useEffect } from 'react'
// import axios from 'axios'

// function Doctordetails() {
//     let {id} = useParams()
//     let [doctor,setDoctor] = useState()

//     async function getapidata() {
//         let response = await axios.get("https://doctorapibackend.onrender.com/doctors")
//         let finaldata = response.data.find((val)=> id == val.id)
//         setDoctor(finaldata)
//     }

//     useEffect(()=>{
//         getapidata()
//     },[])
//   return (
//     <div>
//         {doctor && (
//         <div>
//     <h1>{doctor.id}</h1>
//     <h1>{doctor.name}</h1>
//     <h1>{doctor.age}</h1>
//     <h1>{doctor.gender}</h1>
//     <h1>{doctor.specialization}</h1>
//     </div>
//         )}
//         </div>
//   )
// }
// export default Doctordetails







// import React from 'react'
// import Navbar from './components/Navbar'
// import './components/styles.css'
// import Section from './components/Section'
// import Doctorcard from './components/Doctorcard'
// import Addnewdoctor from './components/Addnewdoctor'
// import { Route,Routes } from 'react-router-dom'
// import Doctordetails from './components/Doctordetails'
// import Protectedroute from './components/Protectedroute'
// // import { useState } from 'react'
// //import { useEffect } from 'react'
// import { useState } from 'react'
// function App() {
//   let [islogin,setIslogin] = useState(false)
//   //let [count, setCount] = useState(0)
//   //let [data, newData] = useState('')
//   //useEffect(() => {
//   //  console.log('api calling')
//   //},[data])
//   return (
//     <div>
//       {/* {data}
//       <button onClick={() => {
//         let a = prompt('enter a name')
//         newData(a)}}>newdata</button>
//       count is {count}
//       <button onClick={() => {setCount(count + 1)}}>add</button> */}
//       <button onClick={()=>setIslogin(true)}>Login here</button>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Section />} />
//         <Route path='/addnewdoctor' element={<Protectedroute islogin={islogin}><Addnewdoctor /></Protectedroute>} />
//         <Route path='/doctordetails/:id' element={<Doctordetails />} />
        
//       </Routes>

//       {/* <Section /> */}

//       {/* <div className='doctorcontainer'>
//         <Doctorcard imglink='./images/deepika.jpg' name='deepika' gender='female' specialization='Cardiologist' />
//         <Doctorcard imglink='./images/bharat.jpg' name='bharat' gender='male' specialization='Heart Specialist' />
//         <Doctorcard imglink='./images/rohith.jpg' name='rohith' gender='male' specialization='Neurologist' />
//         <Doctorcard imglink='./images/babu.jpg' name='babu' gender='male' specialization='Orthopedic' />
//         <Doctorcard imglink='./images/ekanth.jpg' name='ekanth' gender='male' specialization='Heart Specialist' />
//         <Doctorcard imglink='./images/layatri.jpg' name='layatri' gender='female' specialization='Heart Specialist' />
//         <Doctorcard imglink='./images/sankar.jpg' name='sankar' gender='male' specialization='Heart Specialist' />
//       </div> */}
//       {/* <Addnewdoctor /> */}
//     </div>
//   )
// }

// export default App