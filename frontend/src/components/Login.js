import React,{useState} from "react";
import "../styles/Login.css";
import {Link, Navigate, useNavigate} from "react-router-dom";
import axios  from "axios";
function Login(props)
{
    const [formdata,setformdata]=useState({});
    const [error,setrerror]=useState(false);
    console.log(formdata);
    const Navigate=useNavigate();

    function handlechange(e){
        const newdata=Object.assign({},formdata);
        newdata[e.target.name]=e.target.value;
        setformdata(newdata);

    }
    function handlelogin(data){
        console.log(data);
        axios.post(`${URL}/login`,data).then(
            (res)=>{
                console.log(res);
                Navigate('/')
            }
        ).catch(
            (error)=>{

                setrerror(true);

                console.log(error);
                
            }
        )
    }
        

    
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
                        <input type="text"  id="lemailinp" onChange={handlechange} name="emailid"></input><br></br>
                    </div>
                    <div className="lformfield">
                        <label id="lpassword"><strong>Password</strong></label><br></br>
                        <input type="password" id="lpasswordinp"onChange={handlechange} name="password"></input>
                    </div>
                    <div id="remembermediv">
                            <input type="checkbox" id="rememberme"></input>
                            <label for="rememberme" id="lrememberme">Remember me</label>
                    </div>
                       
                    <div id="loginbuttondiv">
                        <button id="loginbutton" onClick={()=>{
                            props.pr();
                            handlelogin(formdata);
                            
                        }}>Login</button>
                    </div>
                    {error?(<div id="err" style={{marginLeft:'14vw',marginTop:'2vh',color:'red'}}>somethins is wrong</div>):(<div id="perfect" style={{marginLeft:'14vw',marginTop:'2vh',color:'green'}}>everything is correct</div>)}
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