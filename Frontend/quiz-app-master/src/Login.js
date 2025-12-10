import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/Auth-Context";

const Login = () => {

  const {isLoggedIn,setIsLoggedIn}= useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

const onLoginClick=()=>{
  setIsLoggedIn(!isLoggedIn);
}
 const navigate = useNavigate();
  const goToRegister=()=>{
    navigate('/Register')
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        email: email,
        password: password,
      });
      console.log("data is")
      console.log(response.data);
      const role = response.data.userType;
      console.log("role is",role);
      const userId=response.data.id;
      console.log("userId is",userId)
      // Handle the role based on the response
      if (role === 'admin') {
        // navigate("/admin");
        localStorage.setItem("userId", userId)
        navigate("/admin", { state: { email: email } });
      } else if (role === 'user') {
        // Redirect to the user page
        navigate("/user", { state: { email: email } });
        // navigate("/user");
        setError("User logged");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError("Failed to log in");
    }
  };
  
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        
        
        <div className="form-group">
          
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        
        
       
        <button className="btn btn-primary" type="submit" onClick={onLoginClick} >
          Log in
        </button>
        {error && <div className="text-danger">{error}</div>}
      </form>
        <button style={{
        padding: '5px', // Top/bottom 10px
        margin: '10px', // All sides 15px
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
 onClick={goToRegister}>Register</button>         
    </div>

    
);
};

export default Login;
