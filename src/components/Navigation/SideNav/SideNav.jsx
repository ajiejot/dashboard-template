import React from 'react'
import './SideNav.css'

const SideNav = props =>(
<div className="sidebar-wrapper">
    <ul className="sidebar-nav">
        <li><a href="#">Account</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
    </ul>
</div>

)

export default SideNav