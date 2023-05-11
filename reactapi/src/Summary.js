import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Summary = () => {
  
  const goTOForm =(result) => {
    const res = JSON.stringify(result)
    localStorage.setItem("result",res)
  }
  const Location = useLocation()
   
  return (
    <div className = "body">
    <div className = "summary">{Location.state.value.summary}
    <Link to = "/form">  <button onClick = {() => {goTOForm(Location.state.value)}} style ={{position:'relative',top:'60px' ,cursor :'pointer',padding:'5px',borderRadius:'10px' }}> Book Ticket </button></Link> </div>
    </div>
  )
}

export default Summary