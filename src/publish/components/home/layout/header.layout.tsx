import React from "react";


export default function HeaderLayout():JSX.Element {
    return (
            <nav className="mb-1 navbar navbar-expand-lg navbar-dark white   fixed-top">
                <a className="navbar-brand text-dark" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent-333"
                        aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" id="navbarDropdownMenuLink-333"
                               data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">Dropdown
                            </a>
                            <div className="dropdown-menu dropdown-default"
                                 aria-labelledby="navbarDropdownMenuLink-333">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle text-dark" id="navbarDropdownMenuLink-333"
                               data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user"/>
                            </a>
                            <div className="dropdown-menu navbar-right dropdown-default"
                                 aria-labelledby="navbarDropdownMenuLink-333">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}