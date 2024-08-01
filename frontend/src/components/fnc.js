import React,{useState} from "react";
import "../styles/fnc.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom";

function Fnc(props) {
    const centerdetails = [
        { id: "1", centerName: "center1", distance: "3km", rating: "4.2" },
        { id: "2", centerName: "center2", distance: "5km", rating: "4.5" },
        { id: "3", centerName: "center3", distance: "6km", rating: "3.8" },
        { id: "4", centerName: "center4", distance: "5km", rating: "4.5" },
        { id: "5", centerName: "center5", distance: "6km", rating: "3.8" },
        { id: "6", centerName: "center6", distance: "6km", rating: "3.8" }
    ];
    const location=useLocation();
    const state=location.state;
    // const { location: searchLocation, date, test } = state || {};
    console.log("location in fnc",state.location);
    const [locationv,setlocationv]=useState(state.location);
    const [datev,setdatev]=useState(state.date);
    const [testv,settestv]=useState(state.test);
    const [formdata,setformdata]=useState({
        date:datev,
        location:locationv,
        test:testv
     
    });
    console.log(`date: ${datev}`);
    console.log(`location: ${locationv}`);
    console.log(`test: ${testv}`);
    console.log('formdata:',formdata);

   


    return (
        <div id="fncmaindiv">
            <div id="fplocationd">
                <div id="flocationd">
                    <input type="date" id="fdateinp" value={datev} name="date" onChange={(e)=>{
                        setdatev(e.target.value);
                        formdata[e.target.name]=e.target.value;
                    }} />
                    <input type="text" placeholder="Enter Your Location" id="flocationinp" value={locationv} name="location" onChange={(e)=>{
                        setlocationv(e.target.value);
                        formdata[e.target.name]=e.target.value;
                    }} />
                    <input type="text" id="ftestinp" placeholder="Enter the test you need" value={testv} name="test" onChange={(e)=>{
                        settestv(e.target.value);
                        formdata[e.target.name]=e.target.value;
                    }} />
                    <Link to="/fnc" state={formdata}> 
                        <button id="flocsub" onClick={() => {}}>Search</button>
                    </Link>
                </div>
            </div>
            <div id="allcentersdetails">
                <div id="allcentersdetailsleft">
                    {centerdetails.map((center) => (
                        <Link 
                            key={center.id} 
                            to={`/center/${center.id}`}>
                            <button className="cdb">
                                <span className="hinb">{center.id}</span>
                                <span className="hinb">{center.centerName}</span>
                                <span className="hinb"><FontAwesomeIcon icon={faLocationDot} /> {center.distance}</span>
                                <span className="hinb"><FontAwesomeIcon icon={faStar} /> {center.rating}</span>
                            </button>
                        </Link>
                    ))}
                </div>
                <div id="allcentersdetailsright"></div>
            </div>
        </div>
    );
}

export default Fnc;
