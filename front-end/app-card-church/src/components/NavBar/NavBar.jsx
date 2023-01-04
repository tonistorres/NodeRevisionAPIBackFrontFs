import React from "react";
import logoBootstrap from './bootstrap-4.svg';
import './NavBar.css';


function NavBar() {
    return (
        <div className="container-fluid bg-light border-custom-1-nav">
            <nav className="navbar navbar-light bg-light">
                <div className="row w-100">
                    <div className="col-2">
                        <a className="navbar-brand" href="#">
                            <img src={logoBootstrap} width="30" height="30" alt="Logo Bootstrap" />
                        </a>
                    </div>
                    <div className="col-10">
                        <h1> Lista de Membros Gerada no Back-End Módulo fs (Arquivo/Json)</h1>
                    </div>


                </div>
            </nav>
        </div>
    );
}

export default NavBar;
