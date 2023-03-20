import React from 'react'
import "./Navbar2.css"
export default function Navbar2() {
    return (
        <nav className="navbar2 navbar-expand-lg navbar-light ">
            <div className="container">

            {/* <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  */}
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav " id="navbar-list">
      <li className="nav-item active">
        <a className="nav-link" href="#profile">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#project">Projects</a>
      </li> <li className="nav-item">
        <a className="nav-link" href="#techStack">Technical Skills</a>
      </li>
       <li className="nav-item">
        <a className="nav-link" href="#contact">Contact Me</a>
        </li>
     
     
    </ul>
    
  </div>
            </div>
</nav>
    )
}
