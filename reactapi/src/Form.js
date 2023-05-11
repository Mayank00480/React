import React,{useState} from 'react'
const Form = () => {
    const [email,setEmail] = useState(' ')
    const [password , setPassword] = useState('')
    const data = localStorage.getItem('result');
    const result = JSON.parse(data)
    
    const handleSubmit = (e) => {
       e.preventDefault(); 
    }
  return (
    <div className = "body">
    <div className = "container" style ={{position :'relative' , left : '500px'}} >
    <div className ="card" >
      <div className ="showName"><p>showName :</p><p>{result.name}</p> </div>
      <div className ="showName"><p>showStatus :</p><p>{result.status}</p> </div>
      <div className ="showName"><p>premieredOn :</p><p>{result.premiered}</p> </div>
      <div className ="showName"><p>showType :</p><p>{result.type}</p> </div>
      <div className ="showName"><p>Language :</p><p>{result.language}</p> </div>
      <div className ="showName"><p>Ratings :</p><p>{result.rating.average}</p> </div>
      <div className ="showName"><p>averageRuntime :</p><p>{result.averageRuntime}</p> </div>
      </div>
      <form style ={{position :'relative' , top : '400px',right:'280px' ,border : '1px solid black',height:'200px',borderRadius: '10px',backgroundColor:'azure'}}>
  <div className="form-group" style = {{padding:'10px'}}>
    <label for="exampleInputEmail1" >Email address</label>
    <input type="email" onChange={(e) =>{setEmail(e.target.value)}} style = {{marginLeft:'10px' , borderRadius : '10px'}} className="form-control" value ={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <div className="form-group"style = {{padding:'10px'}}>
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={(e) =>{setPassword(e.target.value)}} value = {password} className="form-control" id="exampleInputPassword1"  style = {{marginLeft:'10px' , borderRadius : '10px'}} placeholder="Password"/>
  </div>
 
  <button type="submit"  className="btn btn-primary" style = {{margin:'5px',position: 'relative',left :'5px',borderRadius : '10px',backgroundColor:'white',cursor:'pointer'}} onClick ={handleSubmit}>Submit</button>
</form>
     
      
      </div>
  </div>
  )
}

export default Form