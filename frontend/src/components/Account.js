// import React,{useState,useEffect, useContext} from "react";
// import "../styles/Account.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {Link, NavLink} from "react-router-dom";
// import { Outlet ,useLocation} from "react-router-dom";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
// import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// import { UserContext } from "./context";
// import axios from "axios";

// export function Personalinformation(){
   
//     const {user}=useContext(UserContext);
//     // console.log(`pi state ${state}`)
   
//     const [formdata,setformdata]=useState(user||{});
//     console.log("formdata in pi",formdata);
//     function handlechange(e){
//         const newdata=Object.assign({},formdata);
//         newdata[e.target.name]["stringValue"]=e.target.value||"";
//         setformdata(newdata);


//     }
//     function handlechanged(e)
//     {
//         const newdata=Object.assign({},formdata);
//         newdata[e.target.name]["stringValue"]=e.target.value||"";
//         setformdata(newdata);
       
//     }


    
    

//     return(
//         <div>
            
//             <div className="arighttdiv">

//             <h1>Personal Information</h1>
//             <h3>Manage your personal information here</h3>
//             </div>
//             <div className="arightbdiv">
               
              
//                 <div id="lnameinpdiv">
//                     <label id="lnameinpl" > Name</label><br></br>
//                     <input type="text" id="lnameinp" name="username" 
//                     onChange={handlechange}
//                     value={formdata["username"]["stringValue"]||""}

                    
//                         >

//                     </input>

               
//                </div>
              
//                <div id="passwordinpdiv">
//                     <label id="passwordinpl">password</label><br></br>
//                     <input type="password" id="passwordinp" name="password"  onChange={handlechange}  value={formdata["password"]["stringValue"]||{}}></input>

               
//                </div>
//                <div id="mnoinpdiv">
//                     <label id="mnoameinpl">Mobile Number</label><br></br>
//                     <input type="text"  id="mnoinp" name="mobileNumber"  onChange={handlechange}  value={formdata["mobileNumber"]["stringValue"]||{}}></input>

               
//                </div>
//                <div id="dbginp">
//                  <div id="dbinpdiv">
//                     <label id="dbinpl">Date Of Birth</label><br></br>
//                     <input type="date" id="dbinp" name="dateofbirth"  onChange={handlechange}></input>

//                 </div>
//                  <div id="genderinpdiv">
//                    <label id="genderinpl" for="genderinp"  >Gender</label><br></br>
//                    <select id="genderinp" name="gender"  onChange={handlechanged}>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                     </select>


//                 </div>

//             </div>
           
//                 <div id="eaddress1">
//                     <div id="addressinpdiv">
//                         <label id="addressinpl">Address</label><br></br>
//                         <input type="text" id="addressinp"></input>

//                     </div>
//                     <div id="countryinpdiv">
//                         <label id="countryinpl">country</label><br></br>
//                         <input type="text" id="countryinp"></input>

//                     </div>
                   

//                 </div>
//                 <div id="eaddress2">
//                     <div id="stateinpdiv">
//                         <label id="stateinpl">State</label><br></br>
//                         <input type="text" id="stateinp"></input>
//                     </div>
//                     <div id="cityinpdiv">
//                         <label id="cityinpl">City</label><br></br>
//                         <input type="text" id="cityinp"></input>
//                     </div>
//                     <div id="pcinpdiv">
//                         <label id="pcinpl">Pincode</label><br></br>
//                         <input type="number" id="pcinp"></input>
//                     </div>
//                 </div>
//                 <button id="editprofile">Edit Profile</button>

            
               


//         </div>
//     </div>
//     )
// }
// export function  Familymembers(){
//     // const location=useLocation();
//     // const state=location.state;
//     // console.log(`location state of fm ${state}`);
//     const fm=["abc","bcd","cde"];

   
//     return(
//         <div>
            
//             <div className="arighttdiv">
//                 <h1>Family members</h1>
//                 </div>
//             <div className="arightbdiv">
//                 <div id="familybuttons">
//                     {/* <button className="familymember">family member1</button>
//                     <button className="familymember">family member2</button>
//                     <button className="familymember">family member3</button>
//                     <button className="familymember">family member4</button> */}
//                     {
//                         fm.map((item,index)=>{
//                             return(
//                                 <button className="familymember" key={index}>{item}</button>
//                             )
//                     })
//                 }

//                  </div>
//                  <div>
//                     <button id="addmember">Add Member  <FontAwesomeIcon icon={faPlus} /></button></div>
//             </div>
            
//         </div>    
//     )
// }
// export function Bookings(){
//     const bookings = [
//         { centerName: 'Center A', date: '2024-07-22', testName: 'Blood Test' },
//         { centerName: 'Center B', date: '2024-08-10', testName: 'X-Ray' },
//         { centerName: 'Center C', date: '2024-09-15', testName: 'MRI' },
//       ];

//     return(
//     <div>

        
//         <div className="arighttdiv">
//             <h1>Billing and Payments</h1>
//             <h4>Billing and Payment Details</h4>
//         </div>
//         <div className="arightbdiv">
//              <button id="bna" onClick={()=>{
                
//              }}>Book New Appointment  <FontAwesomeIcon icon={faPlus} id="fip" /></button>
//              <div id="bkstablediv">
//                 <table id="bkstable">
//                     <tr id="tmh">
//                     <th>Center Name</th>
//                     <th>Date</th>
//                     <th>Test Name</th>

//                     </tr>
//                     {
//                     bookings.map((booking,index)=>(
                    
//                         <tr>
//                             <td>{booking.centerName}</td>
//                             <td>{booking.date}</td> 
//                             <td>{booking.testName}</td>

//                         </tr>
                    

//                     ))

                    
//                 }
            
                    
                    

//                 </table>
//             </div>
           
//         </div>
//     </div>    
//     )
// }
// export function Results(){
//     const Results = [
//         { centerName: 'Center A', date: '2024-07-22', testName: 'Blood Test',resultDate:'2024-10-14',result:"good" },
//         { centerName: 'Center B', date: '2024-08-10', testName: 'X-Ray',resultDate:'2024-08-10',result:"good"  },
//         { centerName: 'Center C', date: '2024-09-15', testName: 'MRI',resultDate:'2024-12-30',result:"bad"  },
//       ];
//     return(
//        <div>

       
//         <div className="arighttdiv">
//            <h1>Results</h1>
          
//         </div>
//         <div className="arightbdiv">
//         <div id="bkstablediv">
//                 <table id="bkstable">
//                     <tr id="tmh">
//                     <th>Center Name</th>
//                     <th>Date</th>
//                     <th>Test Name</th>
//                     <th>Result Date</th>
//                     <th>Report</th>

//                     </tr>
//                     {
//                     Results.map((Result,index)=>(
                    
//                         <tr>
//                             <td>{Result.centerName}</td>
//                             <td>{Result.date}</td>
//                             <td>{Result.testName}</td>
//                             <td>{Result.resultDate}</td>
//                             <td>Download <FontAwesomeIcon icon={faDownload} /></td>

//                         </tr>
                    

//                     ))

                    
//                 }
            
                    
                    

//                 </table>
//             </div>

//         </div>
        
//       </div>  
//     )
// }
// function Account(props){
   
   

//      const [userdata,setUserData]=useState({});
    

//     const location = useLocation();
//     // const state=location.state;
 
//     const isSubRoute = ["/personalinformation", "/familymembers", "/billingandpayments", "/yourvisits"].some(path => location.pathname.includes(path));
//     const URL="http://localhost:8000/user";
//     const {user}=useContext(UserContext);
//     console.log("in acc con",user["username"]["stringValue"]);
//     const username = user?.username?.stringValue || "User";
//     const email = user?.email?.stringValue || "Email";
//     // console.log("user name in acc",user);
    

//     // useEffect(() => {
//     //     async function fetchUserData() {
//     //         try {
//     //             const response = await axios.get(`${URL}/userdata`); // Replace with your actual endpoint
//     //             setUserData(response.data);
//     //         } catch (error) {
//     //             console.error('Error fetching user data:', error);
//     //         }
//     //     }

//     //     fetchUserData();
//     // }, []);
//     return(
        
//         <div>
//             <h1 id="amheading">DiagnoDoc Account </h1>
//             <hr></hr>
//             <div id="accountdiv">
//                 <div id="aleft">
//                     <div id="usermaininfo">
//                         <div>
//                             <img id="userp" src="../../projectuser.jpg"></img>
//                         </div>
//                         <div id="userdetails">
//                             <h2 id="aname"><strong>{username}</strong></h2>
//                             <h3 id="aemail"><strong>{email}</strong></h3>
                        
//                         </div>

//                     </div>
//                     <div id="usermoreinfo">

//                         <NavLink style={{textDecoration:'none',color:"black"} } to="personalinformation"  activeClassName="active-link"><h2><strong>Profile</strong></h2></NavLink>
//                         <NavLink style={{textDecoration:'none',color:"black"}} to="familymembers"   activeClassName="active-link"><h2><strong>Members</strong></h2></NavLink>
//                         <NavLink style={{textDecoration:'none',color:"black"}} to="billingandpayments" activeClassName="active-link"><h2><strong>My Bookings</strong></h2></NavLink>
//                         <NavLink style={{textDecoration:'none',color:"black"}} to="yourvisits" activeClassName="active-link"><h2><strong>Results</strong></h2></NavLink>
                      
//                     </div>
//                     <Link to="/"  id="signout"><button onClick={()=>{
//                         props.sst();
//                     }}><FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" /></button></Link>


                     
                
//                 </div>
//                 <div id="aright">
                    
//                     {
//                         isSubRoute?(<Outlet></Outlet>):
//                         (<div id="empty">
//                             <h1>Your Information will be displayed here</h1>
                            
//                             </div>)

//                     }
                    
                   
//                 </div>

                    
                  
                   

                    
                    
//              </div>

               
//             </div>
           
//         // </div>
//     )
// }
// export default Account;
import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "../styles/Account.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDownload, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from "./context";
import axios from "axios";

// Personal Information Component
export function Personalinformation() {
    const { user } = useContext(UserContext);
    const [formData, setFormData] = useState(user || {});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: { stringValue: value }
        }));
    };

    return (
        <div>
            <div className="arighttdiv">
                <h1>Personal Information</h1>
                <h3>Manage your personal information here</h3>
            </div>
            <div className="arightbdiv">
                <div id="lnameinpdiv">
                    <label id="lnameinpl">Name</label><br />
                    <input
                        type="text"
                        id="lnameinp"
                        name="username"
                        onChange={handleChange}
                        value={formData["username"]?.stringValue || ""}
                    />
                </div>
                <div id="passwordinpdiv">
                    <label id="passwordinpl">Password</label><br />
                    <input
                        type="password"
                        id="passwordinp"
                        name="password"
                        onChange={handleChange}
                        value={formData["password"]?.stringValue || ""}
                    />
                </div>
                <div id="mnoinpdiv">
                    <label id="mnoameinpl">Mobile Number</label><br />
                    <input
                        type="text"
                        id="mnoinp"
                        name="mobileNumber"
                        onChange={handleChange}
                        value={formData["mobileNumber"]?.stringValue || ""}
                    />
                </div>
                <div id="dbginp">
                    <div id="dbinpdiv">
                        <label id="dbinpl">Date Of Birth</label><br />
                        <input
                            type="date"
                            id="dbinp"
                            name="dateofbirth"
                            onChange={handleChange}
                        />
                    </div>
                    <div id="genderinpdiv">
                        <label id="genderinpl" htmlFor="genderinp">Gender</label><br />
                        <select
                            id="genderinp"
                            name="gender"
                            onChange={handleChange}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <div id="eaddress1">
                    <div id="addressinpdiv">
                        <label id="addressinpl">Address</label><br />
                        <input type="text" id="addressinp" />
                    </div>
                    <div id="countryinpdiv">
                        <label id="countryinpl">Country</label><br />
                        <input type="text" id="countryinp" />
                    </div>
                </div>
                <div id="eaddress2">
                    <div id="stateinpdiv">
                        <label id="stateinpl">State</label><br />
                        <input type="text" id="stateinp" />
                    </div>
                    <div id="cityinpdiv">
                        <label id="cityinpl">City</label><br />
                        <input type="text" id="cityinp" />
                    </div>
                    <div id="pcinpdiv">
                        <label id="pcinpl">Pincode</label><br />
                        <input type="number" id="pcinp" />
                    </div>
                </div>
                <button id="editprofile">Edit Profile</button>
            </div>
        </div>
    );
}

// Family Members Component
export function Familymembers() {
    
    const { user } = useContext(UserContext);
    
    console.log("familymembers",user["familyMembers"]["arrayValue"]["values"]);
    
    const initialFamilyMembers = user["familyMembers"]?.["arrayValue"]?.["values"] || [];
    const [familyMembers, setFamilyMembers] = useState(initialFamilyMembers);
   

    const [isselected,setisselected]=useState(false);
    const [formData, setFormData] = useState(user || {});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: { stringValue: value }
        }));
    };
    function handleadd()
    {
        console.log("in handleadd",familyMembers);
        console.log("username",formData["username"]["stringValue"]);
        const updatedFamilyMembers = [...familyMembers, formData["username"]["stringValue"]];
            setFamilyMembers(updatedFamilyMembers); // Update the state
            setisselected(false); 
        console.log("in handleadd",familyMembers);


    }


    return (
        <div>
            <div className="arighttdiv">
                <h1>Family Members</h1>
            </div>
            <div className="arightbdiv">
                <div id="familybuttons">
                    {familyMembers.map((item, index) => (
                        <button className="familymember" key={index}>{item}</button>
                    ))}
                </div>
                <div>
                    <button id="addmember" onClick={()=>{
                        setisselected(true);
                    }}>
                        Add Member <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                {
                    isselected &&  <div className="arightbdiv">
                    <div id="lnameinpdiv">
                        <label id="lnameinpl">Name</label><br />
                        <input
                            type="text"
                            id="lnameinp"
                            name="username"
                            onChange={handleChange}
                            value={formData["username"]?.stringValue || ""}
                        />
                    </div>
                    <div id="passwordinpdiv">
                        <label id="passwordinpl">Password</label><br />
                        <input
                            type="password"
                            id="passwordinp"
                            name="password"
                            onChange={handleChange}
                            value={formData["password"]?.stringValue || ""}
                        />
                    </div>
                    <div id="mnoinpdiv">
                        <label id="mnoameinpl">Mobile Number</label><br />
                        <input
                            type="text"
                            id="mnoinp"
                            name="mobileNumber"
                            onChange={handleChange}
                            value={formData["mobileNumber"]?.stringValue || ""}
                        />
                    </div>
                    <div id="dbginp">
                        <div id="dbinpdiv">
                            <label id="dbinpl">Date Of Birth</label><br />
                            <input
                                type="date"
                                id="dbinp"
                                name="dateofbirth"
                                onChange={handleChange}
                            />
                        </div>
                        <div id="genderinpdiv">
                            <label id="genderinpl" htmlFor="genderinp">Gender</label><br />
                            <select
                                id="genderinp"
                                name="gender"
                                onChange={handleChange}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div id="eaddress1">
                        <div id="addressinpdiv">
                            <label id="addressinpl">Address</label><br />
                            <input type="text" id="addressinp" />
                        </div>
                        <div id="countryinpdiv">
                            <label id="countryinpl">Country</label><br />
                            <input type="text" id="countryinp" />
                        </div>
                    </div>
                    <div id="eaddress2">
                        <div id="stateinpdiv">
                            <label id="stateinpl">State</label><br />
                            <input type="text" id="stateinp" />
                        </div>
                        <div id="cityinpdiv">
                            <label id="cityinpl">City</label><br />
                            <input type="text" id="cityinp" />
                        </div>
                        <div id="pcinpdiv">
                            <label id="pcinpl">Pincode</label><br />
                            <input type="number" id="pcinp" />
                        </div>
                    </div>
                    <button id="editprofile" onClick={()=>{
                       
                        
                        setisselected(false);
                        handleadd();
                    }}>Add</button>
                </div>
                }
                

            </div>
        </div>
    );
}

// Bookings Component
export function Bookings() {
    const bookings = [
        { centerName: 'Center A', date: '2024-07-22', testName: 'Blood Test' },
        { centerName: 'Center B', date: '2024-08-10', testName: 'X-Ray' },
        { centerName: 'Center C', date: '2024-09-15', testName: 'MRI' },
    ];

    return (
        <div>
            <div className="arighttdiv">
                <h1>Billing and Payments</h1>
                <h4>Billing and Payment Details</h4>
            </div>
            <div className="arightbdiv">
                <button id="bna">
                    Book New Appointment <FontAwesomeIcon icon={faPlus} id="fip" />
                </button>
                <div id="bkstablediv">
                    <table id="bkstable">
                        <thead>
                            <tr id="tmh">
                                <th>Center Name</th>
                                <th>Date</th>
                                <th>Test Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr key={index}>
                                    <td>{booking.centerName}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.testName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// Results Component
export function Results() {
    const results = [
        { centerName: 'Center A', date: '2024-07-22', testName: 'Blood Test', resultDate: '2024-10-14', result: 'Good' },
        { centerName: 'Center B', date: '2024-08-10', testName: 'X-Ray', resultDate: '2024-08-10', result: 'Good' },
        { centerName: 'Center C', date: '2024-09-15', testName: 'MRI', resultDate: '2024-12-30', result: 'Bad' },
    ];

    return (
        <div>
            <div className="arighttdiv">
                <h1>Results</h1>
            </div>
            <div className="arightbdiv">
                <div id="bkstablediv">
                    <table id="bkstable">
                        <thead>
                            <tr id="tmh">
                                <th>Center Name</th>
                                <th>Date</th>
                                <th>Test Name</th>
                                <th>Result Date</th>
                                <th>Report</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result, index) => (
                                <tr key={index}>
                                    <td>{result.centerName}</td>
                                    <td>{result.date}</td>
                                    <td>{result.testName}</td>
                                    <td>{result.resultDate}</td>
                                    <td>Download <FontAwesomeIcon icon={faDownload} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// Main Account Component
function Account(props) {
    const { user } = useContext(UserContext);
    const location = useLocation();
    const isSubRoute = ["/personalinformation", "/familymembers", "/billingandpayments", "/yourvisits"].some(path => location.pathname.includes(path));

    return (
        <div>
            <h1 id="amheading">DiagnoDoc Account</h1>
            <hr />
            <div id="accountdiv">
                <div id="aleft">
                    <div id="usermaininfo">
                        <div>
                            <img id="userp" src="../../projectuser.jpg" alt="User" />
                        </div>
                        <div id="userdetails">
                            <h2 id="aname"><strong>{user?.username?.stringValue || "User"}</strong></h2>
                            <h3 id="aemail"><strong>{user?.email?.stringValue || "Email"}</strong></h3>
                        </div>
                    </div>
                    <div id="usermoreinfo">
                        <NavLink style={{ textDecoration: 'none', color: "black" }} to="personalinformation">
                            <h2><strong>Profile</strong></h2>
                        </NavLink>
                        <NavLink style={{ textDecoration: 'none', color: "black" }} to="familymembers">
                            <h2><strong>Members</strong></h2>
                        </NavLink>
                        <NavLink style={{ textDecoration: 'none', color: "black" }} to="billingandpayments">
                            <h2><strong>My Bookings</strong></h2>
                        </NavLink>
                        <NavLink style={{ textDecoration: 'none', color: "black" }} to="yourvisits">
                            <h2><strong>Results</strong></h2>
                        </NavLink>
                    </div>
                    <Link to="/" id="signout">
                        <button onClick={() => props.sst()}>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" />
                        </button>
                    </Link>
                </div>
                <div id="aright">
                    {isSubRoute ? <Outlet /> : (
                        <div id="empty">
                            <h1>Your Information will be displayed here</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Account;
