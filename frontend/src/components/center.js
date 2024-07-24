import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/center.css"
import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';

function Center(props) {
    const { id } = useParams(); // Get the center ID from the URL

    // Replace with your actual data fetching logic
    const centerdetails = [
        { id: "1", centerName: "center1", distance: "3km", rating: "4.2" },
        { id: "2", centerName: "center2", distance: "5km", rating: "4.5" },
        { id: "3", centerName: "center3", distance: "6km", rating: "3.8" },
        { id: "4", centerName: "center4", distance: "5km", rating: "4.5" },
        { id: "5", centerName: "center5", distance: "6km", rating: "3.8" },
        { id: "6", centerName: "center6", distance: "6km", rating: "3.8" }
    ];

    // Find the center details based on the ID
    const center = centerdetails.find(c => c.id === id);

    return (
        <div id="centermaindiv">
            <div id="csd1">
                <div id="csd1l">
                    <div id="cimg"></div>
                    <h2>{center.centerName}</h2>
                    <h4><FontAwesomeIcon icon={faLocationDot} /> {center.distance}</h4>
                    <h4> <FontAwesomeIcon icon={faStar} /> {center.rating}</h4>
                </div>
                <div id="csd1r">
                    <h1>About Us</h1>
                    <p>ong established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                     
                </div>

                
            </div>
            <div id="csd2">
                <h1>Map</h1>
                <div id="csd2s1">

                </div>

            </div>
           
            <div id="csd3">
                <h2>Book An Appointment</h2>
                <div id="csd3s1">
                   <input type="text" placeholder="test" className="centerinp"></input>
                   <input type="text" placeholder="Address" className="centerinp"></input>
                   <select className="centerinp" placeholder="paymentmode">
                      <option value="" disabled selected>payment mode</option>
                      <option value="online">online</option>
                      <option value="offline">offline</option>
                   </select>
                    <button id="vwav">view Availability</button>

                </div>
                <div id="csd4">

                </div>
                <div id="csd5">
                    <h2>Reviews and Rating</h2>
                    <div id="csd5s1">
                        <div id="csd5ss1">
                          <h3 style={{marginTop:'6vh'}}>{center.rating}</h3>

                        </div>
                       

                    </div>
                    

                </div>
     <div id="csd6">
        <div id="csd6l">
          <h2>Review</h2>
          <h3>3.9</h3>
          <p>Lorem Ipsum" is a placeholder text commonly used in the graphic, print, and web design industries. It is derived from a scrambled section of Latin text from "de Finibus Bonorum et Malorum," a work by Cicero written in 45 BC. The primary purpose of Lorem Ipsum is to provide a neutral filler text that doesn't distract viewers with readable content, allowing them to focus on the design and layout.</p>
        </div>
        <div id="csd6m">
         <h2>Review</h2>
         <h3>4.3</h3>
         <p>Lorem Ipsum" is a placeholder text commonly used in the graphic, print, and web design industries. It is derived from a scrambled section of Latin text from "de Finibus Bonorum et Malorum," a work by Cicero written in 45 BC. The primary purpose of Lorem Ipsum is to provide a neutral filler text that doesn't distract viewers with readable content, allowing them to focus on the design and layout.</p>
        </div>
        <div id="csd6r">
         <h2>Review</h2>
         <h3>4.5 </h3>
         <p>Lorem Ipsum" is a placeholder text commonly used in the graphic, print, and web design industries. It is derived from a scrambled section of Latin text from "de Finibus Bonorum et Malorum," a work by Cicero written in 45 BC. The primary purpose of Lorem Ipsum is to provide a neutral filler text that doesn't distract viewers with readable content, allowing them to focus on the design and layout.</p>
        </div>

      </div>


     </div>
           
            
           
        </div>
    );
}

export default Center;
