import React, { useState } from "react";
import axios from "axios";


import { useNavigate } from "react-router-dom";
const NewUserLogin = () => {
  
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const [error, setError] = useState("");

  
 const navigate = useNavigate();
  const goToLogin=()=>{
    navigate("/");
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
    
    userType:userType,
    password:password,
    email:email,
    
    };

    try {
      await axios.post(
        "http://localhost:8080/api/users",
        newUser
      );
      // Handle success, e.g., display a success message
      console.log("User added successfully",newUser);
      setUserType("");
      setPassword("");
      setEmail("");
      
      
    } catch (error) {
      setError("Failed to add user");
    }
  };

  return (
    <div>
      
      <div className="container">
        <h2 className="mt-4 mb-3">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
          <div className="form-group">
            <label>Email id:</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input
              type="password"
              className="form-control mb-3"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            
            <label>userType(admin/user):</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="userType (admin/user)"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            />
          </div>
          </div>
          
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {error && <div className="text-danger mt-2">{error}</div>}
        </form>
        
  <button style={{
        padding: '10px', // Top/bottom 10px, left/right 20px
        margin: '15px', // All sides 15px
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
  onClick={goToLogin}>Login</button>
      </div>
    </div>
  );
};

export default NewUserLogin;
