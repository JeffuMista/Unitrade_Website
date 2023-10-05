import React from "react";
import Nav from "../components/Nav";
import Help from "../components/Help";
import Footer from "../components/Footer";
import Products from "./Products";
import Slides from "../components/Carousel";

function Store() {
    return (
        <div className='store-container'>
            <Nav />
            {/* <Slides /> */}
            <Products />
            <Help />
            <Footer />
        </div>
    )
     
}

export default Store;