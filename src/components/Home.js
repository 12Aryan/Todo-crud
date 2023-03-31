import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate= useNavigate();
  console.log(localStorage.getItem("user"));
    const userName = JSON.parse(localStorage.getItem("user"))

const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login")
}


  return (
    <>
      <h1>welcome - {userName.name} </h1>
      <button type='submit'
      onClick={handleLogout}
      >logout</button>
    </>
  )
}

export default Home
