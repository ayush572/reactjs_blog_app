import {useState} from 'react';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Personal blog</h1>
            <div className="links">
                <a href="/">Home</a><br />
                <a href="/create" >Create blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;