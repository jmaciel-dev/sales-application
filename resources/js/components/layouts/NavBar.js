import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button className="navbar-toggler" type="button" dataToggle="collapse" datTarget="#navbar" ariaControls="navbar" ariaExpanded="false" ariaLabel="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/"> Home </a>
                </li>
            </ul>
        </div>
    </nav>
)

export default NavBar
