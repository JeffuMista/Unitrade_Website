import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Item(props) {
    return (
            <div className="product-section"> 
                <div className="items-container">
                    <div key={props.id} className="item-container" >
                        <img src={props.image} alt="Hp Pavilion" />
                        <h1>{props.title}</h1>
                        <h2>MOQ: <b>{props.quantity} pieces</b></h2>
                        <div className="rating">
                                <div className="icons">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                                <h2>${props.price}</h2>
                        </div>
                    </div>
                </div>
                
            </div>

                
    )
}
export default Item;