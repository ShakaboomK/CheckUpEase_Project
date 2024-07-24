import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
function Navbar(props)
{
    console.log(props);
    return(
        <div id="navbar">
          <div id="nom">
            <div>
                    <Link to="/" style={{textDecoration:'none'}}><h1>Diagno Doc</h1></Link>
                </div>
                {/* <div id="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder="search" id="inf" style={{marginLeft:'35px'}}></input>
                    

                </div> */}

          </div>
          <div id="com">
          <div className="navitems">
                <Link to="fnc" style={{textDecoration:'none',color:'black'}}><h3 style={{fontSize:'1vw',fontFamily:''}}><strong>My Bookings</strong></h3></Link>
            </div>
            <div className="navitems">
                <Link to="/pyv" style={{textDecoration:'none' ,color:'black'}}><h3 style={{fontSize:'1vw'}}><strong>Results</strong></h3></Link>
            </div>
            
            
            {
                props.isloggedin?<div id="nesnavitems">

                    
                    <div className="navitems"><Link to="/account" style={{textDecoration:'none',color:'black'}}><FontAwesomeIcon icon={faUser} /> <strong>My Account</strong></Link></div>
                   </div> 
                   
                :<div className="nesnavitems">
                <Link to="/register" style={{textDecoration:'none',color:'black'}}><h3 style={{fontSize:'1vw'}}><strong>Login/Signup</strong></h3></Link>
            </div>
            } 


          </div>
            {/* <div>
                <Link to="/"><img className="logo" src="../../screenshot (38) 1.png"></img></Link>
            </div>
            <div id="search">
                <input type="text" placeholder="search" id="inf"></input>

            </div> */}
            {/* <div className="navitems">
                <Link to="fnc" style={{textDecoration:'none',color:'black'}}><h3 style={{fontSize:'1vw'}}><strong>Find Nearest Center</strong></h3></Link>
            </div>
            <div className="navitems">
                <Link to="/pyv" style={{textDecoration:'none' ,color:'black'}}><h3 style={{fontSize:'1vw'}}><strong>Plan Your Visit</strong></h3></Link>
            </div>
            <div className="navitems">
                <Link to="/ydr" style={{textDecoration:'none', color:'black'}}><h4 style={{fontSize:'1vw'}}><strong>Your Diagnosis Result</strong></h4></Link>
            </div>
            <div className="navitems">
                <Link to="/rcu" style={{textDecoration:'none',color:'black'}}><h3 style={{fontSize:'1vw'}}><strong>Regular Checkup</strong></h3></Link>
            </div>
            {
                props.isloggedin?<div id="nesnavitems">

                    <div className="navitems" ><Link to="/register" style={{textDecoration:'none',color:'black'}}><h3 style={{fontSize:'1vw'}}><strong>Pricing</strong></h3></Link></div>
                    <div className="navitems"><Link to="/register" style={{textDecoration:'none',color:'black'}}><FontAwesomeIcon icon={faUser} /></Link></div>
                   </div> 
                   
                :<div className="navitems">
                <Link to="/register" style={{textDecoration:'none',color:'black'}}><h3 style={{fontSize:'1vw'}}><strong>Login/Signup</strong></h3></Link>
            </div>
            }  */}

        </div>
    )
}
export default Navbar;