//import React,{useEffect, useState} from 'react'
import './app.css'
import Home from './Home'
import Data from './Data'
import Summary from './Summary'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router,Route,Routes
} from 'react-router-dom'
import Form from './Form'
function App() {
 // const api = "https://api.tvmaze.com/search/shows?q=all"
  //const [value , setValue] = useState([])
 /* useEffect(() =>{fetch(Data).then(response => 
    response.json()).then(data => setValue(data));
  },[])*/

  //const data = JSON.stringify(Data)

  
 // console.log(data)
  return (
<Router>
  <Routes>
    <Route path = "/" element ={<Home />} />
    <Route path = "/summary" element = {<Summary/>} />
    <Route path = "/form" element = {<Form/>}/>
  </Routes>
</Router>



)
  }
export default App;
