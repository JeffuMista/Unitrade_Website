import React from "react";
import Nav from "../components/Nav";
import Help from "../components/Help";
import Footer from "../components/Footer";
import Products from "./Products";
import Categories from "../components/Categories";

function Store() {
    return (
        <div>
            <Nav />
            <Categories />
            <Products />
            <Help />
            <Footer />
        </div>
    )
     
}

export default Store;