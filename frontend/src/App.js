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
function App()
{
  const [isloggedin,setisloggedin]=useState(false);
  console.log(isloggedin);
  function setsomething()
  {
    setisloggedin(true);
  }
  return(
    <div>
      <BrowserRouter>
        <Navbar isloggedin={isloggedin}></Navbar>
        <Routes>
          <Route path="/" element={<Firstdis></Firstdis>}></Route>
          <Route path="/fnc" element={<Fnc></Fnc>}></Route>
          <Route path="/pyv" element={<Pyv></Pyv>}></Route>
          <Route path="/ydr" element={<Ydr></Ydr>}></Route>
          <Route path="/rcu" element={<Rcu></Rcu>}></Route>
          <Route path="/register" element={<Register pr={setsomething}></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/account" element={<Account></Account>}></Route>
          
        </Routes>
      </BrowserRouter>
     
    
      

    </div>
  )
}
export default App;