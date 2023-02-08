import React from 'react';

import './Navbar.css';
import images from '../../images/images';
import {Link} from 'react-router-dom'

const Navbar = () => {
 
  return(
  <nav className="app__navbar">
    <div className="app__navbar-logo">
<img src={images.Logo} alt="app-logo"/>
    </div>
<ul  className="app__navbar-links">
<Link className="nav-link"  to="/" ><h5>HOME</h5></Link>
<Link className="nav-link" to="/automobilelogos" ><h5>Automobiles</h5></Link>
<Link  className="nav-link" to="/policelogos"><h5>Police Badges</h5></Link>

</ul>


  </nav>
  )};

export default Navbar;
