import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faInstagram,faSquareFacebook,faLinkedin,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate, useLocation, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";

function Firstdis(props)
{
 
  const [locationinp,setlocationinp]=useState({});
  const [nearestlocations,setnearestlocations]=useState([]);
  const Navigate=useNavigate();
 

  
 
  
    function handlelocinpchange(e) {
      // console.log("here");
      const { name, value } = e.target;
      setlocationinp(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  
  // function handlesearchloc(data)
  // {
  //   // axios.get(`${URL}`,data).then(
  //   //   (res)=>{
  //   //     console.log(data);
  //   //     setnearestlocations(res);
  //   //   }
  //   // ).catch(
  //   //   (err)=>{
  //   //     console.log(err);
  //   //   }
  //   // )
  //   Navigate('/fnc')
    
  // } 
 
  return(
    <div>
      <div id="firstdis1">
          
        
          <div id="content">
              <h1>Find The Best Diagnosis Services Near You</h1>
          </div> 
          <div id="img">
            

          </div>
        
        
      



      </div>
      <hr id="hrl"></hr>
      <div id="firstdisadd1">
      <div id="locationd">
                {/* <div id="dateinpdiv"></div> */}
                <input type="date" id="dateinp" name="date"
                 onChange={(e)=>{
                  handlelocinpchange(e);}}
                  ></input>
                <input type="text" placeholder="Enter Your Location" id="locationinp" 
                 onChange={(e)=>{
                  handlelocinpchange(e);}}
               name="location"></input>
              
                <input type="text" id="testinp" placeholder="enter the test you need" name="test"
                 onChange={(e)=>{
                  handlelocinpchange(e);}}
                  ></input>

                <Link to= "/fnc" state={locationinp}><button id="locsub" >Search</button></Link>
               
                
            </div>
      </div>
      
     
      <div id="firstdis2">
        <div id="b1"><h1>Get Tested: Easy Online Booking For Quick Results </h1></div>
        <div id="b2">
          <h2>Skip the wait,priortize your health.Get accurate diagnoses at convinient </h2>
          <h2>Clinics,anytime,anywhere</h2>

        </div>
        
      


      </div>
      <div id="firstdis3">
        <div id="three">
          <img src="/Group 26.png"></img>
          <img src="/Group 27.png"></img>
          <img src="/Group 28.png"></img>
          
        </div>
        <div id="two">
          <img src="/Group 29.png"></img>
          <img src="/Group 30.png"></img>
          
          
        </div>

         </div>
      {/* <div id="firstdis4"> 
        <div id="firstdis4l">
          <h1>Tired of jugling appointments and lab visits</h1>
          <h2>We Get it Introducing <span id="span"> Diagnostic Docs</span></h2>
          <div id="list">
            <ul>
            <li>Your online portal to a smoother healthcare </li>
            <li>Book appointments,explore tests and access results-all from the comfort of your home</li>
            </ul>
          </div>
        </div>
        <div id="firstdis4r">
          <img src="../../image 1.png"></img>
          
        </div>


      
      </div>
      <div id="firstdis5"> 
        <div id="firstdis5l"><img src="../../pexels-photo-5452268 1.png"></img></div>
        <div id="firstdis5r">
          <h1>What After Test Results?</h1>
          <ul>
            <li>Providing expert support sysytem</li>
            <li>Schedule a consultation with a qualified doctor after your result</li>
            <li>Get special offer in Regular Checkup and family checkup</li>
          </ul>
          <button>Book Now</button>
          
        </div>



      
      </div> */}
      <div id="firstdis6">
        <div id="firstdis6l">
          <h2>Customer Feedback</h2>
          <h3>card subtitle</h3>
          <p>Lorem Ipsum" is a placeholder text commonly used in the graphic, print, and web design industries. It is derived from a scrambled section of Latin text from "de Finibus Bonorum et Malorum," a work by Cicero written in 45 BC. The primary purpose of Lorem Ipsum is to provide a neutral filler text that doesn't distract viewers with readable content, allowing them to focus on the design and layout.</p>
        </div>
        <div id="firstdis6m">
         <h2>Customer Feedback</h2>
         <h3>card subtitle</h3>
         <p>Lorem Ipsum" is a placeholder text commonly used in the graphic, print, and web design industries. It is derived from a scrambled section of Latin text from "de Finibus Bonorum et Malorum," a work by Cicero written in 45 BC. The primary purpose of Lorem Ipsum is to provide a neutral filler text that doesn't distract viewers with readable content, allowing them to focus on the design and layout.</p>
        </div>
        <div id="firstdis6r">
         <h2>Customer Feedback</h2>
         <h3>card subtitle </h3>
         <p>Lorem Ipsum" is a placeholder text commonly used in the graphic, print, and web design industries. It is derived from a scrambled section of Latin text from "de Finibus Bonorum et Malorum," a work by Cicero written in 45 BC. The primary purpose of Lorem Ipsum is to provide a neutral filler text that doesn't distract viewers with readable content, allowing them to focus on the design and layout.</p>
        </div>

      </div>
      <div id="firstdis7">
       <div id="firstdis7t">
          <div id="firstdis7t1">
            <h3>About diagnostic doc</h3>
            <h3>Doctor Guidance</h3>
            <h3>Community Support</h3>

          </div>
          <div id="firstdis7t2">
          <h3>Location Access</h3>
            <h3>Partnership</h3>
            <h3>virtual reports</h3>

          </div>
          <div id="firstdis7t3">
          <h3>contact us</h3>
            <h3>careers</h3>
            <h3>Hospitality</h3>


            </div>
            <div id="firstdis7t4">
            {/* <FontAwesomeIcon icon={} /> */}
            {/* <FontAwesomeIcon icon="fa-brands fa-square-facebook" /> */}
            <div id="icons">
              {/* <FontAwesomeIcon icon={faSquareFacebook} size="2x" /> */}
               <img src="/Facebook.png"></img>
               <img src="/Instagram.png"></img>
               <img src="/Linkedin.png"></img>
               <img src="/Twitter.png"></img>
               

            </div>
           
           
           



           </div>

        </div> 
       <div id="firstdis7b">
       
        <h3> nextcare2022</h3>
        <h3>Term of use</h3>
        <h3>Privacy Policy</h3>
        <h3>Customer Service +9100000000</h3>
        


       </div>
      </div>
    
    </div>
  )
}
export default Firstdis;