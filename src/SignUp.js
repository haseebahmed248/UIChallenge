import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

function SignUp() {
  const [username,setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error,setError] = React.useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/users/signup/",{
        username: username,
        email: email,
        password: password
    }).then((res) => {
        console.log(res);
        })
        .catch((err) => {
            console.log(err);
            setError("Invalid Email or Password");
        })
}
  return (
    <form onSubmit={handleSubmit}>
        <h1>SignUp</h1>
        <input type="text" placeholder="Enter username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <input type="text" placeholder="Enter Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input type="password" placeholder="Enter Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />   <br />
        <p>Click here to  <Link to="/" >Login</Link></p>
        <p>{error}</p>
        <input type="submit" value="SignUp" />    
      </form>
  )
}

export default SignUp