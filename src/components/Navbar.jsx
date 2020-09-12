import React from "react";
import { Link } from "react-router-dom";
import About from '../pages/About'
import Works from '../pages/Works'

const Navbar = () => {

  return (
    <div className='test2'>
      <nav className="navbar fixed-top navbar-light bg-light">
        <ul className='my-navbar'>
          <li>
            <Link to='/'> Robinet</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/works'>Works</Link>
          </li>
        </ul>
      </nav>
    </div>
  )

}

export default Navbar;