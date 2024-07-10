import React, { useState } from "react";
import "../styles/fnc.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

function Fnc(props) {
    const vhl = ["abc", "bcd", "cde"];
    const sa = ["center1", "center2", "center3", "center4"];
    const [loc, setLoc] = useState(false);
    const [lval,setlval]=useState("");
    console.log("lval: ",lval);
    function submitlocation(data){
        axios.post(`${URL}/fnc`,data).then(
            (res)=>{
                console.log(res);
            }
        ).catch((error)=>{
            console.log("incatch");
            console.log(error);
        })
    }
    console.log(loc);
    return (
        props.isl ? (
            <div id="mdivfnc">
                <h1 id="fmh">Find Nearest Center</h1>
                <hr id="hr" />
                <div id="location">
                    <input type="text" placeholder="Enter Your Location" id="locationinp" onChange={(e)=>{
                        setlval(e.target.value);
                    }} />
                    <button id="locsub" onClick={() => {
                        setLoc(true);
                    }}>Done</button>
                </div>
                <div id="rvh">
                    {loc ? (
                        <div>
                            {sa.map((val, index) => (
                                <div id="rvhdiv" key={index}>
                                    <button className="visitedcentersbutton">{val}</button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h2 style={{ marginLeft: '1vw', color: 'rgb(79,82,142)' }}>visited centers</h2>
                            {vhl.map((val, index) => (
                                <div id="rvhdiv" key={index}>
                                    <button className="visitedcentersbutton">{val}</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        ) : (
            <div>
                <h1>You have to login</h1>
            </div>
        )
    );
}

export default Fnc;
