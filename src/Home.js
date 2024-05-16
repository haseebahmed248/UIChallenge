import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3001/users/home")
        .then((res) => {
            console.log(res);
            if(res.data !== "Success"){
                navigate("/");
            }
        })
    })
  
    const logout = () => {
        axios.get("http://localhost:3001/users/logout")
        .then((res) => {
            console.log(res);
            navigate("/");
        })
    }

  return (
    <div>
    <h1>Home</h1>
    <button 
    style={{
        width:'80px',
        height:'30px',
        fontSize:'15px',
        backgroundColor:'lightblue',
        border:"1px solid gray",
        borderRadius:'4px',
        color:'blueviolet',
        cursor:'pointer'
        }}
        onClick={logout}
        >
        Logout</button>
    </div>

  )
}

export default Home