import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Loginpage = () => {

  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
 
  const handleLogin = (e) => {
    e.preventDefault();
   const loggedUser = JSON.parse(localStorage.getItem("user"));
   if (input.email === loggedUser.email &&
     input.password === loggedUser.password) {
      localStorage.setItem("loggedin", true);
    navigate("/");
   }
   else{
      alert("Invalid email or password")
   }
  }
  


  return (
    <>
      <div className="login-main-div">
        <h1>login</h1>
        <div className="login-child-one">
          <img className="todo-img" src="images/todo.png" alt="todoimg" />
        </div>

        <div className="login-child-two">
          <h3>To-Do list</h3>
          <h2>Login to access</h2>
          <img className="vector-icon" src="images/Vector.png" alt="" />
          <h2>TO-DO List</h2>
          <p>Email</p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={(e) => {
                console.log(e.target.value);
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) => {
                console.log(e.target.value);
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <p>
              <input type="checkbox"></input>Remember me
            </p>
            <p>
              <a href=""> Forgot Password?</a>
            </p>
            <button type="submit">Login</button>
          </form>
          <p>or</p>
          <a href="">Signin with google</a>
          <p>
            Don't have an account?<Link to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
