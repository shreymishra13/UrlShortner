import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg text-white px-5" style={{backgroundColor:'#6A1E55'}}>
  <a className="navbar-brand text-white" href="#"  style={{backgroundColor:'#6A1E55'}} >SnapURL</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"  style={{backgroundColor:'#6A1E55'}}>
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse text-white" id="navbarSupportedContent"  style={{backgroundColor:'#6A1E55'}}  >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link text-white" href="#">Home </a>
      </li>

    </ul>
    
  </div>
</nav>
      
    </>
  )
}
