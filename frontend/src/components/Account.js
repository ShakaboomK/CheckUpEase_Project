import React from "react";
import "../styles/Account.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, NavLink} from "react-router-dom";
import { Outlet ,useLocation} from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
export function Personalinformation(){

    return(
        <div>
            
            <div className="arighttdiv">

            <h1>Personal Information</h1>
            <h3>Manage your personal information here</h3>
            </div>
            <div className="arightbdiv">
               <div id="tnameinp">
                <div id="fninpdiv">
                    <label id="fninpl">First Name</label><br></br>
                    <input type="text" id="fninp"></input>
                 </div>
                <div id="mninpdiv">
                    <label id="mninpl">Middle Name</label><br></br>
                    <input type="text" id="mninp"></input>
                </div>
             </div>   
                <div id="lnameinpdiv">
                    <label id="lnameinpl">Last Name</label><br></br>
                    <input type="text" id="lnameinp"></input>

               
               </div>
              
               <div id="passwordinpdiv">
                    <label id="passwordinpl">password</label><br></br>
                    <input type="password" id="passwordinp"></input>

               
               </div>
               <div id="mnoinpdiv">
                    <label id="mnoameinpl">Mobile Number</label><br></br>
                    <input type="text"  id="mnoinp"></input>

               
               </div>
               <div id="dbginp">
                 <div id="dbinpdiv">
                    <label id="dbinpl">Date Of Birth</label><br></br>
                    <input type="date" id="dbinp"></input>

                </div>
                 <div id="genderinpdiv">
                   <label id="genderinpl" for="genderinp">Gender</label><br></br>
                   <select id="genderinp">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>


                </div>

            </div>
           
                <div id="eaddress1">
                    <div id="addressinpdiv">
                        <label id="addressinpl">Address</label><br></br>
                        <input type="text" id="addressinp"></input>

                    </div>
                    <div id="countryinpdiv">
                        <label id="countryinpl">country</label><br></br>
                        <input type="text" id="countryinp"></input>

                    </div>
                   

                </div>
                <div id="eaddress2">
                    <div id="stateinpdiv">
                        <label id="stateinpl">State</label><br></br>
                        <input type="text" id="stateinp"></input>
                    </div>
                    <div id="cityinpdiv">
                        <label id="cityinpl">City</label><br></br>
                        <input type="text" id="cityinp"></input>
                    </div>
                    <div id="pcinpdiv">
                        <label id="pcinpl">Pincode</label><br></br>
                        <input type="number" id="pcinp"></input>
                    </div>
                </div>
                <button id="editprofile">Edit Profile</button>

            
               


        </div>
    </div>
    )
}
export function  Familymembers(){
    const fm=["member1","member2","member3","member4"]
    return(
        <div>
            
            <div className="arighttdiv">
                <h1>Family members</h1>
                </div>
            <div className="arightbdiv">
                <div id="familybuttons">
                    {/* <button className="familymember">family member1</button>
                    <button className="familymember">family member2</button>
                    <button className="familymember">family member3</button>
                    <button className="familymember">family member4</button> */}
                    {
                        fm.map((item,index)=>{
                            return(
                                <button className="familymember">{item}</button>
                            )
                    })
                }

                 </div>
                 <div>
                    <button id="addmember">Add Member  <FontAwesomeIcon icon={faPlus} /></button></div>
            </div>
            
        </div>    
    )
}
export function Bookings(){
    const bookings = [
        { centerName: 'Center A', date: '2024-07-22', testName: 'Blood Test' },
        { centerName: 'Center B', date: '2024-08-10', testName: 'X-Ray' },
        { centerName: 'Center C', date: '2024-09-15', testName: 'MRI' },
      ];

    return(
    <div>

        
        <div className="arighttdiv">
            <h1>Billing and Payments</h1>
            <h4>Billing and Payment Details</h4>
        </div>
        <div className="arightbdiv">
             <button id="bna" onClick={()=>{
                
             }}>Book New Appointment  <FontAwesomeIcon icon={faPlus} id="fip" /></button>
             <div id="bkstablediv">
                <table id="bkstable">
                    <tr id="tmh">
                    <th>Center Name</th>
                    <th>Date</th>
                    <th>Test Name</th>

                    </tr>
                    {
                    bookings.map((booking,index)=>(
                    
                        <tr>
                            <td>{booking.centerName}</td>
                            <td>{booking.date}</td>
                            <td>{booking.testName}</td>

                        </tr>
                    

                    ))

                    
                }
            
                    
                    

                </table>
            </div>
           
        </div>
    </div>    
    )
}
export function Results(){
    const Results = [
        { centerName: 'Center A', date: '2024-07-22', testName: 'Blood Test',resultDate:'2024-10-14',result:"good" },
        { centerName: 'Center B', date: '2024-08-10', testName: 'X-Ray',resultDate:'2024-08-10',result:"good"  },
        { centerName: 'Center C', date: '2024-09-15', testName: 'MRI',resultDate:'2024-12-30',result:"bad"  },
      ];
    return(
       <div>

       
        <div className="arighttdiv">
           <h1>Results</h1>
          
        </div>
        <div className="arightbdiv">
        <div id="bkstablediv">
                <table id="bkstable">
                    <tr id="tmh">
                    <th>Center Name</th>
                    <th>Date</th>
                    <th>Test Name</th>
                    <th>Result Date</th>
                    <th>Report</th>

                    </tr>
                    {
                    Results.map((Result,index)=>(
                    
                        <tr>
                            <td>{Result.centerName}</td>
                            <td>{Result.date}</td>
                            <td>{Result.testName}</td>
                            <td>{Result.resultDate}</td>
                            <td>Download <FontAwesomeIcon icon={faDownload} /></td>

                        </tr>
                    

                    ))

                    
                }
            
                    
                    

                </table>
            </div>

        </div>
        
      </div>  
    )
}
function Account(props){
    console.log("inaccount",props);
    const location = useLocation();
    const isSubRoute = ["/personalinformation", "/familymembers", "/billingandpayments", "/yourvisits"].some(path => location.pathname.includes(path));
    return(
        <div>
            <h1 id="amheading">DiagnoDoc Account </h1>
            <hr></hr>
            <div id="accountdiv">
                <div id="aleft">
                    <div id="usermaininfo">
                        <div>
                            <img id="userp" src="../../projectuser.jpg"></img>
                        </div>
                        <div id="userdetails">
                            <h2 id="aname"><strong>Dr. John Doe</strong></h2>
                            <h3 id="aemail">abc@gmail.com</h3>
                        
                        </div>

                    </div>
                    <div id="usermoreinfo">

                        <NavLink style={{textDecoration:'none',color:"black"} } to="personalinformation" activeClassName="active-link"><h2><strong>Profile</strong></h2></NavLink>
                        <NavLink style={{textDecoration:'none',color:"black"}} to="familymembers" activeClassName="active-link"><h2><strong>Members</strong></h2></NavLink>
                        <NavLink style={{textDecoration:'none',color:"black"}} to="billingandpayments" activeClassName="active-link"><h2><strong>My Bookings</strong></h2></NavLink>
                        <NavLink style={{textDecoration:'none',color:"black"}} to="yourvisits" activeClassName="active-link"><h2><strong>Results</strong></h2></NavLink>
                      
                    </div>
                    <Link to="/"  id="signout"><FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" /></Link>


                     
                
                </div>
                <div id="aright">
                    
                    {
                        isSubRoute?(<Outlet></Outlet>):
                        (<div id="empty">
                            <h1>Your Information will be displayed here</h1>
                            
                            </div>)

                    }
                    
                   
                </div>

                    
                  
                   

                    
                    
             </div>

               
            </div>
           
        // </div>
    )
}
export default Account;