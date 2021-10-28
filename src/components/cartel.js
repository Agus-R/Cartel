import React from "react";
import './cartel.css';

function Cartel() {
    return(
        <div className="cartel">
            <div className="container">
                <img className="logo" src="https://assets-us-01.kc-usercontent.com/4e9bdd7a-2db8-4c33-a13a-0c368ec2f108/afda35d9-9f0d-4142-aaa3-1b6148aba802/23-kk-logo-verticlal.png" alt="kontent-logo" />
                <div className="containsText">
                    <h1 className="title"> Join us in Kentico Horizon </h1>
                    <p className="text">           
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <button className="btn">
                        Click here
                    </button>
                </div>
            </div>
        </div>
        
    );
}

export default Cartel;