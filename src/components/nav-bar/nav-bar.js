import React from 'react';
import "./nav-bar.css";

const NavBar = ({ setArtData }) => {

    return (
        <nav>
            <div className="logo">
                <h1>STOCKTN</h1>
            </div>
            <div className="searchBar">
                <input type="text" placeholder="search" className="search-input" onChange={event => { setArtData(event.target.value) }} />
            </div>
            <div className="nouveau">
                nouvel article +
            </div>
        </nav>
    );
}

export default NavBar;