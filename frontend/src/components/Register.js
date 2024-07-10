import React,{useState} from "react";
import "../styles/Register.css";
import {Form, Link} from "react-router-dom";
import PhoneInput from 'react-phone-input-2';
import PhoneNumberInput from "./phonenumberinput";
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';

function Register(props)
{
   
    const [formdata,setformdata]=useState({});
    // console.log(formdata);
    function handleChange(e)
    {
       
       const newdata=Object.assign({},formdata);
       newdata[e.target.id]=e.target.value;
       setformdata(newdata);

    }
    function handlephonechange(v)
    {
       
       const newdata=Object.assign({},formdata);
       newdata['rmobilenumberinp']=v;
       setformdata(newdata);

    }
    function onsubmit(data){
        console.log(data);
        axios.post(`${URL}/register`,formdata).then((
            res)=>{
                console.log(res);
            }
        ).catch((error)=>{
            console.log(error);
        })
    }

    return(
        <div id="registerdiv">
            <div id="rleft">
                <div id="rcontent">
                 <h3 style={{fontSize:'5vh',color:'rgb(79,82,142)'}}><strong>Diagno Doc</strong></h3>
                 <h3 style={{fontSize:'4vh'}}>Get Started Now</h3>
                 <h4 style={{fontSize:'3vh'}}>Enter your credentials <br></br>to access your account </h4>
                </div>
                <div id="loginopt">
                <button className="loginopt1">Login with google</button>
                <button className="loginopt2">Login with apple</button>

                </div>
                <h3>or</h3>
                <div id="rform">
                    <div className="rformfeild">
                    <label id="rname"><strong>Name</strong></label><br></br><br></br>
                    <input type="text"  id="rnameinp" onChange={handleChange} ></input><br></br><br></br>

                    </div>
                    <div className="rformfield">
                        <label id="remail"><strong>Email Address</strong></label><br></br><br></br>
                        <input type="text" id="remailinp" onChange={handleChange}></input><br></br><br></br>

                    </div>
                    
                    <div className="rformfield">
                        <label id="rmobilenumber"><strong>Mobile number</strong></label><br></br><br></br>
                        <PhoneInput 
                          country={'in'}
                          placeholder="Enter your Number"
                          inputProps={{
                            id:"rmobilenumberinp"
                          }
                          

                          }
                          onChange={handlephonechange}

                          ></PhoneInput><br></br><br></br>
                    </div>
                    {/* <PhoneNumberInput></PhoneNumberInput> */}
                    <div className="rformfield">
                        <label id="rpassword"><strong>password</strong></label><br></br><br></br>
                        <input type="password"  id="rpasswordinp" onChange={handleChange}></input>

                    </div>
                    <div className="termsandconditions">
                    <input type="checkbox" for="terms" id="termsinp" ></input>
                    <label id="terms">agree to terms and conditions</label>
                       

                    </div>

                 
                   
                    <button id="registerbutton" onClick={()=>{
                        onsubmit(formdata);
                    }}>Register</button>
                    <div id="redirect">
                        <p>Have an account?<Link to="/login">sign in</Link></p>
                    </div>

                  
                  
                   
                </div>
              
                
            </div>
           {/* <div id="rform">
              <form>
                    <label id="rname" >Name</label><br></br>
                    <input type="text" id="rnameinp"></input><br></br><br></br>
                    <label id="remail">Email</label><br></br>
                    <input type="text" id="remailinp"></input><br></br><br></br>
                    <label id="rmobilenumber">Mobile Number</label><br></br>
                    <input type="text" id="rmobilenumberinp"></input><br></br><br></br> 
                    <label id="rpassword">Password</label><br></br>
                    <input type="password" id="rpasswordinp"></input><br></br><br></br>
                    <input type="checkbox" id="atcinp"></input>
                    <label for="itc" id="ratc">Agree terms and conditions</label><br></br>
                    <input type="submit" value="Register" id="registerbutton" onClick={(e)=>{
                        e.preventDefault();
                        props.pr();
                    }}></input>

                </form>
                
           </div> 
            <h4>Have an account?<Link to="/login">Sign in</Link></h4>
          </div> 
            */}
            <div id="rright"></div>
            



            
        </div>
    )
}
export default Register;