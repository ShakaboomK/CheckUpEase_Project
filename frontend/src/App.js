// import React,{useState,useEffect} from "react";
// import Navbar from "./components/navbar";
// import Firstdis from "./components/firstdis";
// import "./styles/App.css";
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Fnc from "./components/fnc";
// import Register from "./components/Register";
// import Pyv from "./components/Pyv";
// import Rcu from "./components/Rcu";
// import Ydr from "./components/ydr";
// import Login from "./components/Login";
// import Account from "./components/Account";
// import Center from "./components/center";
// import { Personalinformation,Familymembers,Bookings,Results } from "./components/Account";
// import { UserProvider } from "./components/context";
// import { UserContext } from "./components/context";
// import { useContext } from "react";
// function App()
// {
//   const [isloggedin,setisloggedin]=useState(false);
 
  
//   // const { setUser } = useContext(UserContext); 
//   const {user}=useContext(UserContext);
//   useEffect(() => {
//     console.log("User context value:", user);
//   }, [user]);
//   function setsomething()
//   {
//     setisloggedin(!isloggedin);
//   }
//   return(
//     <UserProvider>
//      <div>
    
     
    
//       <BrowserRouter>
       
//         <Navbar isloggedin={isloggedin}></Navbar>
//         <Routes>
//           <Route path="/" element={<Firstdis  ></Firstdis>}></Route>
//           <Route path="/fnc" element={<Fnc></Fnc>}>
//             {/* <Route path="center" element={<Center></Center>}></Route> */}
//           </Route>
//           <Route path="/center/:id" element={<Center></Center>}></Route>

//           <Route path="/pyv" element={<Pyv></Pyv>}></Route>
//           <Route path="/ydr" element={<Ydr></Ydr>}></Route>
//           <Route path="/rcu" element={<Rcu></Rcu>}></Route>
//           <Route path="/register" element={<Register pr={setsomething} isl={isloggedin}></Register>}></Route>
//           <Route path="/login" element={<Login pr={setsomething}></Login>}></Route>
//           <Route path="/account" element={<Account  isl={isloggedin} sst={setsomething} ></Account>}>
//              <Route path="personalinformation" element={<Personalinformation></Personalinformation>}></Route>
//              <Route path="familymembers" element={<Familymembers></Familymembers>}></Route>
//              <Route path="billingandpayments" element={<Bookings></Bookings>}></Route>
//              <Route path="yourvisits" element={<Results></Results>}></Route>
//           </Route>
          
//         </Routes>
//       </BrowserRouter>
    
     
    
      

//     </div>
//     </UserProvider>
     
//   )
// }
// export default App;
import React, { useState, useContext, useEffect } from "react";
import Navbar from "./components/navbar";
import Firstdis from "./components/firstdis";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fnc from "./components/fnc";
import Register from "./components/Register";
import Pyv from "./components/Pyv";
import Rcu from "./components/Rcu";
import Ydr from "./components/ydr";
import Login from "./components/Login";
import Account from "./components/Account";
import Center from "./components/center";
import { Personalinformation, Familymembers, Bookings, Results } from "./components/Account";
import { UserContext } from "./components/context";

function App() {
  const [isloggedin, setisloggedin] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log("User context value:", user);
  }, [user]);

  function setsomething() {
    setisloggedin(!isloggedin);
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar isloggedin={isloggedin} />
        <Routes>
          <Route path="/" element={<Firstdis />} />
          <Route path="/fnc" element={<Fnc />} />
          <Route path="/center/:id" element={<Center />} />
          <Route path="/pyv" element={<Pyv />} />
          <Route path="/ydr" element={<Ydr />} />
          <Route path="/rcu" element={<Rcu />} />
          <Route path="/register" element={<Register pr={setsomething} isl={isloggedin} />} />
          <Route path="/login" element={<Login pr={setsomething} />} />
          <Route path="/account" element={<Account isl={isloggedin} sst={setsomething} />}>
            <Route path="personalinformation" element={<Personalinformation />} />
            <Route path="familymembers" element={<Familymembers />} />
            <Route path="billingandpayments" element={<Bookings />} />
            <Route path="yourvisits" element={<Results />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
