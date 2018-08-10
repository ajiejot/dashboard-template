import React from 'react'
import Logo from '../../../img/sample_logo.png'

const TopNav = props =>(
    <nav className="navbar navbar-expand bg-light navbar-light">
    {/* <!-- Brand/logo --> */}
    <a className="navbar-brand" href="#">
      <img src={Logo} alt="logo" style={{"width":"150px","height": "50px"}}/>
    </a>

    {/* <!-- Links --> */}
    <ul className="navbar-nav">
        <li className="nav-item">
            <a style={{'cursor':'pointer'}} className="nav-link" onClick={props.click}><span className="navbar-toggler-icon"></span></a>
        </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link 1</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link 2</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link 3</a>
      </li>
    </ul>
  </nav>
)

export default TopNav;