import React from "react";
import "../styles/Login.css";
import {Link} from "react-router-dom";
function Login()
{
    return(
        <div id="logindiv">
            
            <div id="Lleft">
                <div id="lcontent">
                    <h3 style={{fontSize:'3vw'}}>Diagno Doc</h3>
                    <h3 style={{fontSize:'2vw'}}>Welcome Back!</h3>
                    <h4 style={{fontSize:'2vw'}}>Please enter your details</h4>

                </div>
                <div id="lform">
                    <div className="lformfield">
                        <label id="lemail"><strong>Email</strong></label><br></br>
                        <input type="text"  id="lemailinp"></input><br></br>
                    </div>
                    <div className="lformfield">
                        <label id="lpassword"><strong>Password</strong></label><br></br>
                        <input type="password" id="lpasswordinp"></input>
                    </div>
                    <div id="remembermediv">
                            <input type="checkbox" id="rememberme"></input>
                            <label for="rememberme" id="lrememberme">Remember me</label>
                    </div>
                       
                    <div id="loginbuttondiv">
                        <button id="loginbutton">Login</button>
                    </div>
                    <div id="redirectr">
                            <h4>Dont have account? <Link to="/register">signup</Link></h4>
                           
                    </div>
                     
                    
                    
                  
                </div>
            </div>
            <div id="Lright"></div>

        </div>
    )
}
export default Login;