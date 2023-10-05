import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
    <div className="footercontainer">
        <div className="footer">
            <div className="socials">
                <div className="footerlogo">
                <Link to='/'><img src="Unitradelogo.png" alt="UniTrade"></img></Link>
                <h1>Secure, Transparent, and Efficient Online Shopping on the Blockchain</h1>
                </div>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/" rel="noreferrer noopener" target="_blank">
                        <img src="Facebook.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" rel="noreferrer noopener" target="_blank">
                        <img src="Instagram.png" alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/home" rel="noreferrer noopener" target="_blank">
                        <img src="TwitterX.png" alt="TwitterX" />
                        </a>
                    </li>
                </ul>
                <div className="footerbtn">
                    <Link to='/signup'><button>Join our Platform</button></Link>
                </div>
            </div>
            <div className="about">
                <ul>
                    <h1>About</h1>
                    <li>Unitrade</li>
                    <li>Mission</li>
                    <li>Vision</li>
                </ul>
            </div>
            <div className="shop">
                <ul>
                    <h1>Shop</h1>
                    <li>Unitrade</li>
                    <li>Mission</li>
                    <li>Vision</li>
                </ul>
            </div>
            <div className="contact">
                    <h1>Contact</h1>
                    <span> +254(0)700 546 546</span>
                    <span>or 020 767 767</span>
                    <span>info@unitrade.com</span>
                    <span> www.unitrade.com</span>
            </div>
        </div>
            <div className="copyright">
            <h2>©2023 Copyright. All rights reserved</h2>
            </div>
        </div>
    )
}

export default Footer