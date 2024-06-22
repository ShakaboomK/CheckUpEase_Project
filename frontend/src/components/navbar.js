import React from "react";
function Navbar()
{
    return(
        <div id="navbar">
            <div>
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpCOXuliXld2Nd_saKc23nvEaEbTFUsmCFyA&s"></img>
            </div>
            <div id="search">
                <input type="text" placeholder="search" id="inf"></input>

            </div>
            <div>
                <h3><strong>Find Nearest Center</strong></h3>
            </div>
            <div>
                <h3><strong>Plan Your Visit</strong></h3>
            </div>
            <div>
                <h4><strong>Your Diagnosis Result</strong></h4>
            </div>
            <div>
                <h3><strong>Regular Checkup</strong></h3>
            </div>
            <div>
                <h3><strong>Login/Signup</strong></h3>
            </div>

        </div>
    )
}
export default Navbar;