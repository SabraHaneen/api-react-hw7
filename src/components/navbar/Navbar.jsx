import React from 'react'

export default function Navbar() {
  return (

    
<nav className="px-5  navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/home">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/resturant">Restaurant</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/products">Products</a>
      </li>
     
      
    </ul>
  
  </div>
</nav>

    
  )
}
