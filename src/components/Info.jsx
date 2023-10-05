import React from "react";

function Info() {
    return (
        <div className="infocontainer">
            <h1>Key Benefits</h1>
            <div className="benefits">
                <div className="infobox">
                    <img src="Security.png" alt="Security" />
                    <h2>Blockchain-Powered Security</h2>
                    <p>
                    We ensure the highest level of security for your 
                    transactions, protecting your data and financial 
                    information like never before.
                    </p>
                </div>
                <div className="infobox">
                    <img src="Broken Link.png" alt="" />
                    <h2>Transparent Supply Chains</h2>
                    <p>
                    See every step of your product's journey 
                    with our blockchain-enabled supply chain tracking.
                     Know where your products come from and make 
                     informed choices.
                    </p>
                </div>
                <div className="infobox">
                    <img src="Transaction.png" alt="" />
                    <h2>Efficient Transactions</h2>
                    <p>
                    We ensure the highest level of security for your 
                    transactions, protecting your data and financial 
                    information like never before.
                    </p>
                </div>
            </div>
            <div className="works">
                <h2>How it works</h2>
                <div className="logistics">
                    <div className="ordering">
                        <h3>Shop, pay, and track deliveries effortlessly with 
                            our user-friendly interface.</h3>
                        <ul>
                            <li className="list1">
                                <img src="process6.png" alt="Shop" className="shop1" />
                                <img src="Shopping cart.png" alt="Shopping Cart" className="shop2"/>
                                <h1>Shop</h1>
                            </li>
                            <li className="list2">
                                <img src="process4.png" alt="Pay" className="payment1"/>
                                <img src="Payment.png" alt="Payment" className="payment2"/>
                                <h1>Pay</h1>
                            </li>
                            <li className="list3">
                                <img src="process5.png" alt="Track" className="track1" />
                                <img src="Track Order.png" alt="Track Order" className="track2"/>
                                <h1>Track</h1>
                            </li>
                        </ul>
                    </div>
                    <div className="shopper">
                        <img src="Screen.png" alt="Screen" className="shopper1"/>
                        <img src="Shopper.png" alt="Shopper" className="shopper2"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Info;