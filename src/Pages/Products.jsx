import React from "react";
import Item from "../components/Item";
import products from "../components/data";



function Products() {
        return (
            <div>
                <div className='items'>
                {products.map ( products => (
                <Item  
                key={products.id}
                title={products.title}
                image={products.image}
                price={products.price}
                quantity={products.quantity}
                // {...products}
                />
                ))}
            </div>
            <div className="see-more">
                <h1>See More</h1>
                </div>
        </div>
        )
     }
    // return (
    // <div>
    //     {Items}
    // </div>
    // )


export default Products;