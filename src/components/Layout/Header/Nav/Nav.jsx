import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'
import logo from '../../../gfx/logo-big5.png'
import logosmall from '../../../gfx/logo-small.png'
import flagDK from '../../../gfx/flag-dk.png'
import flagUK from '../../../gfx/flag-uk.png'

const Nav = () => {

    return (
        <div className="container-fluid">

            <nav className="navbar navbar-expand-lg navbar-light px-0 pb-2">

                {/* Logo */}

                <span className="navbar-brand pt-2">
                    <NavLink exact to="/" className="navbar_link" activeClassName="navbar_link--active"><img className="logo pl-3" src={logo} alt="Diving Djursland Logo" /> <img className="logosmall pl-3" src={logosmall} alt="Diving Djursland Logo small" /></NavLink>
                </span>

                {/* Navbar collapse button */}

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span>
                </button>


                {/* Collapses all links */}
                <div className="collapse navbar-collapse pl-3" id="navbarSupportedContent">

                    {/* List of links on Navbar*/}

                    <ul className="navbar-nav pt-3 mx-auto">
                        <li className="nav-item active">
                            <NavLink exact to="/" onClick={close} className="navbar_link" activeClassName="navbar_link--active"><span className="danish">Forside</span> <span className="english">Home</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dykkerspots" onClick={close} className="navbar_link" activeClassName="navbar_link--active"><span className="danish">Dykkerspots</span> <span className="english">Diving Spots</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/info" onClick={close} className="navbar_link" activeClassName="navbar_link--active"><span className="danish">Praktisk Info</span> <span className="english">Practical Info</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/booking" onClick={close} className="navbar_link" activeClassName="navbar_link--active">Booking</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/kontakt" onClick={close} className="navbar_link" activeClassName="navbar_link--active"><span className="danish">Kontakt</span> <span className="english">Contact</span></NavLink>
                        </li>
                    </ul>


                    <img src={flagDK} className="flagicon" onClick={setDK} alt="danish flag icon"/>
                    <img src={flagUK} className="flagicon" onClick={setUK} alt="english flag icon"/>


                </div>

            </nav>

        </div>
    )
}

// Funktion til at skifte sprog //
// Kigger efter alle elementer med classname "danish" og "english" og sætter dem til henholdsvis display: none og display: block

function setUK() {
    var x, i;
    x = document.querySelectorAll(".danish");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    var y, ii;
    y = document.querySelectorAll(".english");
    for (ii = 0; ii < x.length; ii++) {
      y[ii].style.display = "block";
    }
    localStorage.setItem("language", "english")
}

function setDK() {
    var xy, iii;
    xy = document.querySelectorAll(".danish");
    for (iii = 0; iii < xy.length; iii++) {
      xy[iii].style.display = "block";
    }
    var yx, iiii;
    yx = document.querySelectorAll(".english");
    for (iiii = 0; iiii < yx.length; iiii++) {
      yx[iiii].style.display = "none";
    }
    localStorage.setItem("language", "danish")
}

// Funktion til at lukke boostrap burger menu, når der klikkes på et link.
// Hvis skærmen er mindre end 992 px (bootstrap lg), så "klikker" den på burgermenu button, så den lukker.
// Det er nødvendigt med en 'if' funktion, for ellers blinker navmenu i fullscreen (large size), når man trykker på et link.

function close() {

    if (window.innerWidth < 992) {
    document.querySelector(".navbar-toggler").click();
    }
}


export default Nav
