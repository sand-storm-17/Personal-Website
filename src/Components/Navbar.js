import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <div className="nav">
            <div className="header nav-link">
                <h1>Sandeep</h1>
                <p>Developer</p>
            </div>
            <div className="nav-link-pos">
                <div className="nav-link"><a href="#education"><h3>Resume</h3></a></div>
                <div className="nav-link"><a href="#footer"><h3>Contact</h3></a></div>
            </div>   
        </div>
    )
}

export default Navbar
