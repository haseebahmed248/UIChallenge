import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error,setError] = React.useState("");
  
  useEffect(()=>{
    axios.get("http://localhost:3001/users/home")
    .then((res) => {
        console.log(res);
        if(res.data === "Success"){
            navigate("/home");
        }
    })
  },[])

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/users/login/",{
        email: email,
        password: password
    }).then((res) => {
        console.log(res);
        navigate("/home");  
        })
        .catch((err) => {
            console.log(err);
            setError("Invalid Email or Password");
        })
}
  
  
  return (
    <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="text" placeholder="Enter Email"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input type="password" placeholder="Enter Password" 
          value={password} 
        onChange={(e) => setPassword(e.target.value)}
        />   <br />
        <p>Click here to  <Link to="/signup" >SignUp</Link></p>
        <p>{error}</p>
        <input type="submit" value="Login" />    
      </form>
  )
}

export default Login