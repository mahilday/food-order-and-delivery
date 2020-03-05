import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom'
import { bool } from 'prop-types'



const Menu = ({open}) => {
    return (
     <section open ={open} className="menu">
     <ul className='list'>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/">Order</Link>
              </li>
              <li>
                  <Link to="/">Services</Link>
              </li>
              <li>
                  <Link to="/">About</Link>
              </li>
              <li>
                  <Link to="/">Soups and Stews special</Link>
              </li>
              <li>
                  <Link to="/">Other dishes</Link>
              </li>
              <li>
                  <Link to="/">Contact</Link>
              </li>
          </ul>
     </section>
    )
  }
  Menu.propTypes = {
    open: bool.isRequired,
  };
export default Menu