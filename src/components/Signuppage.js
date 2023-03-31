import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signuppage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  //to store value in local storage
  const handleSignup = (e) => {
    e.preventDefault();
    let userArr=[]
    if(localStorage.getItem("user")){
      userArr.push(JSON.parse(localStorage.getItem("user")));
    }

    userArr.push(input)
    localStorage.setItem("user", JSON.stringify(userArr));
    console.log(userArr);
    //  localStorage.setItem("user", JSON.stringify(input));
    
    JSON.stringify(input)
    navigate("/login");
  };

  return (
    <>
      <div className="login-main-div">
        <h1>signup</h1>
        <div className="login-child-one">
          <img className="todo-img" src="images/todo.png" alt="todoimg" />
        </div>

        <div className="login-child-two">
          <img className="vector-icon" src="images/Vector.png" alt="dfdffa" />
          <h3>To-Do list</h3>
          <h2>Signup to access</h2>
          <h2>TO-DO List</h2> 


          <form onSubmit={handleSignup}>
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => {
               
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={(e) => {
               
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
              <input type="checkbox"></input>Accept Term condition & privacy
              policy
            </p>
            <button type="submit">Sign up</button>
          </form>


          <p>or</p>
          <a href="">Sign up with google</a>
          <p>
            Already have an account?<Link to="/login">Signin</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signuppage;
