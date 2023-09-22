import React from "react";
import { Link } from "react-router-dom";

function Banner() {
    return(
        <div className="banner">
            <div> 
                <span className="goldtxt">Revolutionalize </span>
                <span className="plaintxt">Your Shopping Experience with </span>
                <span className="goldtxt">Blockchain-Powered </span>
                <span className="plaintxt">E-Commerce</span>
                <h3>Secure, Transparent, and Efficient Online Shopping on the Blockchain</h3>
                <Link to='/signup'>
                <button type="button">Join our platform</button>
                </Link>
            </div>
            <div className="bannerimg">
                 <img src="src/assets/Banner.png" alt="Banner" />
            </div>
        </div>
    )
};
export default Banner