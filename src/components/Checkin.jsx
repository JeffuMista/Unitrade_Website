function Checkin() {
    return (
        <div className="checking">
            <div className="checkin-container">
                <div className="login-logo">
                <img src="src/assets/Unitradelogo2.png" alt="UniTrade" className="unitradelogo"/>
                </div>
                <h1>Welcome Back!</h1>
                <h2>Log in into your account</h2>
                <div className="inputs">
                    <div className="contact">
                        <h3>Phone number</h3>
                        <div className="input">
                        <img src="src/assets/Name.png" alt="Contact" />
                        <input type="text" placeholder="Phone number" />
                        </div>
                    </div>
                    <div className="password">
                        <h3>Password</h3>
                        <div className="input">
                        <img src="src/assets/Password.png" alt="Password" />
                        <input type="text" placeholder="Password" />
                        </div>
                    </div>
                    <div className="checkin-btn">
                                <img src="src/assets/Login.png" alt="Login" />
                                <h1>Log In </h1>
                    </div>
                </div>
            </div>
            <div className="signup-banner">
                <div className="welcome">
                    <h1> Welcome to</h1>
                    <h2> UniTrade</h2>
                    <h3> For better trading</h3>
                </div>
                <div className="welcome-img">
                    <img src="" alt="" />
                </div>
            </div>
            
        </div>
    )
}
export default Checkin