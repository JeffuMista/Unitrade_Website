import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
              //   const aboutInfo = document.getElementsByClassName("about-info");
              //   const contactInfo = document.getElementsByClassName("contact-info")
              //   const Footer = document.getElementsByClassName("footer")
              //   aboutInfo.addEventListener("click", scrollToBottom());
              //   contactInfo.addEventListener("click", scrollToBottom());
              //   function scrollToBottom() {
              //   Footer.scrollIntoView({behavior: 'smooth'})
              // }
    return (
        <div className='navbarcontainer'>
          <div className="navbar">
          <div className="logo">
            <Link to='/'><img src="Unitradelogo.png" alt="UniTrade" /></Link>
            <h1>UniTrade</h1>
          </div>
          <nav className='navigation'>
            <ul>
                <li>
                  <Link to='/'>Home</Link>
                  </li>
                <li className="about-info">
                  <Link to='/'>About</Link> 
                </li>
                <li>
                  <Link to='/products'>Shop</Link> 
                </li>
                <li className='contact-info'>
                  <Link to='/'>Contact</Link>
                </li> 
            </ul>
          </nav>
            <div className='navbtn'>
                <Link to='/signup'><button type='button'>Join our platform</button></Link>
            </div>
            {/* scrollToBottom(); */}
          </div>
        </div>
      );
}
export default Nav