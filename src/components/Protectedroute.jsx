import React from 'react'

function Protectedroute({islogin,children}) {
    if(islogin){
        return children
    }
  return (
    <h1>Plese Login</h1>
  )
}

export default Protectedroute