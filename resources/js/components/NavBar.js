import React from 'react';
import ReactDOM from 'react-dom';

function NavBar() {
    return (
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
    );
}

export default NavBar;

if (document.getElementById('navbar')) {
    ReactDOM.render(<NavBar />, document.getElementById('navbar'));
    console.log('render navbar');
}
