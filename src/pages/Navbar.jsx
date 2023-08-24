import React from 'react'
import { Link } from 'react-router-dom'
import {MDBNavbarLink, MDBBadge, MDBIcon} from 'mdb-react-ui-kit'

function Navbar({selectedCards}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid mx-2">

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className='nav-link mx-2' to="/todo">Todo</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link mx-2' to="/shopping">Shopping Cart</Link>
            </li>
          </ul>
        </div>

        <div>
        <MDBNavbarLink>
              <Link to='/checkout'>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </Link>
              <MDBBadge pill color='info'>{selectedCards.length}</MDBBadge>

            </MDBNavbarLink>
        </div>

        
      </div>
    </nav>
  )
}

export default Navbar