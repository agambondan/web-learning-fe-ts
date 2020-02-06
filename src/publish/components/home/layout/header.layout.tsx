import React from "react";


export default function HeaderLayout(): JSX.Element {
    return (
        <nav className="navbar navbar-expand-lg navbar-light white fixed-top pt-2 mb-1">
            <a className="navbar-brand text-dark" href="#"><i className="fas fa-user mr-3"/>Codingin</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent-333"
                    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse float-right" id="navbarSupportedContent-333">
                <ul className="navbar-nav mr-auto">
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-dark" id="navbarDropdownMenuLink-333"
                           data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false">Pages
                        </a>
                        <div className="dropdown-menu dropdown-default"
                             aria-labelledby="navbarDropdownMenuLink-333">
                            <a className="dropdown-item" href="#">Course</a>
                            <a className="dropdown-item" href="#">News</a>
                            <a className="dropdown-item" href="#">Contact</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" href="#">Home</a>
                    </li>
                    <li className="mr-5"/>
                    <li className="nav-item">
                        <div className="dropdown">
                            <a className="nav-link dropdown-toggle text-dark" type="button" id="dropdownMenu2"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user"/>
                            </a>
                            <div className="dropdown-menu dropdown-menu-sm-right" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button">Profile</button>
                                <button className="dropdown-item" type="button">Setting</button>
                                <button className="dropdown-item" type="button">Logout</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}