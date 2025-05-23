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
    const [issuccess,setissuccess]=useState("");
    const [selectedvalue,setselectedvalue]=useState("option1");
    const [errortext,seterrortext]=useState("");
    const URL="http://localhost:8000/user";

    console.log(formdata);
//    console.log("isselected",selectedvalue);
    function handleChange(e)
    {
       
       const newdata=Object.assign({},formdata);
       
       newdata[e.target.name]=e.target.value;
       setformdata(newdata);

    }
    function handlephonechange(v)
    {
       
       const newdata=Object.assign({},formdata);
       newdata['mobileNumber']=v;
       setformdata(newdata);

    }
    function onsubmit(data){
        console.log(data);
        axios.post(`${URL}/register`,formdata).then((
            res)=>{
                setissuccess(res.data.message);
                seterrortext("");
                console.log(res);

            }
        ).catch((error)=>{
            console.log("inerror....");
            setissuccess("");
            seterrortext(error.response.data);

            console.log(error);
        })
    }
    function handleradio(e){
        console.log("aa");
        setselectedvalue(e.target.value);

    }

    return(
        <div id="registerdiv">
            <div id="rleft">
                <div id="rcontent">
                 <h3 style={{fontSize:'5vh',color:'rgb(79,82,142)'}}><strong>Diagno Doc</strong></h3>
                 <h3 style={{fontSize:'4vh'}}>Get Started Now</h3>
                 <h4 style={{fontSize:'3vh'}}>Enter your credentials <br></br>to access your account </h4>
                </div>
                <div id="choice">
                       <input type="radio"
                          id="option1" 
                          name="usertype"
                          value="option1"
                         checked={selectedvalue === 'option1'}
                         onChange={handleradio} 
                        

                       ></input>
                       <label for="pat" className="lchoice" >patient</label>
                       <input type="radio" 
                       id="option2" 
                       name="usertype"
                       value="option2"
                       checked={selectedvalue === 'option2'}
                       onChange={handleradio} 
                       
                       
                      
                       ></input>
                       <label for="dc" className="lchoice" >Diagno center</label>
                    </div>
                <div id="loginopt">
                <button className="loginopt1">Login with google</button>
                <button className="loginopt2">Login with apple</button>

                </div>
                <h3>or</h3>
                <div id="rform">
                    
                    <div className="rformfeild">
                    <label id="rname"><strong>username</strong></label><br></br><br></br>
                    <input type="text"  id="rnameinp" onChange={handleChange} name="username" ></input><br></br><br></br>

                    </div>
                    <div className="rformfield">
                        <label id="remail"><strong>Email Address</strong></label><br></br><br></br>
                        <input type="text" id="remailinp" onChange={handleChange} name="email"></input><br></br><br></br>

                    </div>
                    
                    <div className="rformfield">
                        <label id="rmobilenumber" ><strong>Mobile number</strong></label><br></br><br></br>
                        <PhoneInput 
                          country={'in'}
                          placeholder="Enter your Number"
                          inputProps={{
                            id:"rmobilenumberinp",
                            name:"mobileno"

                          }
                          

                          }
                          onChange={handlephonechange}

                          ></PhoneInput><br></br><br></br>
                    </div>
                    {/* <PhoneNumberInput></PhoneNumberInput> */}
                    <div className="rformfield">
                        <label id="rpassword"><strong>password</strong></label><br></br><br></br>
                        <input type="password"  id="rpasswordinp" onChange={handleChange} name="password"></input>

                    </div>
                    <div className="termsandconditions">
                    <input type="checkbox" for="terms" id="termsinp" ></input>
                    <label id="terms">agree to terms and conditions</label>
                       

                    </div>

                 
                   
                    <button id="registerbutton" onClick={()=>{
                        onsubmit(formdata);
                    }}>Register</button>
                    <div  style={{marginLeft:'14vw',marginTop:'2vh',color:'red'}}>{errortext}</div>
                    <div style={{marginLeft:'14vw',marginTop:'2vh',color:'green'}}>{issuccess}</div>
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