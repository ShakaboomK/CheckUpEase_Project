import React,{useState,useEffect,useContext} from "react";
import "../styles/Login.css";
import {Link, Navigate, useNavigate} from "react-router-dom";
import axios  from "axios";
import { UserContext } from "./context";
function Login(props)
{
    const URL="http://localhost:8000/user";
    const { setUser } = useContext(UserContext);
    const [formdata,setformdata]=useState({});
    // const [error,setrerror]=useState(false);
    const [errortext,seterrortext]=useState("");
    console.log(formdata);
    const Navigate=useNavigate();
    const [testdata,settestdata]=useState(null);
    console.log("testdata",testdata);


    function handlechange(e){
        const newdata=Object.assign({},formdata);
        newdata[e.target.name]=e.target.value;
        setformdata(newdata);

    }
    function handlelogin(data){
        console.log(data);
        axios.post(`${URL}/login`,data).then(
            (res)=>{
                setUser(res.data.userDoc._fieldsProto)
                console.log(res.data.userDoc._fieldsProto);
                settestdata(res.data.userDoc._fieldsProto);
                seterrortext("");
                // Navigate('/',{state:{details:testdata}});
            }
        ).catch(
            (error)=>{
                

                seterrortext(error.response.data);
                console.log("inerror....");
                console.log(error.response.data);

                // console.log(error);
                
            }
        )
    }
    useEffect(() => {
        if (testdata) {
            console.log("Navigating with testdata:", testdata);
            Navigate('/', { state: { details: testdata } });
        }
    }, [testdata, Navigate]);
    // function handlelogin(data) {
    //     console.log("handleLogin called with data:", data);
    //     axios.post(`${URL}/login`, data).then(
    //         (res) => {
    //             console.log("Response data:", res.data);
    //             console.log("Response data userDoc:", res.data.userDoc);
    //             console.log("Response data userDoc fieldsProto:", res.data.userDoc._fieldsProto);
    //             settestdata(res.data.userDoc._fieldsProto);
    //             seterrortext("");
    //         }
    //     ).catch(
    //         (error) => {
    //             console.log("Error:", error);
    //             seterrortext(error.response.data);
    //         }
    //     );
    // }

        

    
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
                        <label id="lemail"><strong>username</strong></label><br></br>
                        <input type="text"  id="lemailinp" onChange={handlechange} name="username"></input><br></br>
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
                    <div  style={{marginLeft:'14vw',marginTop:'2vh',color:'red'}}>{errortext}</div>
                    

                    <div id="redirectr">
                            <h4>Dont have account? <Link to="/register" >signup</Link></h4>
                           
                    </div>
                     
                    
                    
                  
                </div>
            </div>
            <div id="Lright"></div>

        </div>
    )
}

export default Login;