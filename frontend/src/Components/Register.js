import React, {  useState } from 'react'
import axios from 'axios'
import Footer from "./partials/footer"
import 'bootstrap/dist/css/bootstrap.css';
import "./css/login.css"
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      username,
      password
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BE}/user/register`,
      headers: {
        Accept:" */*"
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem("my_user_token", response.data.token);
        navigate("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return <div>
        <div className="mt-5 row m-auto">
            <div>
                <form className="m-auto loginForm">
                    <div><img src={"imgsAndVideos/stocheck Logo.png"} alt="logo" /></div>
                    <div className="form-floating mb-5 mt-5">
                        <input className="form-control"
                            type="text"
                            name="username"
                            placeholder="Your Username"
                            onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="floatingInput">Choose a username</label>
                    </div>
                    <div className="form-floating">
                        <input className="form-control"
                            type="password"
                            name="password"
                            required
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                        <button
                            className="mainButton"
                            onClick={handleSubmit}>
                            <span>Register</span></button>      
                        <button 
                            className="mainButton" 
                            onClick={()=>navigate("/login")}>
                            <span>Login</span></button>
                
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
    
}

export default Register