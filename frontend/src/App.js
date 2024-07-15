import React,{useState} from "react";
import Navbar from "./components/navbar";
import Firstdis from "./components/firstdis";
import "./styles/App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Fnc from "./components/fnc";
import Register from "./components/Register";
import Pyv from "./components/Pyv";
import Rcu from "./components/Rcu";
import Ydr from "./components/ydr";
import Login from "./components/Login";
import Account from "./components/Account";
import Center from "./components/center";
import { Personalinformation,Familymembers,Billingandpayments,Yourvisits } from "./components/Account";
function App()
{
  const [isloggedin,setisloggedin]=useState(false);
  console.log(isloggedin);
  function setsomething()
  {
    setisloggedin(!isloggedin);
  }
  return(
    <div>
      <BrowserRouter>
        <div id="topblock"></div>
        <Navbar isloggedin={isloggedin}></Navbar>
        <Routes>
          <Route path="/" element={<Firstdis  ></Firstdis>}></Route>
          <Route path="/fnc" element={<Fnc isl={isloggedin}></Fnc>}>
            <Route path="center" element={<Center></Center>}></Route>
          </Route>

          <Route path="/pyv" element={<Pyv></Pyv>}></Route>
          <Route path="/ydr" element={<Ydr></Ydr>}></Route>
          <Route path="/rcu" element={<Rcu></Rcu>}></Route>
          <Route path="/register" element={<Register pr={setsomething} isl={isloggedin}></Register>}></Route>
          <Route path="/login" element={<Login pr={setsomething}></Login>}></Route>
          <Route path="/account" element={<Account pr={setsomething} isl={isloggedin}></Account>}>
             <Route path="personalinformation" element={<Personalinformation></Personalinformation>}></Route>
             <Route path="familymembers" element={<Familymembers></Familymembers>}></Route>
             <Route path="billingandpayments" element={<Billingandpayments></Billingandpayments>}></Route>
             <Route path="yourvisits" element={<Yourvisits></Yourvisits>}></Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
     
    
      

    </div>
  )
}
export default App;